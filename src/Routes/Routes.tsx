import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Payment from "../pages/dashboard/Payment";
import Category from "../pages/dashboard/Category";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            { path: '/', element: <DashboardHome /> },
            { path: '/payment', element: <Payment /> },
            { path: '/category', element: <Category /> },
        ]
    },
    { path: '/login', element: <p>home</p> },
])