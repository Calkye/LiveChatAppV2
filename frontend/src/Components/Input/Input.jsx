import './Css/Input.css'

import { useState } from 'react';

import SendButton from '../../../public/SendButton.svg'; 


const Input = ()=>{
  const [ TempMessage, setTempMessage ] = useState(''); 
  
  return ( 
    <>
      <div className="Inputed-Container-2">
        <div className="Input">
          <input type="text" placeholder='Type a message..' value={TempMessage} onChange={(e)=>{setTempMessage(e.target.value)}}/>
        </div>
        <div className="SendButton">
          <img src={SendButton} alt="" />
        </div>
      </div>
    </>
  )
}

export default Input; 

