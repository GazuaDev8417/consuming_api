import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Products:FC = ()=>{
    const navigate = useNavigate()
    const logged = localStorage.getItem('logged')


    useEffect(()=>{
        if(!logged){
            navigate('/')
        }
    }, [])


    return(
        <>Products</>
    )
}

export default Products