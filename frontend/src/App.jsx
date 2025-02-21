import './Css/App.css'

import SideBar from './Components/SideBar.jsx'
import Messages from './Components/Messages/Messages.jsx'; 
import Input from './Components/Input/Input.jsx'; 

function App() {

  return (
    <>
      <div className="AppContainer">
        <div className="SideBar-Container">
          <SideBar />
        </div>
        <div className="App">
          <div className="Messages-Container">
            <Messages />
          </div>
          <div className="Input-Container">
            <Input />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
