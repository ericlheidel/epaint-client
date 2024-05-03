import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../data/auth.jsx"
import { button, gradientOne } from "../../utils.jsx"

export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

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
    <main className="mt-36 flex justify-center items-center">
      <section className={`${gradientOne} p-12 rounded-3xl shadow-2xl`}>
        <form className="flex flex-col items-center" onSubmit={handleLogin}>
          <h2
            className="font-one text-8xl mb-6 text-white text-center"
            onClick={() => {
              setUsername("eric")
              setPassword("eric")
            }}
          >
            Paintkillerz
          </h2>
          <fieldset className="w-full mb-8">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-4xl mb-2 text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                required
                // autoFocus
                className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
            </div>
          </fieldset>
          <fieldset className="w-full mb-8">
            <div className="flex flex-col">
              <label htmlFor="password" className="text-4xl mb-2 text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                required
                className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
          </fieldset>
          <button type="submit" className={`${button}`}>
            Sign In
          </button>
        </form>
        <Link
          to="/register"
          className="mt-6 text-2xl text-white py-4 px-8 focus:outline-none hover:text-slate-400"
        >
          Join the community?
        </Link>
      </section>
    </main>
  )
}
