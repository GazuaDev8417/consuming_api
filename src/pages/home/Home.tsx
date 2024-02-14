import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import AsideLeft from "../../components/asideLeft/AsideLeft"
import AsideRight from "../../components/asideRight/AsideRight"
import Main from "../../components/main/Main"
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
                <div className="content">
                    <AsideLeft/>
                    <Main/>
                    <AsideRight/>
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

export default Home