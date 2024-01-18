import { FC, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { IoMdHome } from "react-icons/io"
import { Username, Picture } from "../../interfaces/interfaces"
import { HeaderContainer } from "./styled"
// @ts-ignore
import UserPic from '../../assets/user.jpg'


interface HeaderProps{
    displayModal: () => void
}


const Header:FC<HeaderProps> = ({ displayModal })=>{
    const navigate = useNavigate()
    let user = localStorage.getItem('user')
    let userImage = localStorage.getItem('userImage')
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
    
    

    const login = ():void=>{
        fetch('https://randomuser.me/api').then(res => res.json()).then(data=>{
            if(!user){
                localStorage.setItem('user', JSON.stringify(data.results[0].name))
                localStorage.setItem('userImage', JSON.stringify(data.results[0].picture))
                localStorage.setItem('age', data.results[0].dob.age)
                localStorage.setItem('email', data.results[0].email)
                localStorage.setItem('gender', data.results[0].gender)
                localStorage.setItem('location', JSON.stringify(data.results[0].location))                
            }

            if(user && userImage){
                setUsername(JSON.parse(user))
                setPhoto(JSON.parse(userImage))
            }
            
            location.reload()
        }).catch(e=>{
            alert(e.message)
        })
    }

    useEffect(()=>{
        if(user && userImage){
            setUsername(JSON.parse(user))
            setPhoto(JSON.parse(userImage))
        }
    }, [])
    

    
    return(
        <HeaderContainer>
            <IoMdHome className="icon" onClick={()=> navigate('/')} />
            <div/>
            <div className="user-container">
                {username.first ? username.first : (
                    <div className="login" onClick={login}>Logar</div>
                ) }&nbsp;
                {username.last}
                <img src={userImage ? photo.thumbnail : UserPic} alt="User image" onClick={userImage ? displayModal : undefined} />
            </div>
        </HeaderContainer>
    )
}

export default Header