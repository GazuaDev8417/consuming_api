import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import Recipes from "../pages/recipes/Recipes"
import User from "../pages/user/User"



const Router:FC = ()=>{
    return(
        <Routes>
            <Route path="/consuming_api" element={<Login/>} />
            <Route path="/consuming_api/home" element={<Home/>} />
            <Route path="/consuming_api/recipes" element={<Recipes/>} />
            <Route path="/consuming_api/user" element={<User/>} />
        </Routes>
    )
}

export default Router