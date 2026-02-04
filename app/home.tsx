import React from 'react'
import './app.css';
import { useState,useContext,useEffect } from 'react';
import { AuthContext } from './context/authContext';
import { useNavigate } from 'react-router';

export default function home() {
   const [count,setCount]=useState(0);
   const navigate = useNavigate();
   const {state,dispatch} = useContext(AuthContext);
    useEffect(() => {
    if (!state.user) {
      navigate('/login'); // navigate only when isLoggedIn changes
    }
  }, [state.user, navigate]);
  return (
    <div className="app">
      <h1  className={count>0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
      <div className='button__wrapper'>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
      </div>
    </div>
  );
}

