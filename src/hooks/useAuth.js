import { useSelector, useDispatch } from "react-redux";
import { logout, setCredentials } from "@modules/auth/store/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, accessToken, loading } = useSelector((state) => state.auth);

  return {
    user: user ?? "sami",
    loading,
    isAuthenticated: !!accessToken,
    role: user?.role || "super_admin",
    login: (credentials) => dispatch(setCredentials(credentials)),
    logout: () => dispatch(logout()),
  };
};
