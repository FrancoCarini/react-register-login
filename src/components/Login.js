import { useState, useContext } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import axios from "../api/axios"

import AuthContext from "../context/AuthProvider"

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const { setAuth } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "users/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      setAuth(response.data)
      setEmail("")
      setPassword("")
      navigate(from, { replace: true })
    } catch (err) {
      setErrorMsg(err.response.data.message)
    }
  }

  return (
    <section>
      <p className={errorMsg ? "errmsg" : "offscreen"} aria-live="assertive">
        {errorMsg}
      </p>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="off"
          required
        />
        <button>Login</button>
      </form>
      <p>
        Need an account? Please register
        <br />
        <span className="line">
          <Link to="/register">Create Account</Link>
        </span>
      </p>
    </section>
  )
}

export default Login
