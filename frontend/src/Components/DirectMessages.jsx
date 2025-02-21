import './Css/Directmessages.css'; 

import UserInfo from './UserInfo.jsx'; 

const DirectMessages = ({ImageUrl})=>{
  return (
    <div className="DirectMessages">
      <h2 className='Title'>All Chats</h2>
        <UserInfo />
        <UserInfo />
        <UserInfo />

    </div>
  )
}

export default DirectMessages; 