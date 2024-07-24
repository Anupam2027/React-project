import InputField from "./components/InputField"
import SocialLogin from "./components/SocialLogin"

function App() {
  

  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className="separation"><span>or</span></p>
      <form action="#" className="login-form">
        <InputField  type="Email" placeholder="Email Address" icon="fa-solid fa-envelope"/>
        <InputField  type="password" placeholder="Password" icon="fa-solid fa-lock"/>
        <a href="#" className="forgot-pass-link">Forgot Password</a>
        <button className="login-button">Log In</button>
      </form>
      <p className="signup-text">Don&apos;t have an account? <a href="#">Signup Now</a></p>
    </div>
  )
}

export default App
