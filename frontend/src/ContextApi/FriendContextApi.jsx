import { createContext, useState, useEffect } from "react";

import friend from "../Lib/Friend.js";

export const FriendContext = createContext({ 
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
  const [ friendUsernames, setFriendUsernames ] = useState(['']);
  const [ addedUsernames, setAddedUsernames] = useState('');  
  const [ Id, setId] = useState(['']); 
  const [pfp, setPfp] = useState(['']); 

  useEffect(() => {
    const addFriendAsync = async () => {
      if (!addedUsernames) return; 
  
      const newFriend = new friend(addedUsernames);
      const response = await newFriend.AddFriend();
  
      if (response?.Success) {
        console.log('Successfully added friend from Context API');
      } else {
        console.log('Error occurred adding friend');
      }
    };
  
    addFriendAsync(); 
  }, [addedUsernames]);
  

  return ( 
    <FriendContext.Provider value={{friendUsernames, setFriendUsernames, addedUsernames, setAddedUsernames, Id, setId, pfp, setPfp}}>
      {children}
    </FriendContext.Provider>
  )
}