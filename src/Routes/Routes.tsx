import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Payment from "../pages/dashboard/Payment";
import Category from "../pages/dashboard/Category";
import UserManagement from "../pages/dashboard/UserManagement";
import HostManagement from "../pages/dashboard/HostManagement";
import Booking from "../pages/dashboard/Booking";
import Feedback from "../pages/dashboard/Feedback";
import Privacy from "../pages/dashboard/Privacy";
import Terms from "../pages/dashboard/Terms";
import Profile from "../pages/dashboard/Profile";
import Notification from "../pages/dashboard/Notification";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Otp from "../pages/auth/Otp";
import ResetPassword from "../pages/auth/ResetPassword";
import SrtipeInfo from "../pages/dashboard/SrtipeInfo";
import PrivateRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "/", element: <DashboardHome /> },
      { path: "/payment", element: <Payment /> },
      { path: "/stripe-info", element: <SrtipeInfo /> },
      { path: "/category", element: <Category /> },
      { path: "/user-management", element: <UserManagement /> },
      { path: "/host-management", element: <HostManagement /> },
      { path: "/booking", element: <Booking /> },
      { path: "/feedback", element: <Feedback /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "/profile", element: <Profile /> },
      { path: "/notification", element: <Notification /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/otp", element: <Otp /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);
