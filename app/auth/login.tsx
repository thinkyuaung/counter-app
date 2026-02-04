import React from 'react'
import { useContext } from 'react';
import 'app/app.css'
import { AuthContext } from '~/context/authContext';
import { useNavigate } from 'react-router';


function Login() {
  const {state,dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin=()=>{
    dispatch({ 
        type: 'LOGIN', 
        payload: { user: "admin", token: "12345" } 
      });
    navigate('/');      
  }
  const handleLogout=()=>{
    dispatch({ 
        type: 'LOGOUT', 
        payload: { user: null, token: null } 
      });
    navigate('/');      
  }
    return (
      <div className='button__wrapper w-full flex gap-4'>
         <button onClick={handleLogin} >
            {!state.user ? 'Login' : 'Logout'}
        </button>
        <button onClick={handleLogout}>
            {!state.user ? 'Logout' : 'Login'}
        </button>
      </div>
       
    );
}

export default Login