import { createContext, useState, useEffect } from "react";
import { useSessionStorage } from "usehooks-ts";

import friend from "../Lib/Friend.js";

export const FriendContext = createContext({ 
  clientUsername: '', 
  setClientUsername: ()=>{}, 
  friendUsernames: [''], 
  setFriendUsernames: ()=>{}, 
  addedUsernames: '', 
  setAddedUsernames: ()=>{}, 
  Id: [''],
  setId: ()=>{},  
  pfp: [''], 
  setPfp: ()=>{}
});

export const FriendContextProvider = ({children})=>{
  const [clientUsername, setClientUsername] = useSessionStorage("clientUsername", "'"); 
  const [ friendUsernames, setFriendUsernames ] = useSessionStorage("friendUsernames", "");
  const [ addedUsernames, setAddedUsernames] = useState("");  
  const [ Id, setId] = useState(['']); 
  const [pfp, setPfp] = useState(['']); 

  useEffect(()=>{
    console.log('Added usernames dependancy was updated')
    const friendInstance = new friend(addedUsernames, clientUsername); 
    const AysncRequest = async()=>{
      const response = await friendInstance.AddFriend() 
      console.log('Adding Friend: ', addedUsernames);
      setAddedUsernames(''); 
    }
    AysncRequest(); 
  }, [addedUsernames])

  return ( 
    <FriendContext.Provider value={{ clientUsername, setClientUsername, friendUsernames, setFriendUsernames, addedUsernames, setAddedUsernames, Id, setId, pfp, setPfp}}>
      {children}
    </FriendContext.Provider>
  )
}