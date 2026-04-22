import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "@constants/routes";
import { ROLES } from "@constants/roles";
import ProtectedRoute from "@components/layout/ProtectedRoute";
import AppShell from "@components/layout/AppShell";

// Auth
import Login from "@modules/auth/pages/Login";

// App Settings
import AppSettings from "@modules/settings/pages/AppSettings";

// ── Home / Welcome ─────────────────────────────────────────────────────────
import Dashboard from "@modules/welcome/pages/Dashboard";
import Messages from "@modules/welcome/pages/Messages";
import Tasks from "@modules/welcome/pages/Tasks";
import CompanyAnnouncements from "@modules/welcome/pages/CompanyAnnouncements";

// ── Reports ────────────────────────────────────────────────────────────────
import Reports from "@modules/reports/pages/Reports";

// ── Appointments ───────────────────────────────────────────────────────────
import Scheduler from "@modules/appointments/pages/Scheduler";
import ManageWaitingList from "@modules/appointments/pages/ManageWaitingList";
import AppointmentControl from "@modules/appointments/pages/AppointmentControl";
import SuperbillBatchPrint from "@modules/appointments/pages/SuperbillBatchPrint";
import AppointmentConfig from "@modules/appointments/pages/AppointmentConfig";

// ── Patient ────────────────────────────────────────────────────────────────
import PatientMain from "@modules/patient/pages/PatientMain";
import ManageAccount from "@modules/patient/pages/ManageAccount";
import PaymentPlans from "@modules/patient/pages/PaymentPlans";
import ARControl from "@modules/patient/pages/ARControl";
import BatchEligibility from "@modules/patient/pages/BatchEligibility";
import StatementBatchPrint from "@modules/patient/pages/StatementBatchPrint";
import StatementTracker from "@modules/patient/pages/StatementTracker";
import LabelBatchPrint from "@modules/patient/pages/LabelBatchPrint";
import Communications from "@modules/patient/pages/Communications";
import PatientSettings from "@modules/patient/pages/PatientSettings";

// ── Claim ──────────────────────────────────────────────────────────────────
import Claim from "@modules/claim/pages/Claim";
import ClaimTracker from "@modules/claim/pages/ClaimTracker";
import ClaimControl from "@modules/claim/pages/ClaimControl";
import FollowUpManagement from "@modules/claim/pages/FollowUpManagement";
import ClaimBatchPrint from "@modules/claim/pages/ClaimBatchPrint";
import ClaimSettings from "@modules/claim/pages/ClaimSettings";

// ── Payment ────────────────────────────────────────────────────────────────
import PaymentPost from "@modules/payment/pages/PaymentPost";
import ApplyCredit from "@modules/payment/pages/ApplyCredit";
import PaymentView from "@modules/payment/pages/PaymentView";
import ERA from "@modules/payment/pages/ERA";
import PaymentTracker from "@modules/payment/pages/PaymentTracker";
import PaymentSettings from "@modules/payment/pages/PaymentSettings";

// ── Documents / Interface ──────────────────────────────────────────────────
import Documents from "@modules/documents/pages/Documents";
import Interface from "@modules/interface/pages/Interface";

// ── Customer Setup ─────────────────────────────────────────────────────────
import Practices from "@modules/customerSetup/pages/Practices";
import Providers from "@modules/customerSetup/pages/Providers";
import Facilities from "@modules/customerSetup/pages/Facilities";
import ReferringProviders from "@modules/customerSetup/pages/ReferringProviders";
import Payers from "@modules/customerSetup/pages/Payers";
import PayerAgreements from "@modules/customerSetup/pages/PayerAgreements";
import CollectionAgencies from "@modules/customerSetup/pages/CollectionAgencies";
import Codes from "@modules/customerSetup/pages/Codes";
import AlertControl from "@modules/customerSetup/pages/AlertControl";
import StatementsSetup from "@modules/customerSetup/pages/StatementsSetup";
import Superbills from "@modules/customerSetup/pages/Superbills";
import Labels from "@modules/customerSetup/pages/Labels";
import Customization from "@modules/customerSetup/pages/Customization";
import CustomerSettings from "@modules/customerSetup/pages/CustomerSettings";

// ── Account Admin ──────────────────────────────────────────────────────────
import AccountAdministration from "@modules/accountAdmin/pages/AccountAdministration";

const ALL = [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.USER];
const ADMIN = [ROLES.SUPER_ADMIN, ROLES.ADMIN];
const SA = [ROLES.SUPER_ADMIN];

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Public */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path="/" element={<Navigate to={ROUTES.WELCOME} replace />} />

      {/* Protected */}
      <Route
        element={
          <ProtectedRoute allowedRoles={ALL}>
            <AppShell />
          </ProtectedRoute>
        }
      >
        {/* Settings */}
        <Route path={ROUTES.APP_SETTINGS} element={<AppSettings />} />

        {/* Home */}
        <Route
          path={ROUTES.HOME}
          element={<Navigate to={ROUTES.WELCOME} replace />}
        />
        <Route path={ROUTES.WELCOME} element={<Dashboard />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.MESSAGES} element={<Messages />} />
        <Route path={ROUTES.TASKS} element={<Tasks />} />
        <Route
          path={ROUTES.COMPANY_ANNOUNCEMENTS}
          element={<CompanyAnnouncements />}
        />

        {/* Reports */}
        <Route path={ROUTES.REPORTS} element={<Reports />} />

        {/* Appointments */}
        <Route
          path={ROUTES.APPOINTMENTS}
          element={<Navigate to={ROUTES.APPOINTMENT_SCHEDULER} replace />}
        />
        <Route path={ROUTES.APPOINTMENT_SCHEDULER} element={<Scheduler />} />
        <Route
          path={ROUTES.MANAGE_WAITING_LIST}
          element={<ManageWaitingList />}
        />
        <Route
          path={ROUTES.APPOINTMENT_CONTROL}
          element={<AppointmentControl />}
        />
        <Route
          path={ROUTES.SUPERBILL_BATCH_PRINT}
          element={<SuperbillBatchPrint />}
        />
        <Route
          path={ROUTES.APPOINTMENT_CONFIG}
          element={<AppointmentConfig />}
        />

        {/* Patient */}
        <Route
          path={ROUTES.PATIENT}
          element={<Navigate to={ROUTES.PATIENT_MAIN} replace />}
        />
        <Route path={ROUTES.PATIENT_MAIN} element={<PatientMain />} />
        <Route path={ROUTES.MANAGE_ACCOUNT} element={<ManageAccount />} />
        <Route path={ROUTES.PAYMENT_PLANS} element={<PaymentPlans />} />
        <Route path={ROUTES.AR_CONTROL} element={<ARControl />} />
        <Route path={ROUTES.BATCH_ELIGIBILITY} element={<BatchEligibility />} />
        <Route
          path={ROUTES.STATEMENT_BATCH_PRINT}
          element={<StatementBatchPrint />}
        />
        <Route path={ROUTES.STATEMENT_TRACKER} element={<StatementTracker />} />
        <Route path={ROUTES.LABEL_BATCH_PRINT} element={<LabelBatchPrint />} />
        <Route path={ROUTES.COMMUNICATIONS} element={<Communications />} />
        <Route path={ROUTES.PATIENT_SETTINGS} element={<PatientSettings />} />

        {/* Claim */}
        <Route
          path={ROUTES.CLAIM}
          element={<Navigate to={ROUTES.CLAIM_MAIN} replace />}
        />
        <Route path={ROUTES.CLAIM_MAIN} element={<Claim />} />
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

        {/* Payment */}
        <Route
          path={ROUTES.PAYMENT}
          element={<Navigate to={ROUTES.PAYMENT_POST} replace />}
        />
        <Route path={ROUTES.PAYMENT_POST} element={<PaymentPost />} />
        <Route path={ROUTES.APPLY_CREDIT} element={<ApplyCredit />} />
        <Route path={ROUTES.PAYMENT_VIEW} element={<PaymentView />} />
        <Route path={ROUTES.ERA} element={<ERA />} />
        <Route path={ROUTES.PAYMENT_TRACKER} element={<PaymentTracker />} />
        <Route path={ROUTES.PAYMENT_SETTINGS} element={<PaymentSettings />} />

        {/* Documents */}
        <Route path={ROUTES.DOCUMENTS} element={<Documents />} />

        {/* Interface */}
        <Route
          path={ROUTES.INTERFACE}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Interface />
            </ProtectedRoute>
          }
        />

        {/* Customer Setup */}
        <Route
          path={ROUTES.CUSTOMER_SETUP}
          element={<Navigate to={ROUTES.PRACTICES} replace />}
        />
        <Route
          path={ROUTES.PRACTICES}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Practices />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PROVIDERS}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Providers />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.FACILITIES}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Facilities />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.REFERRING_PROVIDERS}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <ReferringProviders />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PAYERS}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Payers />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PAYER_AGREEMENTS}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <PayerAgreements />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.COLLECTION_AGENCIES}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <CollectionAgencies />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.CODES}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Codes />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.ALERT_CONTROL}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <AlertControl />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.STATEMENTS_SETUP}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <StatementsSetup />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.SUPERBILLS}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Superbills />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.LABELS}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Labels />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.CUSTOMIZATION}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <Customization />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.CUSTOMER_SETTINGS}
          element={
            <ProtectedRoute allowedRoles={ADMIN}>
              <CustomerSettings />
            </ProtectedRoute>
          }
        />

        {/* Account Admin */}
        <Route
          path={ROUTES.ACCOUNT_ADMIN}
          element={
            <ProtectedRoute allowedRoles={SA}>
              <AccountAdministration />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to={ROUTES.WELCOME} replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
