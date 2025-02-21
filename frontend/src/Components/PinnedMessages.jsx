import './Css/PinnedMessages.css'; 

import UserInfo from './UserInfo.jsx'; 

const PinnedMessages = ()=>{
  return (
    <>
      <div className="PinnedMessages">
        <h2>Pinned Messages</h2>
        <div className="Messages">
        <UserInfo />
        <UserInfo />

        </div>
      </div>
    </>
  );
};

export default PinnedMessages; 