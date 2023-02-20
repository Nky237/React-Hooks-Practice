import Raect, {useState}  from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    // const [form, setForm] = useState({
    //     email : '',
    //     password: ''
    // })
    // const setHandle = (e)=>{
    //     setForm({
    //         ...form,
    //         [e.target.name] : e.target.value
    //     })
    //     console.log(form)
    // }
    const navigate = useNavigate()
    const handleSubmit= (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth => {navigate('/login')})
        .catch(error => console.error(`error is ${error}`))
    }
   
  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Enter your name'/>
            <input type="email" name='email' placeholder='Enter your email' 
             onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name='password' placeholder='Enter your password'  
            onChange={(e)=>setPassword(e.target.value)}/>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp