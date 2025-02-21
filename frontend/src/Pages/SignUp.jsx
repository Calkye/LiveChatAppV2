import './Css/SignUp.css'

const SignUp = () => {
  return (
    <div className="Form-Wrapper">
      <div className="Background" />
      <form className="Form">
        <div className="Input-Container">
          <div className="input">
            <label>Username</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>Password</label>
            <input type="password" />
          </div>
        </div>
        <div className="Button-Container">
          <div className="Button">
            <button>Create Account</button>
            <h4>Or Sign Up</h4>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
