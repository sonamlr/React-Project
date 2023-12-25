import { useState } from 'react'
import './App.css'
import logo from './assets/instagram.png';
function App() {
  const [login, setLogin] = useState(true);
  const loginSwitch = () => {
    setLogin(!login)
  }
  return (
    <div id="counter">
      <div id="user">
        <img src={logo} alt='logo' />
        <input hidden={login} type="text" placeholder='Mobile Number or Email Id' name='' />
        <input hidden={login} type="text" placeholder='Full Name' name='' />
        <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
        <input type="text" name="" id="" placeholder='Password' />
        <button>{login ? "Sign in" : "Sign up"}</button>
        <div id="footer">
          {login ? "Don't have account?" : "have an account?"} <span onClick={loginSwitch}>{login ? "Sign in" : "Sign up"}</span>
        </div>
      </div>

    </div>
  )
}

export default App
