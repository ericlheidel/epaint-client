// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Login } from "./components/auth/Login.jsx"
import { Authorized } from "./components/auth/Authorized.jsx"
import { HomeLandingPage } from "./components/home/HomeLandingPage.jsx"
import { Register } from "./components/auth/Register.jsx"
import { PaintsList } from "./components/paints/PaintsList.jsx"
import { PaintDetail } from "./components/paints/PaintDetail.jsx"
import { Cart } from "./components/cart/Cart.jsx"
import { Payments } from "./components/payments/Payments.jsx"
import { PaintsListAll } from "./components/paints/PaintsListAll.jsx"
import { PreviousOrdersList } from "./components/orders/PreviousOrdersList.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<HomeLandingPage />} />
          <Route path="/paints" element={<PaintsListAll />} />
          <Route path="/:paintTypeId/paints" element={<PaintsList />} />
          <Route
            path="/:paintTypeId/paints/:paintId"
            element={<PaintDetail />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/my-orders" element={<PreviousOrdersList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
