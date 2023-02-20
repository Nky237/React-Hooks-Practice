import React from 'react'
import '../App.css'
import useQuery from '../useQuery'
import useBgColor from '../useBgColor'
import axios from 'axios'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const Home = () => {
    // const { form } = useQuery(axios.get('http://api.icndb.com/jokes/random'))
    const [user, loading, error] = useAuthState(auth)
    const {color, bgColor} = useBgColor()
  return (
    <div className="App" style={{'backgroundColor': "#"+ color}}>
        <h1>Welcome {user?.email}</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio ullam libero 
        totam pariatur, odio temporibus modi eaque qui excepturi.

        <button onClick={bgColor}>change color</button> 
        <button onClick={()=> auth.signOut}>Sign Out</button>
        
    </div>
  )
}

export default Home