import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//++   /$$$$$$$  /$$$$$$  /$$$$$$  /$$   /$$ /$$$$$$$$
//++  | $$__  $$|_  $$_/ /$$__  $$| $$  | $$|__  $$__/
//++  | $$  \ $$  | $$  | $$  \__/| $$  | $$   | $$
//++  | $$$$$$$/  | $$  | $$ /$$$$| $$$$$$$$   | $$
//++  | $$__  $$  | $$  | $$|_  $$| $$__  $$   | $$
//++  | $$  \ $$  | $$  | $$  \ $$| $$  | $$   | $$
//++  | $$  | $$ /$$$$$$|  $$$$$$/| $$  | $$   | $$
//++  |__/  |__/|______/ \______/ |__/  |__/   |__/

//++    /$$$$$$  /$$$$$$ /$$$$$$$  /$$$$$$$$
//++   /$$__  $$|_  $$_/| $$__  $$| $$_____/
//++  | $$  \__/  | $$  | $$  \ $$| $$
//++  |  $$$$$$   | $$  | $$  | $$| $$$$$
//++   \____  $$  | $$  | $$  | $$| $$__/
//++   /$$  \ $$  | $$  | $$  | $$| $$
//++  |  $$$$$$/ /$$$$$$| $$$$$$$/| $$$$$$$$
//++   \______/ |______/|_______/ |________/

const NavBarRight = () => {
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
    <div className="relative" ref={dropdownRef}>
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
  )
}

//++   /$$       /$$$$$$$$ /$$$$$$$$ /$$$$$$$$
//++  | $$      | $$_____/| $$_____/|__  $$__/
//++  | $$      | $$      | $$         | $$
//++  | $$      | $$$$$   | $$$$$      | $$
//++  | $$      | $$__/   | $$__/      | $$
//++  | $$      | $$      | $$         | $$
//++  | $$$$$$$$| $$$$$$$$| $$         | $$
//++  |________/|________/|__/         |__/

//++    /$$$$$$  /$$$$$$ /$$$$$$$  /$$$$$$$$
//++   /$$__  $$|_  $$_/| $$__  $$| $$_____/
//++  | $$  \__/  | $$  | $$  \ $$| $$
//++  |  $$$$$$   | $$  | $$  | $$| $$$$$
//++   \____  $$  | $$  | $$  | $$| $$__/
//++   /$$  \ $$  | $$  | $$  | $$| $$
//++  |  $$$$$$/ /$$$$$$| $$$$$$$/| $$$$$$$$
//++   \______/ |______/|_______/ |________/

const NavBarLeft = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)

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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="text-3xl focus:outline-none"
      >
        <i className="fa-solid fa-spray-can"></i>
      </button>
      {showDropdown && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <ul className="py-2">
            <li>
              <Link
                to="/paints"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  setShowDropdown(false)
                }}
              >
                All Paints
              </Link>
            </li>
            <li>
              <Link
                to="/1/paints"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  setShowDropdown(false)
                }}
              >
                Montana Black
              </Link>
            </li>
            <li>
              <Link
                to="/2/paints"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  setShowDropdown(false)
                }}
              >
                Montana Gold
              </Link>
            </li>
            <li>
              <Link
                to="/3/paints"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  setShowDropdown(false)
                }}
              >
                Montana White
              </Link>
            </li>
            <li>
              <Link
                to="/4/paints"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  setShowDropdown(false)
                }}
              >
                Montana Special
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 mb-5">
      <NavBarLeft />
      <Link to="/">
        <h1 className="text-3xl">Paintkillerz</h1>
      </Link>
      <NavBarRight />
    </nav>
  )
}
