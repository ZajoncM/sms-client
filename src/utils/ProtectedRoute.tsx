import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";

const ProtectedRoute = () => {
  const currentUser = useUserContext();

  if (!currentUser) return <Navigate to="/login" />;

  return <Outlet />;
};

export default ProtectedRoute;
