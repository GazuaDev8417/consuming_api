import { FC, useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Modal from "../../components/modal/Modal"
import { Container } from "./styled"



const User:FC = ()=>{
    const [modal, setModal] = useState<boolean>(false)

    const displayModal = ()=>{
        modal ? setModal(false) : setModal(true)
    }


    useEffect(()=>{
        fetch('https://randomuser.me/api').then(res => res.json()).then(data=>{
            console.log(data.results)
        })
    }, [])

    return(
        <Container>
            <Header displayModal={displayModal} />
            <main>
                <div className="modal-container">
                    {modal ? <Modal/> : null}
                </div>
                User
            </main>
        </Container>
    )
}

export default User