import { FC, useEffect, useState, useRef } from "react"
import Header from "../../components/header/Header"
import Modal from "../../components/modal/Modal"
import { Picture, Username } from "../../interfaces/interfaces"
import { Container } from "./styled"



const User:FC = ()=>{
    let user = localStorage.getItem('user')
    let userImage = localStorage.getItem('userImage')
    const age = localStorage.getItem('age')
    const gender = localStorage.getItem('gender')
    const email = localStorage.getItem('email')
    let location = localStorage.getItem('location')
    const modalRef = useRef(null)
    const [modal, setModal] = useState<boolean>(false)
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [timezone, setTimezone] = useState<string>('')
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


    useEffect(()=>{
        if(user && userImage && location){
            setPhoto(JSON.parse(userImage))
            setUsername(JSON.parse(user))
            setCity(JSON.parse(location).city)
            setState(JSON.parse(location).state)
            setCountry(JSON.parse(location).country)
            setTimezone(JSON.parse(location).timezone.offset)

            console.log(JSON.parse(location))
        }
    }, [])
    
    
    const displayModal = ()=>{
        setModal(prevModal => !prevModal)
    } 

    return(
        <Container>
            <Header displayModal={displayModal} />
            <main>
                <div className="modal-container" ref={modalRef}>
                    {modal ? <Modal/> : null}
                </div>
                <div className="name">{username.first} {username.last}</div>
                <div className="profile-container">
                    <div className="item"><b>Idade: </b>{age}</div>
                    <div className="item"><b>Gênero: </b>{gender === 'male' ? 'Masculino' : 'Feminino'}</div>
                    <div className="item"><b>Email: </b>{email}</div>
                    <div className="item"><b>Cidade: </b>{city}</div>
                    <div className="item"><b>Estado: </b>{state}</div>
                    <div className="item"><b>País: </b>{country}</div>
                    <div className="item"><b>Fuso horário: </b>{timezone}</div>
                </div>
            </main>
        </Container>
    )
}

export default User