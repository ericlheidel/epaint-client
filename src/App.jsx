// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Login } from "./components/auth/Login.jsx"
import { Authorized } from "./components/auth/Authorized.jsx"
import { HomeLandingPage } from "./components/home/HomeLandingPage.jsx"
import { Register } from "./components/auth/Register.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<HomeLandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
