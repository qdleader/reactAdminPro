

import { Navigate, useRoutes } from "react-router-dom";
import Login from "../views/login/index";
import Index from "@/views/index/index";



export interface MetaProps {
    keepAlive?: boolean;
    requiresAuth?: boolean;
    title: string;
    key?: string;
}

export interface RouteObject {
    caseSensitive?: boolean;
    children?: RouteObject[];
    element?: React.ReactNode;
    // index?: boolean | undefined;
    path?: string;
    meta?: MetaProps;
    isLink?: string;
}


export const rootRouter: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/login" />
    },
    {
        path: "/login",
        element: <Login />,
        meta: {
            requiresAuth: false,
            title: "登录页",
            key: "login"
        }
    },
    {
        path: "/home",
        element: <Index />,
        meta: {
            requiresAuth: false,
            title: "首页",
            key: "home"
        }
    },
    {
        path: "*",
        element: <Navigate to="/404" />
    }
];

const Router = () => {
    const routes = useRoutes(rootRouter);
    return routes;
};

export default Router;

