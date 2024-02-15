import { FC, useState, useEffect } from "react"
import { Username, Picture } from "../../interfaces/interfaces"
import { HeaderContainer } from "./styled"
// @ts-ignore
import UserPic from '../../assets/user.jpg'


interface HeaderProps{
    displayModal: () => void
}


const Header:FC<HeaderProps> = ({ displayModal })=>{
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

    
    useEffect(()=>{
        if(user && userImage){
            setUsername(JSON.parse(user))
            setPhoto(JSON.parse(userImage))
        }
    }, [])
    

    
    return(
        <HeaderContainer>
            {/* <IoMdHome className="icon" onClick={()=> navigate('/')} /> */}
            <div/>
            <h1>Consumindo APIs</h1>
            <div className="user-container">
                {username.first}&nbsp;{username.last}
                <img src={userImage ? photo.thumbnail : UserPic} alt="User image" onClick={userImage ? displayModal : undefined} />
            </div>
        </HeaderContainer>
    )
}

export default Header