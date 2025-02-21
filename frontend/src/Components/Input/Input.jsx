import './Css/Input.css'

import { useState, useContext } from 'react';
import { MessagesContext } from '../../ContextApi/MessagesContextApi.jsx'; 

import SendButton from '../../../public/SendButton.svg'; 


const Input = ()=>{
  const [ TempMessage, setTempMessage ] = useState(''); 
  const { Message, setMessage, UserId, setUserId, ReceivedMessages, setRecievedMessages, RecieverId, SetRecieverId} = useContext(MessagesContext); 

  const UpdateMessages = (e)=>{
    e.preventDefault(); 
    setMessage([...Message, TempMessage])
  }

  return ( 
    <>
      <div className="Inputed-Container-2">
        <div className="Input">
          <form onSubmit={UpdateMessages}>
            <input type="text" placeholder='Type a message..' value={TempMessage} onChange={(e)=>{setTempMessage(e.target.value)}}/>
          </form>
        </div>
        <div className="SendButton">
          <img src={SendButton} alt="" />
        </div>
      </div>
    </>
  )
}

export default Input; 

