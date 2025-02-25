import axios from 'axios'; 
import { useContext } from 'react';


axios.defaults.withCredentials = true; 


class User { 
  constructor(username, password){ 
    this.username = username; 
    this.password = password; 
  }
  CreateAccount(){ 
    const CreateAccount = async()=>{
      await axios.post('http://localhost:3000/Users/Create', { 
        data: { 
          username: this.username,
          password: this.password 
        }
      }, {withCredentials: true}).then((response)=>{
        console.log("Response from the server: ", response); 
        return { Success: true}
      }).catch((error)=>{
        console.log("Caught error from the server: ", error.messsage); 
      })
    }
    CreateAccount(); 
  }
  Login(){ 
    const loginWithUsernameAndPassword = async()=>{
      await axios.post('http://localhost:3000/Users/Login', {
        data: {
          username: this.username, 
          password: this.password
        }
      }).then((response)=>{
        console.log('Response from the server: ', response); 
        if(response.status === 200){
          console.log('Successfully logged in!')
          return { Success: true}
          
        }
      }).catch((error)=>{
        console.log('Error from the server', error.message); 
      }); 
    }
    loginWithUsernameAndPassword(); 
    return {Success: true}
  }
}

export default User; 