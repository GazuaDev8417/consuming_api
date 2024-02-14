import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import Modal from "../../components/modal/Modal"
import RecipesContainer from "../../components/recipesContainer/RecipesContainer"
import { IoIosCloseCircle } from "react-icons/io"
import { Container } from "./styled"



const Recipes:FC = ()=>{
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
                <RecipesContainer/>
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

export default Recipes