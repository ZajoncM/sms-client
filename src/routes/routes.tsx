import { createBrowserRouter } from "react-router-dom";
import UserContainer from "../containers/UserContainer";
import CreateUser from "../pages/Users/CreateUser/CreateUser";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import UpdateUser from "../pages/Users/UpdateUser/UpdateUser";
import Users from "../pages/Users/Users";
import ProtectedRoute from "../utils/ProtectedRoute";
import Groups from "../pages/Groups/Groups";
import CreateGroup from "../pages/Groups/CreateGroup/CreateGroup";
import UpdateGroup from "../pages/Groups/UpdateGroup/UpdateGroup";
import GroupContainer from "../containers/GroupContainer";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <UserContainer />,
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: "/users/create",
            element: <CreateUser />,
          },
          {
            path: "/users/:id",
            element: <UpdateUser />,
          },
        ],
      },
      {
        path: "/groups",
        element: <GroupContainer />,
        children: [
          {
            index: true,
            element: <Groups />,
          },
          {
            path: "/groups/create",
            element: <CreateGroup />,
          },
          {
            path: "/groups/:id",
            element: <UpdateGroup />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
