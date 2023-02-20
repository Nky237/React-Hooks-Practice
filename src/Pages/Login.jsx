import React, {useState} from 'react'
import {auth} from '../firebase'
import '../App.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useState({
        email : '',
        password: ''
    })
    const setHandle = (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const navigate = useNavigate()
    const handleSubmit= ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {navigate('/home')} )
        .catch((error) => console.error(error))
    }
    
  return (
    <div>
        <form action="">
            <input type="email" name='email' placeholder='Enter your email'  onChange={setHandle}/>
            <input type="password" name='password' placeholder='Enter your password'  onChange={setHandle}/>
            <button onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login