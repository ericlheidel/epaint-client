import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../data/auth.jsx"
import { button, gradientOne } from "../../utils.jsx"
import { ModalRegisterInfo } from "../../elements/modals/ModalRegisterInfo.jsx"
import { getCart } from "../../data/carts.jsx"
import { Backdrop } from "../../elements/Backdrop.jsx"

export const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")

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

    registerUser(user).then((res) => {
      if (res.ok) {
        return res.json().then((authInfo) => {
          localStorage.setItem("paint_token", JSON.stringify(authInfo))
          getCart()
          navigate("/")
        })
      } else {
        return res.json().then((data) => {
          if (data.message === "Email already exists") {
            setModalMessage("Email already exists")
            setShowModal(true)
          } else {
            if (data.message === "Username already exists") {
              setModalMessage("Username already exists")
              setShowModal(true)
            }
          }
        })
      }
    })
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const fillOutFormError = () => {
    setUsername("heidel")
    setPassword("ThisIsMyPassword1234554321!!")
    setEmail("heidel@heidel.com")
    setFirstName("Heidel")
    setLastName("Heidel")
    setAddress("200 Wrong Way., Nashville, TN 37377")
    setPhoneNumber("423-555-9985")
  }

  const fillOutFormNoError = () => {
    setUsername("jerry")
    setPassword("ThisIsMyPassword1234554321!!")
    setEmail("jerry@jerry.com")
    setFirstName("Jerry")
    setLastName("Seinfeld")
    setAddress("400 Other Way, Nashville, TN 37377")
    setPhoneNumber("533-908-5109")
  }

  return (
    <main className="mt-36 flex justify-center items-center">
      {showModal && (
        <ModalRegisterInfo
          modalMessage={modalMessage}
          handleCloseModal={handleCloseModal}
        />
      )}
      {showModal && <Backdrop />}
      <section className={`${gradientOne} p-12 rounded-3xl shadow-2xl`}>
        <form className="flex flex-col items-center" onSubmit={handleRegister}>
          <h2
            className="font-one text-8xl mb-6 text-white text-center"
            onClick={fillOutFormError}
          >
            Paintkillerz
          </h2>
          <h3
            className="text-5xl mb-6 text-white text-center"
            onClick={fillOutFormNoError}
          >
            Register Your Account
          </h3>
          {/* First Name and Last Name */}
          {/* First Name and Last Name */}
          <div className="flex">
            <fieldset className="w-full mb-8">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-3xl mb-2 text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  required
                  className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                />
              </div>
            </fieldset>
            <div className="w-20"></div>
            <fieldset className="w-full mb-8">
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-3xl mb-2 text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  required
                  className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                />
              </div>
            </fieldset>
          </div>
          <fieldset className="w-full mb-8">
            <div className="flex flex-col">
              <label htmlFor="address" className="text-3xl mb-2 text-white">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                required
                className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              />
            </div>
          </fieldset>
          {/* Phone Number and Email */}
          {/* Phone Number and Email */}
          <div className="flex">
            <fieldset className="w-full mb-8">
              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="text-3xl mb-2 text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  required
                  className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value)
                  }}
                />
              </div>
            </fieldset>
            <div className="w-20"></div>
            <fieldset className="w-full mb-8">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-3xl mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  required
                  className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
            </fieldset>
          </div>
          {/* Username and Password */}
          {/* Username and Password */}
          <div className="flex">
            <fieldset className="w-full mb-8">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-3xl mb-2 text-white">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  required
                  className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
              </div>
            </fieldset>
            <div className="w-20"></div>
            <fieldset className="w-full mb-8">
              <div className="flex flex-col">
                <label htmlFor="password" className="text-3xl mb-2 text-white">
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
          </div>
          <div className="flex flex-row">
            <button type="submit" className={`${button}`}>
              Register
            </button>
            <button
              className={`${button} ml-20`}
              onClick={() => {
                navigate("/login")
              }}
            >
              Back To Login
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
