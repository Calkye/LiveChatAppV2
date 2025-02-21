import './Css/Settings.css'

import { useState } from "react"

import settings from '../../public/Settings.svg'

const Settings = ()=>{
  const [ modal, setModal ] = useState(false); 
  
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
              <button className='Close-modal' onClick={toggleModal}>close</button>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex ratione officia accusantium iure molestiae fugit corporis, inventore numquam vitae soluta quas facilis voluptas aspernatur deleniti consequatur ipsa error necessitatibus impedit. Laudantium neque, praesentium laboriosam, distinctio consequatur illum numquam assumenda odit ad exercitationem quam beatae consectetur provident? Voluptatibus, necessitatibus eaque!
              </h5>
            </div>
          </div>
        </div>
      )}
      
    </>
  )
}

export default Settings