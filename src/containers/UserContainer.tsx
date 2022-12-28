import { Navigate, Outlet } from "react-router-dom";
import { UserRoleEnum } from "../generated/graphql";
import { useUserContext } from "../utils/ProtectedRoute";

const UserContainer = () => {
  const currentUser = useUserContext();

  if (currentUser?.role !== UserRoleEnum.Admin)
    return <Navigate to="/dashboard" />;

  return <Outlet />;
};

export default UserContainer;
