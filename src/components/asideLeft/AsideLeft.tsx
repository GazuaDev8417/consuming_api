import { FC, useEffect, useState } from "react"
import { Container } from "./styled"
import { Users } from "../../interfaces/interfaces"



const AsideLeft:FC = ()=>{
    const [users, setUsers] = useState<Users[]>([])



    useEffect(()=>{
        fetch('https://dummyjson.com/users').then(res => res.json()).then(data=>{
            setUsers(data.users)
        }).catch(e=>{
            alert(e.message)
        })
    }, [])




    return(
        <Container>
            <h2>Usuários</h2>
            <div className="product-container">
                {users.map(user=>{
                    return(
                        <div key={user.id}>
                            <figure>
                                <img src={user.image} alt="User Image"/>
                                <figcaption>
                                    <b>{user.firstName} {user.lastName}</b><br/><br/>
                                    <div className="caption-content">
                                        <b>Endereço: </b>{user.address.address}<br/>
                                        <b>Cidade: </b>{user.address.city}<br/>
                                        <b>Estado: </b>{user.address.state}<br/>
                                        <b>Idade: </b>{user.age}<br/>
                                        <b>Gênero: </b>{user.gender === 'male' ? 'Masculino' : 'Feminino'}<br/>
                                        <b>Email: </b>{user.email}<br/>
                                        <b>Nickname: </b>{user.username}
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default AsideLeft