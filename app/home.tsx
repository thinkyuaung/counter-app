import React from 'react'
import './app.css';
import { useState,useContext,useEffect } from 'react';
import { AuthContext } from './context/authContext';
import { useNavigate } from 'react-router';
import light from '../public/light.svg';
import dark from '../public/dark.svg';
import { ThemeContext } from './context/themeContext';

export default function home() {
   const [count,setCount]=useState(0);
   const navigate = useNavigate();
   const {state,dispatch} = useContext(AuthContext);
   const {toggleTheme,darkMode} = useContext(ThemeContext);
    useEffect(() => {
    if (!state.user) {
      navigate('/login'); // navigate only when isLoggedIn changes
    }
  }, [state.user, navigate]);

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };
  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
   <img src={darkMode ? light : dark} alt="theme toggle" onClick={toggleTheme} width="32" height="32" />
      <h1  className={count>0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
      <div className='button__wrapper'>
        <button onClick={()=>setCount(prev => Math.max(0, prev - 1))} className={`${darkMode ? 'font' : ''}`}>-</button>
        <button onClick={()=>setCount(count+1)} className={`${darkMode ? 'font' : ''}`}>+</button>
      </div>
    </div>
  );
}

