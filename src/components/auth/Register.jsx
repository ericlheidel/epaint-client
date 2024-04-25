import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../data/auth.jsx"

export const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const navigate = useNavigate()

  const user = {
    username,
    password,
    email,
    first_name: firstName,
    last_name: lastName,
    address,
    phone_number: phoneNumber,
  }

  const handleRegister = (e) => {
    e.preventDefault()

    registerUser(user)
      .then((res) => res.json())
      .then((authInfo) => {
        if (authInfo.token) {
          localStorage.setItem("paint_token", JSON.stringify(authInfo))
          navigate("/")
        } else {
          window.alert("Please Fill Out All Info")
        }
      })
  }

  return (
    <main>
      <section>
        <form onSubmit={handleRegister}>
          <h1>Paintkillerz</h1>
          <h2>Register Your ePaint Account</h2>
          <fieldset>
            <label htmlFor="firstName"> First Name </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              required
              autoFocus
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName"> Last Name </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              placeholder="Last Name"
              required
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="address"> Address </label>
            <input
              type="text"
              id="address"
              value={address}
              placeholder="Address"
              required
              onChange={(e) => {
                setAddress(e.target.value)
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phoneNumber"> Phone Number </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              placeholder="phoneNumber"
              required
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="username"> email </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="email"
              required
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="username"> Username </label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="username"
              required
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
              placeholder="password"
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </fieldset>
          <fieldset>
            <button type="submit">Register</button>
          </fieldset>
        </form>
      </section>
    </main>
  )
}
