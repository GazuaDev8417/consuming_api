import { FC, useState } from "react"
import Header from "../../components/header/Header"
import Modal from "../../components/modal/Modal"
import { Container } from "./styled"



const Home:FC = ()=>{
    const [modal, setModal] = useState<boolean>(false)

    const displayModal = ()=>{
        modal ? setModal(false) : setModal(true)
    }


    return(
        <Container>
            <Header displayModal={displayModal}/>
            <main>
                <div className="modal-container">
                    {modal ? <Modal/> : null}
                </div>
            </main>
        </Container>
    )
}

export default Home