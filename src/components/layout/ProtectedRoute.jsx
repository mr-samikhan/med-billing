import { Navigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { ROUTES } from '@constants/routes';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) return <Navigate to={ROUTES.LOGIN} replace />;

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return children;
};

export default ProtectedRoute;
