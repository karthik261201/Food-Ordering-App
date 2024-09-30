import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import UserContext from "./utils/UserContext"

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Akshay Saini",
        };
        setUserName(data.name);
    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
}

const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Shimmer />}><Contact /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)