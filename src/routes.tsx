import { DoDisturb, Home, Lock, Person } from "@mui/icons-material"
import Dashboard from "./views/Dashboard"
import { ComponentIcon } from "./components/icons/Icons"
import Components from "./views/Components"
import Profile from "./views/Profile"
import Signin from "./views/Signin"
import NotFound from "./views/NotFound"
import { Navigate, useRoutes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Login from "./views/Login"

type Route = {
    name: string,
    path: string,
    icon: React.ReactElement
}

export default function Router() {
    const routes = useRoutes([
        {
            path: "/rotten",
            element: <MainLayout />,
            children: [
                { element: <Navigate to="home" />, index: true },
                { path: 'home', element: <Dashboard /> },
                { path: 'components', element: <Components /> },
                { path: 'profile', element: <Profile /> }
            ]
        },
        { path: '/sign-in', element: <Signin /> },
        { path: '/log-in', element: <Login /> },
        { path: '/not-found', element: <NotFound /> },
        { path: "", element: <Navigate to="/rotten" /> },
        { path: "*", element: <Navigate to="/not-found" /> },
    ]);

    return routes;
}

export const routes: Route[] = [
    {
        name: "Main Dashboard",
        icon: <Home />,
        path: "/rotten/home"
    },
    {
        name: "Components",
        icon: <ComponentIcon />,
        path: "/rotten/components"
    },
    {
        name: "Profile",
        icon: <Person />,
        path: "/rotten/profile"
    },
    {
        name: "Sign in",
        icon: <Lock />,
        path: "/sign-in"
    },/* 
    {
        name: "Log in",
        icon: <LockOpen />,
        path: "/log-in"
    }, */
    {
        name: "Not found",
        icon: <DoDisturb />,
        path: "/not-found"
    }
]