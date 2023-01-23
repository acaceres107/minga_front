import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layout";
import Header from "../components/home/Home";
import Newchapter from "../components/chapters/Newchapters";
import Pages from "../routes/pages/Pages";
import Comic from "./mangas/comics/Comic";
import Home from "../components/home/Home";
import ComicsList from "../components/comics-list/Comics-list";
import SignUp from "./Login/SignUp"
import SignIn from "./Login/SignIn"

export const router = createBrowserRouter([{


    path: "/",
    element: 
        <Layouts/>,
    children:[{
        path:'/',
        element: <Header/>,
    },{
        path:'/new-chapters',
        element: <Newchapter/>,
    },{
        path:"/comic/:id",
        element: <Comic/>, 
    },{
        path:'/comics',
        element:<ComicsList/>
    },{
        path:"/signin",
        element:<SignIn/>
    },{
        path:"/signup",
        element:<SignUp/>
    }]
},{
    path:'/pages/:id',
    element: <Pages/>,
},{
    path:"/home",
    element: <Home/>, 
}])

export default router