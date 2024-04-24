import { Navigate, Outlet } from "react-router-dom"
import { NavBar } from "../nav/NavBar.jsx"

export const Authorized = () => {
  if (localStorage.getItem("paint_token")) {
    return (
      <>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </>
    )
  }
  return <Navigate to="/login" replace />
}
