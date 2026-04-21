import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.medbillpro.com/v1';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Track refresh state
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => (error ? prom.reject(error) : prom.resolve(token)));
  failedQueue = [];
};

// Lazy import store to avoid circular deps
const getStore = () => import('@app/store').then(m => m.store);

// ── REQUEST: attach token ──────────────────────────────────
axiosInstance.interceptors.request.use(
  async config => {
    try {
      const store = await getStore();
      const token = store.getState().auth.accessToken;
      if (token) config.headers.Authorization = `Bearer ${token}`;
    } catch (_) {}
    return config;
  },
  error => Promise.reject(error)
);

// ── RESPONSE: handle 401 token refresh ────────────────────
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          original.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(original);
        });
      }

      original._retry = true;
      isRefreshing = true;

      try {
        const store = await getStore();
        const { refreshTokenThunk, logout } = await import('@modules/auth/store/authSlice');
        const newToken = await store.dispatch(refreshTokenThunk()).unwrap();
        processQueue(null, newToken);
        original.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(original);
      } catch (refreshError) {
        processQueue(refreshError, null);
        const store = await getStore();
        const { logout } = await import('@modules/auth/store/authSlice');
        store.dispatch(logout());
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    if (error.response?.status === 403) {
      console.warn('[MedBill] 403 Forbidden:', error.config?.url);
    }

    if (error.response?.status >= 500) {
      console.error('[MedBill] Server error:', error.response?.status, error.config?.url);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
