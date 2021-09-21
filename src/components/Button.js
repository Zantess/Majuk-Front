import React, { useState } from 'react';
import '../Style/Button.css';
import { Link } from 'react-router-dom';
import Register from './Register';





export function Button() {
  
const [visible, setVisible] = useState(false)

const Trying = () => {
  setVisible(!visible);
  console.log(visible);
}

    return (
      <>
        {visible===true ? <Register click={Trying}/> : ''}
        <button className='btn' onClick={Trying}>Sign In</button>
      </>
    );
  }
