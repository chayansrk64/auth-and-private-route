import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Resgister/Register";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/orders',
                element: <PrivateRoutes> <Orders></Orders> </PrivateRoutes>
            },
            {
                path: '/profile',
                element: <PrivateRoutes> <Profile></Profile> </PrivateRoutes>
            }
        ]
    }
])

export default router;