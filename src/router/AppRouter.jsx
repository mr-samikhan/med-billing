import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "@constants/routes";
import { ROLES } from "@constants/roles";
import ProtectedRoute from "@components/layout/ProtectedRoute";
import AppShell from "@components/layout/AppShell";

// Auth
import Login from "@modules/auth/pages/Login";

// Welcome
import Dashboard from "@modules/welcome/pages/Dashboard";
import Tasks from "@modules/welcome/pages/Tasks";
import Messages from "@modules/welcome/pages/Messages";

// All other modules
import Reports from "@modules/reports/pages/Reports";
import Appointments from "@modules/appointments/pages/Appointments";
import Patient from "@modules/patient/pages/Patient";
import Claim from "@modules/claim/pages/Claim";
import ClaimTracker from "@modules/claim/pages/ClaimTracker";
import ClaimControl from "@modules/claim/pages/ClaimControl";
import FollowUpManagement from "@modules/claim/pages/FollowUpManagement";
import ClaimBatchPrint from "@modules/claim/pages/ClaimBatchPrint";
import ClaimSettings from "@modules/claim/pages/ClaimSettings";
import Payment from "@modules/payment/pages/Payment";
import Documents from "@modules/documents/pages/Documents";
import Interface from "@modules/interface/pages/Interface";
import CustomerSetup from "@modules/customerSetup/pages/CustomerSetup";
import AccountAdministration from "@modules/accountAdmin/pages/AccountAdministration";

const ALL = [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.USER];
const ADMIN = [ROLES.SUPER_ADMIN, ROLES.ADMIN];
const SA = [ROLES.SUPER_ADMIN];

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Public */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />

      {/* Protected shell */}
      <Route
        element={
          <ProtectedRoute allowedRoles={ALL}>
            <AppShell />
          </ProtectedRoute>
        }
      >
        {/* Welcome */}
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.TASKS} element={<Tasks />} />
        <Route path={ROUTES.MESSAGES} element={<Messages />} />

        {/* Reports */}
        <Route path={ROUTES.REPORTS} element={<Reports />} />
        <Route path={ROUTES.APPOINTMENTS} element={<Appointments />} />
        <Route path={ROUTES.PATIENT} element={<Patient />} />

        {/* Claim & nested */}
        <Route path={ROUTES.CLAIM} element={<Claim />} />
        <Route path={ROUTES.CLAIM_TRACKER} element={<ClaimTracker />} />
        <Route path={ROUTES.CLAIM_CONTROL} element={<ClaimControl />} />
        <Route path={ROUTES.FOLLOW_UP} element={<FollowUpManagement />} />
        <Route path={ROUTES.CLAIM_BATCH_PRINT} element={<ClaimBatchPrint />} />
        <Route
          path={ROUTES.CLAIM_SETTINGS}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <ClaimSettings />
            </ProtectedRoute>
          }
        />

        <Route path={ROUTES.PAYMENT} element={<Payment />} />
        <Route path={ROUTES.DOCUMENTS} element={<Documents />} />

        {/* Admin-only */}
        <Route
          path={ROUTES.INTERFACE}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Interface />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.CUSTOMER_SETUP}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <CustomerSetup />
            </ProtectedRoute>
          }
        />

        {/* Super-admin only */}
        <Route
          path={ROUTES.ACCOUNT_ADMIN}
          element={
            <ProtectedRoute allowedRoles={SA}>
              <AccountAdministration />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
