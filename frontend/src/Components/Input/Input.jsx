import './Css/Input.css'
import { useState, useContext } from 'react';
import { MessagesContext } from '../../ContextApi/MessagesContextApi.jsx'; 
import SendButton from '../../../public/SendButton.svg'; 

const Input = () => {
  const [TempMessage, setTempMessage] = useState(''); 
  const { Message, setMessage } = useContext(MessagesContext); 

  const UpdateMessages = (e) => {
    e.preventDefault();
    if (TempMessage.trim() !== '') {
      setMessage([...Message, TempMessage]);  // Add new message to array
      setTempMessage('');  // Clear the input field after submitting
    }
  }

  return (
    <div className="Inputed-Container-2">
      <div className="Input">
        <form onSubmit={UpdateMessages}>
          <input 
            type="text" 
            placeholder='Type a message..' 
            value={TempMessage} 
            onChange={(e) => { setTempMessage(e.target.value) }} 
          />
        </form>
      </div>
      <div className="SendButton" onClick={UpdateMessages}>
        <img src={SendButton} alt="Send" />
      </div>
    </div>
  );
};

export default Input;
