import './Css/Messages.css';
import { useContext } from 'react';
import { MessagesContext } from '../../ContextApi/MessagesContextApi.jsx';
import UserInfo from '../UserInfo.jsx';

const Messages = () => {
  const { ReceivedMessages, Message } = useContext(MessagesContext); 

  const receivedMessages = ReceivedMessages || []; 
  const UserMessages = Message || []
  return (
    <div className="Center-Right">
      <div className="ReceivedMessages">
        {receivedMessages.map((message, index) => {
         
          return (
            <UserInfo 
              key={index}
               Username={"Reciever"}
               Message={message}
               IsMessage={true}
            />
          );
        })}
      </div>
      <div className="SentMessages">
        {
          receivedMessages.map((message, index)=>{
            return(
              <UserInfo 
              key={index}
              Username={"User"}
              Message={Message}
              IsMessage={true}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default Messages;
