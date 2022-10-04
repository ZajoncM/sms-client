import { createBrowserRouter } from "react-router-dom";
import UserContainer from "../containers/UserContainer";
import CreateUser from "../pages/CreateUser/CreateUser";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import Users from "../pages/Users/Users";
import ProtectedRoute from "../utils/ProtectedRoute";

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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
