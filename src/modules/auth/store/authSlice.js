import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@config/axiosConfig";
import { API } from "@constants/apiEndpoints";

export const refreshTokenThunk = createAsyncThunk(
  "auth/refreshToken",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { refreshToken } = getState().auth;
      const { data } = await axiosInstance.post(API.AUTH.REFRESH, {
        refreshToken,
      });
      return data.accessToken;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

const parseJSON = (value) => {
  try {
    return value && value !== "undefined" ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // user: JSON.parse(localStorage.getItem("medbill_user")) || null,
    user: parseJSON(localStorage.getItem("medbill_user")),
    accessToken: localStorage.getItem("medbill_access_token") || null,
    refreshToken: localStorage.getItem("medbill_refresh_token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    setCredentials(state, { payload }) {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      localStorage.setItem("medbill_user", JSON.stringify(payload.user));
      localStorage.setItem("medbill_access_token", payload.accessToken);
      localStorage.setItem("medbill_refresh_token", payload.refreshToken);
    },
    logout(state) {
      state.user = state.accessToken = state.refreshToken = null;
      localStorage.removeItem("medbill_user");
      localStorage.removeItem("medbill_access_token");
      localStorage.removeItem("medbill_refresh_token");
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
    setError(state, { payload }) {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshTokenThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshTokenThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accessToken = payload;
        localStorage.setItem("medbill_access_token", payload);
      })
      .addCase(refreshTokenThunk.rejected, (state) => {
        state.loading = false;
        state.user = state.accessToken = state.refreshToken = null;
        localStorage.removeItem("medbill_user");
        localStorage.removeItem("medbill_access_token");
        localStorage.removeItem("medbill_refresh_token");
      });
  },
});

export const { setCredentials, logout, setLoading, setError } =
  authSlice.actions;
export default authSlice.reducer;
