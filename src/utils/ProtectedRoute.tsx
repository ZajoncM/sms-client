import { Navigate, Outlet, useLocation } from "react-router-dom";
import DashboardTemplate from "../templates/DashboardTemplate/DashboardTemplate";
import { createContext, useContext } from "react";
import { MeFieldsFragment, useMeQuery } from "../generated/graphql";

const UserContext = createContext<MeFieldsFragment | undefined>(undefined);

export const useUserContext = () => {
  return useContext(UserContext);
};

const ProtectedRoute = () => {
  const location = useLocation();
  const { data, loading } = useMeQuery();

  if (loading) return <div>loading</div>;

  if (!data?.currentUser) return <Navigate to="/login" />;

  if (location.pathname === "/") return <Navigate to="/dashboard" />;

  return (
    <UserContext.Provider value={data?.currentUser}>
      <DashboardTemplate>
        <Outlet />
      </DashboardTemplate>
    </UserContext.Provider>
  );
};

export default ProtectedRoute;
