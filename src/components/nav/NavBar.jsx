// import { useEffect, useState } from "react"
// import { getToken } from "../../utils.jsx"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <>
      <nav>
        <div className="navbar-placeholder">
          <ul className="navbar">
            <li className="navbar-item">
              <Link to={`/all/paints`}>Paints</Link>
            </li>
            <li className="navbar-item">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="navbar-item">
              <Link to="/my-orders">My Orders</Link>
            </li>
            <li className="navbar-item">
              <Link to="/payments">Payments</Link>
            </li>
            <li className="navbar-item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="navbar-item">
              <Link
                to=""
                onClick={() => {
                  localStorage
                    .removeItem("paint_token")
                    .then(navigate("/login"))
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

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
