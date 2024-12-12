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
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            { path: '/', element: <DashboardHome /> },
            { path: '/payment', element: <Payment /> },
            { path: '/category', element: <Category /> },
            { path: '/user-management', element: <UserManagement /> },
            { path: '/host-management', element: <HostManagement /> },
            { path: '/booking', element: <Booking /> },
            { path: '/feedback', element: <Feedback /> },
            { path: '/privacy', element: <Privacy /> },
            { path: '/terms', element: <Terms /> },
            { path: '/profile', element: <Profile /> },
        ]
    },
    { path: '/login', element: <p>home</p> },
])