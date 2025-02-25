import { createContext, useState } from "react";
import { useSessionStorage } from "usehooks-ts";

export const UserContext = createContext({ 
  Username: '', 
  setUsername: ()=>{}, 
  LoginStatus: false, 
  setLoginStatus: ()=>{}
});


export const UserContextProvider = ({children}) =>{
  const [Username, setUsername ] = useSessionStorage("username", "")
  const [LoginStatus, setLoginStatus ] = useSessionStorage("loginStatus", false); 
  
 


  return (
    <UserContext.Provider value={{Username, setUsername, LoginStatus, setLoginStatus}}>
      {children}
    </UserContext.Provider>
  )
}