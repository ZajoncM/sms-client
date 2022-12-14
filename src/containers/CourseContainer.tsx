import { Navigate, Outlet } from "react-router-dom";
import { UserRoleEnum } from "../generated/graphql";
import { useUserContext } from "../utils/ProtectedRoute";

const CourseContainer = () => {
  const currentUser = useUserContext();

  if (currentUser?.role !== UserRoleEnum.Teacher)
    return <Navigate to="/dashboard" />;

  return <Outlet />;
};

export default CourseContainer;
