import { createContext, useContext, useEffect, useState } from "react"
// import { useRouter } from "react-router-dom"
import { getUserProfile } from "../data/auth.jsx"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [profile, setProfile] = useState([])
  const [token, setToken] = useState("")
  // const router = useRouter()

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  useEffect(() => {
    const authRoutes = ["/login", "/register"]
    if (token) {
      localStorage.setItem("token", token)
      if (!authRoutes.includes(router.pathname)) {
        getUserProfile().then((profileData) => {
          if (profileData) {
            setProfile(profileData)
          }
        })
      }
    }
  }, [token, router.pathname])

  return (
    <AppContext.Provider value={{ profile, token, setToken, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
