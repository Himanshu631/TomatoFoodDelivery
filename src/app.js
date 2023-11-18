import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// const styleCard = {
//     backgroundColor:"white",
//     color:"black",
//     borderRadius:"1rem"
// }


//const Grocery = (()=>lazy() => import("./components/Grocery"))
const Grocery = lazy(() => import('./components/Grocery'));


const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app bg-red-500">
            <Header />
            <Outlet />
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />
            },
            {
                path: "/about",
                element:<About />
            },
            {
                path: "/contact",
                element:<Contact />
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            
            {
                path: "/cart",
                element:<Cart />
            },
            {
                path: "/restaurant/:resId",
                element:<RestaurantMenu />
            },
        ],
        errorElement:<Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

