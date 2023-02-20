import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import Effect from "./components/Effect"
import {score} from "./Data"


function App() {

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Effect score = {score}/>} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
