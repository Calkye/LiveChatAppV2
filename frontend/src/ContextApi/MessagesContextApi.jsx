import {  createContext, useState, useEffect } from "react";
import axios from "axios";



export const MessagesContext = createContext([
  {
    Message: [''], 
    setMessage: ()=>{}, 
    UserId: '', 
    setUserId: ()=>{},
    ReceivedMessages: [''],
    setRecievedMessages: ()=>{}, 
    RecieverId: '', 
    SetRecieverId: ()=>{}
  }
]); 



export const MessageContextProvider = ({children}) =>{
  const [Message, setMessage ] = useState(['test']); 
  const [UserId, setUserId] = useState(''); 

  const [ReceivedMessages, setRecievedMessages ] = useState(['test']);
  const [ReceiverId, SetRecieverId] = useState('')


  // Request Update to backend 
  // useEffect(async()=>{
  //   const UpdatedDataRequest = await axios.post('http://localhost:3000/Update/Messages', { 
  //     data: { 
  //       client: { 
  //         Messages: Message, 
  //         UserId: UserId
  //       },
  //       Reciever: {
  //         Id: ReceiverId
  //       }
  //     }
  //   }).catch((response)=>{
  //     if(response){ 
  //       console.log('Response from backend', response); 
  //     }
  //   })
  //   console.log('Request from Updating Messages', UpdatedDataRequest); 
  // }, [Message, ReceivedMessages]); 


  return(
    <MessagesContext.Provider value={{Message, setMessage, UserId, setUserId, ReceivedMessages, setRecievedMessages, ReceiverId, SetRecieverId}}>
      {children}
    </MessagesContext.Provider>
  )
}