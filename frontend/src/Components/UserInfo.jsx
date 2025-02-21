import './Css/UserInfo.css'

const UserInfo = ({ImageUrl})=>{
  return (
    <div className="UserInfo-Container">
      <div className="UserInfo">
        <div className="pfp">
          <img src={ImageUrl}  />

        </div>
        <div className="Message">
          <h2>Username</h2>
          <h4>Some message here</h4>
        </div>
      </div>
    </div>
  )
}

export default UserInfo