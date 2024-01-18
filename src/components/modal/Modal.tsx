import { FC } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Container } from "./styled"


const Modal:FC = ()=>{
    const navigate = useNavigate()
    const local = useLocation()
    const user = localStorage.getItem('user')
    const username = user ? JSON.parse(user) : null


    const logout = ()=>{
        const decide = window.confirm('Tem certeza que deseja deslogar?')

        if(decide){
            localStorage.clear()

            if(local.pathname === '/'){
                location.reload()
            }

            if(local.pathname === '/user'){
                navigate('/')
            }
        }
    }

    

    return(
        <Container>
            <div className="user">{username.first} {username.last}</div>
            <div className="item" onClick={()=> navigate('/user')}>Perfil</div>  
            <div className="item">Conta</div>  
            <div className="item" onClick={logout}>Logout</div>  
        </Container>
    )
}

export default Modal