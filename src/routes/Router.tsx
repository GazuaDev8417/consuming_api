import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import Products from "../pages/products/Products"
import User from "../pages/user/User"



const Router:FC = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/user" element={<User/>} />
        </Routes>
    )
}

export default Router