import './Css/SignUp.css'

import { useContext } from 'react';
import { UserContext } from '../ContextApi/UserContextApi.jsx';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import User from '../Lib/User.js'; 

const Login = () => {
  const nagivate = useNavigate(); 
  const { Username, setUsername, LoginStatus, setLoginStatus} = useContext(UserContext)

  const [username, setTempUsername ] = useState(''); 
  const [ password, setPassword ] = useState(''); 

  const HandleLogin = async(e)=>{
    e.preventDefault(); 
    const NewUser = new User(username, password); 
    const isLoggedIn = NewUser.Login();
    if(isLoggedIn.Success){ 
      console.log('Logging in ');
      setUsername(username); 
      setLoginStatus(true); 
      nagivate('/MainApp', {replace: true})
    }
    
  }


  return (
    <>
      <div className="Form-Wrapper">
      <div className="Background" />
      <form className="Form" onSubmit={HandleLogin}>
        <div className="Input-Container">
          <div className="input">
            <label>Username</label>
            <input type="text" value={username} onChange={(e)=>setTempUsername(e.target.value)}/>
          </div>
          <div className="input">
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
        </div>
        <div className="Button-Container">
          <div className="Button">
            <button>Sign in</button>
            <h4><Link to="/">Or Sign up</Link></h4>
          </div>
        </div>
      </form>
    </div>
    
    </>
  )
}

export default Login;
