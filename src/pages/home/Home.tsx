import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import Modal from "../../components/modal/Modal"
import { IoIosCloseCircle } from "react-icons/io"
import { Container } from "./styled"



const Home:FC = ()=>{
    const navigate = useNavigate()
    const logged = localStorage.getItem('logged')
    const [modal, setModal] = useState<boolean>(false)



    useEffect(()=>{
        if(!logged){
            navigate('/')
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


    return(
        <Container>
            <Header displayModal={displayModal}/>
            <main>
                <div className="modal-container">
                    {modal ? (
                        <IoIosCloseCircle className="close" onClick={()=> setModal(false)} />
                    ) : null}
                    {modal ? <Modal/> : null}
                </div>
            </main>
        </Container>
    )
}

export default Home