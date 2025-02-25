import './Css/Settings.css'

import { useState, useContext, useEffect } from "react"
import io from 'socket.io-client'; 



import User from '../Lib/User.js'; 

import { FriendContext } from '../ContextApi/FriendContextApi.jsx'
import { UserContext } from '../ContextApi/UserContextApi.jsx'

import settings from '../../public/Settings.svg'

const Settings = ()=>{
  const [ modal, setModal ] = useState(false); 
  const [ friendsModal, setFriendsModal] = useState(false); 

  const { addedUsernames, setAddedUsernames } = useContext(FriendContext);
  const { Username, password } = useContext(UserContext); 

  const [ tempFriendUsername, setTempFriendUsername ] = useState(''); 
  const [requestsSampleData, setRequestsSampleData ]= useState(['test', 'Calkye', 'Danial', 'Elli', 'test2', 'test3'])

  const [socket, setSocket ]= useState(undefined); 


    const handleFriendsModel = ()=>{
      setFriendsModal(!friendsModal); 
    }
    const handleFriendRequests = ()=>{
      setAddedUsernames(tempFriendUsername); 
    }

    useEffect(()=>{
      if(socket !== undefined){ 
        socket.on('friendRequests', (message)=>{
          console.log(message)
          setRequestsSampleData([...message])
        })
      }
    }, [socket])
    

    const ClearAllRequests = ()=>{
      const newSocket = io('http://localhost:3000/friends')
      newSocket.emit('request', Username); 
      setSocket(newSocket); 

      setAddedUsernames([]); 
      setRequestsSampleData([])


      const clearUserRequests = new User(Username, password); 
      clearUserRequests.ClearFriendRequests(); 
      
    }


    const toggleModal = ()=>{
      setModal(!modal); 
    }
  return (
    <>
      <img src={settings} alt="Settings Wheel" className="btn-modal" onClick={toggleModal}/>

      { modal && ( 
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="Settings">
                <div className="Top">
                  <img className='Close-modal' src={settings} alt="Settings" onClick={toggleModal}/>
                </div>
                <div className="Options">
                  <ul>
                    <li onClick={handleFriendsModel}>Add Friend</li>
                    <li>Button</li>
                    <li>Button</li>
                    <li>Button</li>
                  </ul>
                </div>
              </div>
              <div className="Content">
                {
                  friendsModal && (  
                    <div className="Friends-Content-Container">
                      <div className="Friends-Add">
                        <input type="text" value={tempFriendUsername} onChange={(e)=>setTempFriendUsername(e.target.value)}/><button onClick={handleFriendRequests}>Add</button>
                      </div>
                      <div className="Requests-Container">
                        <div className="Heading">
                          <h2>Requests</h2>
                          <h3 onClick={ClearAllRequests}>Clear All</h3>
                        </div>

                        <div className="Requests">
                          {
                            requestsSampleData.map((friend, index)=>{
                              return (
                                <div className="Request" key={index}>
                                  <div className="Request-Info">
                                    <h2>{friend}</h2>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>


                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      )}
      
    </>
  )
}

export default Settings