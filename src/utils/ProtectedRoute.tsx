import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import DashboardTemplate from "../templates/DashboardTemplate/DashboardTemplate";

const ProtectedRoute = () => {
  const currentUser = useUserContext();
  const location = useLocation();

  if (!currentUser) return <Navigate to="/login" />;

  if (location.pathname === "/") return <Navigate to="/dashboard" />;

  return (
    <DashboardTemplate>
      <Outlet />
    </DashboardTemplate>
  );
};

export default ProtectedRoute;
