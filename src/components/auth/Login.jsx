import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../data/auth.jsx"
// import { useAppContext } from "../../context/UseContext.jsx"

export const Login = () => {
  // const { setToken } = useAppContext()
  const [username, setUsername] = useState("eric")
  const [password, setPassword] = useState("password")
  // const existDialog = useRef()

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    loginUser(username, password)
      .then((res) => res.json())
      .then((authInfo) => {
        if (authInfo.token) {
          localStorage.setItem("paint_token", JSON.stringify(authInfo))
          navigate("/")
        } else {
          window.alert("Incorrect Log In Information")
        }
      })
  }

  return (
    <main>
      <section>
        <form onSubmit={handleLogin}>
          <h1>ePaint</h1>
          <h2>Please Sign In</h2>
          <fieldset>
            <label htmlFor="username"> Email Address </label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="Email Address"
              required
              autoFocus
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </fieldset>
          <fieldset>
            <button type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
      <div>
        <section>
          <Link to="/register">Join the community?</Link>
        </section>
      </div>
    </main>
  )
}
