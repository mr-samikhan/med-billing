import { configureStore } from "@reduxjs/toolkit";

// Slice reducers
import authReducer from "@modules/auth/store/authSlice";
import welcomeReducer from "@modules/welcome/store/welcomeSlice";
import reportsReducer from "@modules/reports/store/reportsSlice";
import appointmentsReducer from "@modules/appointments/store/appointmentsSlice";
import patientReducer from "@modules/patient/store/patientSlice";
import claimReducer from "@modules/claim/store/claimSlice";
import paymentReducer from "@modules/payment/store/paymentSlice";
import documentsReducer from "@modules/documents/store/documentsSlice";
import interfaceReducer from "@modules/interface/store/interfaceSlice";
import customerSetupReducer from "@modules/customerSetup/store/customerSetupSlice";
import accountAdminReducer from "@modules/accountAdmin/store/accountAdminSlice";

// RTK Query API reducers
import { authApi } from "@modules/auth/store/authApi";
import { welcomeApi } from "@modules/welcome/store/welcomeApi";
import { reportsApi } from "@modules/reports/store/reportsApi";
import { appointmentsApi } from "@modules/appointments/store/appointmentsApi";
import { patientApi } from "@modules/patient/store/patientApi";
import { claimApi } from "@modules/claim/store/claimApi";
import { paymentApi } from "@modules/payment/store/paymentApi";
import { documentsApi } from "@modules/documents/store/documentsApi";
import { interfaceApi } from "@modules/interface/store/interfaceApi";
import { customerSetupApi } from "@modules/customerSetup/store/customerSetupApi";
import { accountAdminApi } from "@modules/accountAdmin/store/accountAdminApi";

export const store = configureStore({
  reducer: {
    // Slices
    auth: authReducer,
    welcome: welcomeReducer,
    reports: reportsReducer,
    appointments: appointmentsReducer,
    patient: patientReducer,
    claim: claimReducer,
    payment: paymentReducer,
    documents: documentsReducer,
    interface: interfaceReducer,
    customerSetup: customerSetupReducer,
    accountAdmin: accountAdminReducer,

    // RTK Query
    [authApi.reducerPath]: authApi.reducer,
    [welcomeApi.reducerPath]: welcomeApi.reducer,
    [reportsApi.reducerPath]: reportsApi.reducer,
    [appointmentsApi.reducerPath]: appointmentsApi.reducer,
    [patientApi.reducerPath]: patientApi.reducer,
    [claimApi.reducerPath]: claimApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [documentsApi.reducerPath]: documentsApi.reducer,
    [interfaceApi.reducerPath]: interfaceApi.reducer,
    [customerSetupApi.reducerPath]: customerSetupApi.reducer,
    [accountAdminApi.reducerPath]: accountAdminApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(
      authApi.middleware,
      welcomeApi.middleware,
      reportsApi.middleware,
      appointmentsApi.middleware,
      patientApi.middleware,
      claimApi.middleware,
      paymentApi.middleware,
      documentsApi.middleware,
      interfaceApi.middleware,
      customerSetupApi.middleware,
      accountAdminApi.middleware,
    ),
});
