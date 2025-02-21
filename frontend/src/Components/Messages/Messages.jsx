import './Css/Messages.css';

import CallSVG from '../../../public/Call.svg';
import VideoCallSVG from '../../../public/VideoCall.svg';


const Messages = ()=>{
  const SampleMessages = ["Hello", "This is sample data", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nostrum, vel et sequi corrupti dolor officiis veniam voluptas omnis vero neque iure voluptate expedita dignissimos autem, eos id iste est aut velit commodi exercitationem! Eligendi, quo dolorem, suscipit necessitatibus sit veniam maxime quae enim sunt nobis, quasi sed repudiandae. Sequi!"]; 
  const ReceivedSampleMessages = ["Hi", "This is sample data", "test", "test123"]
  return( 
    <div className="Messages-Right">
      <div className="Top-Container">
          <div className="Top">
            <div className="UserInfo-Right-Container">
              <div className="UserInfo-Right">
                <div className="Pfp-right"></div>
                <h2>Username</h2>
              </div>
            </div>
            <div className="Buttons-Container">
              <div className="Buttons">
              <img src={CallSVG}  className='Symbole' />
              <img src={VideoCallSVG} className='Symbole' />
              </div>
            </div>
          </div>
      </div>
      <div className="Center-Container">
        <div className="Center">
          <div className="Received-Messages">
            {
              ReceivedSampleMessages.map((Message, index)=>{
                return (
                  <div key={index} className='Message-Container'>
                    <div className='UserInfo-Message'>
                      <div className='pfp-right'></div>
                      <div className="User-Info">
                        <h2>Username</h2>
                        <div className='Message'>
                          <h3>{Message}</h3>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                )
              })            }
          </div>
          <div className="Sent-Messages">
            {
              SampleMessages.map((Message, index)=>{
                return (
                  <div key={index} className='Message-Container'>
                    <div className='UserInfo-Message'>
                      <div className='pfp-right'></div>
                      <div className="User-Info">
                        <h2>Username</h2>
                        <div className='Message'>
                          <h3>{Message}</h3>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages