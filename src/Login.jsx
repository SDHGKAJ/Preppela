import "./Login.css"

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>

        <input type="email" className="login-input" placeholder="Email" />
        <input type="password" className="login-input" placeholder="Password" />

        <button className="login-btn">Login</button>

        <p className="login-switch">Don't have an account? <span>Sign up</span></p>
      </div>
    </div>
  )
}

export default Login
