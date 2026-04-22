import { useSelector, useDispatch } from "react-redux";
import { logout, setCredentials } from "@modules/auth/store/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, accessToken, loading } = useSelector((state) => state.auth);

  return {
    user,
    loading,
    isAuthenticated: !!accessToken,
    role: user?.role || "admin",
    login: (credentials) => dispatch(setCredentials(credentials)),
    logout: () => dispatch(logout()),
  };
};
