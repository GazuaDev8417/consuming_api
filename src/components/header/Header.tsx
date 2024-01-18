import { FC, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { IoMdHome } from "react-icons/io"
import { Picture, Username } from "../../interfaces/interfaces"
import { HeaderContainer } from "./styled"
// @ts-ignore
import UserPic from '../../assets/user.jpg'


interface HeaderProps{
    displayModal: () => void
}


const Header:FC<HeaderProps> = ({ displayModal })=>{
    const navigate = useNavigate()
    const user = localStorage.getItem('user')
    const userImage = localStorage.getItem('userImage')
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
            if(!user && !userImage){
                localStorage.setItem('user', JSON.stringify(data.results[0].name))
                localStorage.setItem('userImage', JSON.stringify(data.results[0].picture))
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
                {/* {photo ? ( */}
                    <img src={userImage ? photo.thumbnail : UserPic} alt="User image" onClick={userImage ? displayModal : undefined} />
                {/* ) : <img src={UserPic} alt="User image"/> } */}
            </div>
        </HeaderContainer>
    )
}

export default Header