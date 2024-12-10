import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            { path: '/', element: <p>test</p> },
        ]
    },
    { path: '/', element: <p>home</p> },
])