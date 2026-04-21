const BASE = '';

export const API = {
  AUTH: {
    LOGIN:   `${BASE}/auth/login`,
    LOGOUT:  `${BASE}/auth/logout`,
    REFRESH: `${BASE}/auth/refresh`,
    ME:      `${BASE}/auth/me`,
  },
  WELCOME: {
    TASKS:        `${BASE}/tasks`,
    MESSAGES:     `${BASE}/messages`,
    DASHBOARD:    `${BASE}/dashboard/stats`,
  },
  CLAIM: {
    LIST:        `${BASE}/claims`,
    DETAIL:      `${BASE}/claims`,
    CREATE:      `${BASE}/claims`,
    UPDATE:      `${BASE}/claims`,
    DELETE:      `${BASE}/claims`,
    BATCH_PRINT: `${BASE}/claims/batch-print`,
    TRACKER:     `${BASE}/claims/tracker`,
    CONTROL:     `${BASE}/claims/control`,
    FOLLOW_UP:   `${BASE}/claims/follow-up`,
    SETTINGS:    `${BASE}/claims/settings`,
  },
  PATIENT: {
    LIST:   `${BASE}/patients`,
    DETAIL: `${BASE}/patients`,
    CREATE: `${BASE}/patients`,
    UPDATE: `${BASE}/patients`,
    DELETE: `${BASE}/patients`,
  },
  PAYMENT: {
    LIST:   `${BASE}/payments`,
    CREATE: `${BASE}/payments`,
    UPDATE: `${BASE}/payments`,
    DELETE: `${BASE}/payments`,
  },
  REPORTS: {
    LIST:     `${BASE}/reports`,
    GENERATE: `${BASE}/reports/generate`,
    EXPORT:   `${BASE}/reports/export`,
  },
  APPOINTMENTS: {
    LIST:   `${BASE}/appointments`,
    CREATE: `${BASE}/appointments`,
    UPDATE: `${BASE}/appointments`,
    DELETE: `${BASE}/appointments`,
  },
  DOCUMENTS: {
    LIST:   `${BASE}/documents`,
    UPLOAD: `${BASE}/documents/upload`,
    DELETE: `${BASE}/documents`,
  },
  INTERFACE: {
    LIST:   `${BASE}/interfaces`,
    UPDATE: `${BASE}/interfaces`,
  },
  CUSTOMER_SETUP: {
    GET:    `${BASE}/customer-setup`,
    UPDATE: `${BASE}/customer-setup`,
  },
  ACCOUNT_ADMIN: {
    USERS:        `${BASE}/admin/users`,
    CREATE_USER:  `${BASE}/admin/users`,
    UPDATE_USER:  `${BASE}/admin/users`,
    DELETE_USER:  `${BASE}/admin/users`,
    ROLES:        `${BASE}/admin/roles`,
  },
};
