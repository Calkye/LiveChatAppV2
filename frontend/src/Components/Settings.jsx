import './Css/Settings.css'

import { useState, useContext } from "react"
import { FriendContext } from '../ContextApi/FriendContextApi.jsx'

import settings from '../../public/Settings.svg'

const Settings = ()=>{
  const [ modal, setModal ] = useState(false); 
  const [ friendsModal, setFriendsModal] = useState(false); 
  const { addedUsernames, setAddedUsernames } = useContext(FriendContext);   
  const [ friendUsername, setFriendUsername ] = useState(''); 

    const handleFriendsModel = ()=>{
      setFriendsModal(!friendsModal); 
    }
    const HandleFriendRequests = ()=>{
      setAddedUsernames(friendUsername); 

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
                        <input type="text" value={friendUsername} onChange={(e)=>setFriendUsername(e.target.value)}/><button onClick={HandleFriendRequests}>Add</button>
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