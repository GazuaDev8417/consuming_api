import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import Modal from "../../components/modal/Modal"
import { Picture, Username } from "../../interfaces/interfaces"
import { IoIosCloseCircle } from "react-icons/io"
import { Container } from "./styled"



const User:FC = ()=>{
    const navigate = useNavigate()
    const logged = localStorage.getItem('logged')
    const user = localStorage.getItem('user')
    const userImage = localStorage.getItem('userImage')
    const age = localStorage.getItem('age')
    const gender = localStorage.getItem('gender')
    const email = localStorage.getItem('email')
    const location = localStorage.getItem('location')
    const login = localStorage.getItem('login')
    const [modal, setModal] = useState<boolean>(false)
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [timezone, setTimezone] = useState<string>('')
    const [nickname, setNickname] = useState<string>('')
    const [photo, setPhoto] = useState<Picture>({
        large:'',
        medium:'',
        thumbnail:''
    })
    const [username, setUsername] = useState<Username>({
        title:'',
        first:'',
        last:''
    })

    if(login){
        console.log(JSON.parse(login))
    }
    
    useEffect(()=>{
        if(!logged){
            navigate('/consuming_api')
        }
    }, [])

    useEffect(()=>{
        if(user && userImage && location && login){
            setPhoto(JSON.parse(userImage))
            setUsername(JSON.parse(user))
            setCity(JSON.parse(location).city)
            setState(JSON.parse(location).state)
            setCountry(JSON.parse(location).country)
            setTimezone(JSON.parse(location).timezone.offset)
            setNickname(JSON.parse(login).username)
        }
    }, [])


    const displayModal = ()=>{
        setModal(prevModal => !prevModal)
    }     
    
    document.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape'){
            setModal(false)
        }
    })


    const delAccount = ()=>{
        const decide = window.confirm('Esta ação irá apagar todos os dados do usuário atual. Deseja continuar?')

        if(decide){
            localStorage.clear()
            navigate('/consuming_api')
        }
    }



    return(
        <Container>
            <Header displayModal={displayModal} />
            <main>
                <div className="modal-container">
                    {modal ? (
                        <IoIosCloseCircle className="close" onClick={()=> setModal(false)} />
                    ) : null}
                    {modal ? <Modal/> : null}
                </div>
                <div className="image-container">
                    <img src={photo ? photo.large : undefined} alt="User image" />
                </div>
                <div className="name">{username.first} {username.last}</div>
                <div className="profile-container">
                    <div className="item"><b>Idade: </b>{age}</div>
                    <div className="item"><b>Gênero: </b>{gender === 'male' ? 'Masculino' : 'Feminino'}</div>
                    <div className="item"><b>Cidade: </b>{city}</div>
                    <div className="item"><b>Estado: </b>{state}</div>
                    <div className="item"><b>País: </b>{country}</div>
                    <div className="item"><b>Fuso horário: </b>{timezone}</div>
                    <div className="login-data">Usuário</div>
                    <div className="item"><b>Email: </b>{email}</div>
                    <div className="item"><b>Nome de usuário: </b>{nickname}</div>
                    <button className="btn-delAccount" onClick={delAccount}>
                        Deletar Conta
                    </button>
                </div>
            </main>
            <footer>
                Copyright &copy; 2023 por &nbsp;
                <a href="https://portfolio-x22d.onrender.com/" target="_blank">
                    Flamarion França
                </a>
            </footer>
        </Container>
    )
}

export default User