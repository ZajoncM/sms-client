import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";

const ProtectedRoute = () => {
  const currentUser = useUserContext();
  const location = useLocation();

  if (!currentUser) return <Navigate to="/login" />;

  if (location.pathname === "/") return <Navigate to="/dashboard" />;

  return <Outlet />;
};

export default ProtectedRoute;
