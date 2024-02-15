import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "./styled"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"




interface FormData {
    email:string
    password:string
}

const Login:FC = ()=>{
    const navigate = useNavigate()
    let user = localStorage.getItem('user')
    const email = localStorage.getItem('email')
    const loginStored = localStorage.getItem('login')
    const logged = localStorage.getItem('logged')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [form, setForm] = useState<FormData>({
        email:'',
        password:''
    })


    useEffect(()=>{
        if(logged){
            navigate('/consuming_api/home')
        }
    }, [])


    useEffect(()=>{
        fetch('https://randomuser.me/api').then(res => res.json()).then(data=>{
            if(email && loginStored){
                setForm({
                    email,
                    password: JSON.parse(loginStored).password
                })
            }else{
                setForm({
                    email: data.results[0].email,
                    password: data.results[0].login.password
                })                
            }
        }).catch(e=>{
            alert(e.message)
        })
    }, [])


    const onChange = (e:ChangeEvent<HTMLInputElement>):void=>{
        const { name, value } = e.target    
        setForm({ ...form, [name]:value })    
    }


    const showAndHidePass = ()=>{
        setShowPassword(prevPass => !prevPass)
    }

    
    const login = (e:FormEvent<HTMLFormElement>):void=>{
        e.preventDefault()        
        
        fetch('https://randomuser.me/api').then(res => res.json()).then(data=>{
            if(!user){
                localStorage.setItem('user', JSON.stringify(data.results[0].name))
                localStorage.setItem('userImage', JSON.stringify(data.results[0].picture))
                localStorage.setItem('age', data.results[0].dob.age)
                localStorage.setItem('email', data.results[0].email)
                localStorage.setItem('gender', data.results[0].gender)
                localStorage.setItem('location', JSON.stringify(data.results[0].location)) 
                localStorage.setItem('login', JSON.stringify(data.results[0].login)) 
                
                localStorage.setItem('logged', 'logged')                
                navigate('/consuming_api/home')
            }else if(loginStored){
                if(
                    form.email === email &&
                    form.password === JSON.parse(loginStored).password
                ){
                    localStorage.setItem('logged', 'logged')                
                    navigate('/consuming_api/home')
                }else{
                    alert('Usuário não encontrado!')
                }

            }
            
        }).catch(e=>{
            alert(e.message)
        })
    }

    const reset = ()=>{
        setForm({
            email:'',
            password:''
        })
    }
    

    return(
        <Container>
            <form onSubmit={login} className="form-style">
                <fieldset>
                    <legend>Login</legend>
                    <input 
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="E-mail" />
                    <div className="input-container">
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            placeholder="Password" />
                        {showPassword ? (
                            <FaEye onClick={showAndHidePass} className="icon"/>
                        ) : <FaEyeSlash onClick={showAndHidePass} className="icon"/>}
                    </div>
                    <div className="btn-container">
                        <button type="reset" onClick={reset}>Limpar</button>
                        <button type="submit">Entrar</button>
                    </div>
                </fieldset>
            </form>
        </Container>
    )
}

export default Login