import React, { useState } from 'react';
import '../Style/Button.css';
import { Link } from 'react-router-dom';
import Register from './Register';
import Navbar from './Navbar';





export function Button() {
  
const [visible, setVisible] = useState(false)

const Trying = () => {
  setVisible(!visible);
  console.log(visible);
}


  while(visible===true){
    return (
      <>
      <Register func={Trying} visible="true"/>
        <button className='btn' onClick={Trying}>Sign In</button>
      </>
    );
  }
  return (
    <>
      <Register func={Trying}/>
      <button className='btn' onClick={Trying}>Sign In</button>
      
    </>
  );
  }
