// import { useEffect, useState } from "react"
// import { getToken } from "../../utils.jsx"

import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  const handleLogout = () => {
    localStorage.removeItem("paint_token")
    navigate("/login")
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 mb-5">
      {/* Left section with home icon */}
      <Link to="/" className="text-3xl">
        <i className="fa-solid fa-spray-can"></i>
      </Link>

      {/* Right section with dropdown menu */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-3xl focus:outline-none"
        >
          <i className="fa-solid fa-ellipsis"></i>
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
            <ul className="py-2">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => {
                    setShowDropdown(false)
                  }}
                >
                  Paints
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => {
                    setShowDropdown(false)
                  }}
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/my-orders"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => {
                    setShowDropdown(false)
                  }}
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/payments"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => {
                    setShowDropdown(false)
                  }}
                >
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => {
                    setShowDropdown(false)
                  }}
                >
                  Profile
                </Link>
              </li>
              <li className="border-t border-gray-300 mt-2">
                <button
                  onClick={() => {
                    handleLogout()
                    setShowDropdown(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

// ____________________________________________________________________________________
// import { Link, useNavigate } from "react-router-dom"
// import "./NavBar.css"

// export const NavBar = () => {
//   const navigate = useNavigate()

//   return (
//     <>
//       <nav>
//         <div className="navbar-placeholder">
//           <ul className="navbar">
//             <li className="navbar-item">
//               <Link to={`/`}>Paints</Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/cart">Cart</Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/my-orders">My Orders</Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/payments">Payments</Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/profile">Profile</Link>
//             </li>
//             <li className="navbar-item">
//               <Link
//                 to=""
//                 onClick={() => {
//                   localStorage
//                     .removeItem("paint_token")
//                     .then(navigate("/login"))
//                 }}
//               >
//                 Logout
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   )
// }

// ____________________________________________________________________________________

// const [isLoggedIn, setIsLoggedIn] = useState(false)

// const navigate = useNavigate()

// useEffect(() => {
//   if (getToken()) {
//     setIsLoggedIn(true)
//   }
// }, [])

// const getLoggedInButtons = () => {
//   return (
//     <div className="navbar-item has-dropdown is-hoverable absolute right-2.5 top-2.5">
//       <a className="navbar-link">
//         <span className="icon">
//           <i className="fa-solid fa-bars text-4xl"></i>
//         </span>
//       </a>
//       <div className="navbar-dropdown is-right">
//         <Link href="/cart">
//           <a className="navbar-item">Cart</a>
//         </Link>
//         <Link href="/my-orders">
//           <a className="navbar-item">My Orders</a>
//         </Link>
//         <Link href="/payments">
//           <a className="navbar-item">Payments</a>
//         </Link>
//         <Link href="/profile">
//           <a className="navbar-item">Profile</a>
//         </Link>
//         <hr className="navbar-divider"></hr>
//         <a
//           className="navbar-item"
//           onClick={() => {
//             localStorage.removeItem("token")
//             setIsLoggedIn(false)
//             navigate("/login")
//           }}
//         >
//           Log Out
//         </a>
//       </div>
//     </div>
//   )
// }

// const getLoggedOutbuttons = () => {
//   return (
//     <div className="navbar-item">
//       <div className="buttons">
//         <Link href="/register">
//           <a className="button is-primary">
//             <strong>Sign Up</strong>
//           </a>
//         </Link>
//         <Link href="/login">
//           <a className="button is-primary">
//             <strong>Login</strong>
//           </a>
//         </Link>
//       </div>
//     </div>
//   )
// }

// return (
//   <div>
//     <div>{isLoggedIn ? getLoggedInButtons() : getLoggedOutbuttons()}</div>
//   </div>
// )
// }
