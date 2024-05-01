import { useEffect, useState } from "react"
import { getCart } from "../../data/carts.jsx"
import { deleteOrderPaintById } from "../../data/paints.jsx"
import { CompleteOrder } from "./CompleteOrder.jsx"
import { getUserPayments } from "../../data/payments.jsx"
import { useNavigate } from "react-router-dom"
import { CartItem } from "./CartItem.jsx"

export const Cart = () => {
  const [cart, setCart] = useState({
    total: 0,
    number_of_items: 0,
  })
  const [isCompleteHidden, setIsCompleteHidden] = useState(true)
  const [userPayments, setUserPayments] = useState([])

  const navigate = useNavigate()

  const refreshCart = () => {
    getCart().then((res) => {
      if (res) {
        setCart(res)
      }
    })
  }
  useEffect(() => {
    refreshCart()
  }, [])

  useEffect(() => {
    getUserPayments().then((res) => {
      setUserPayments(res)
    })
  }, [])

  const handleRemoveAllPaintsFromOrder = () => {
    cart.items.map((item) => {
      deleteOrderPaintById(item.id).then(refreshCart())
    })
  }

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-4xl mb-5">Cart</h1>
        <table className="w-2/3 mx-auto">
          <thead>
            <tr>
              <th>{"Image"}</th>
              <th>{"Paint Color"}</th>
              <th>{"Paint Number"}</th>
              <th>{"Size"}</th>
              <th>{"Price"}</th>
            </tr>
          </thead>
          <tbody>
            {cart.items?.map((paint) => {
              return (
                <tr key={paint.id}>
                  <CartItem paint={paint} setCart={setCart} />
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>{cart.total > 0 && `Total Price $${cart.total}`}</div>
        <div className="flex flex-row justify-center mt-5">
          <div>
            {cart.number_of_items > 0 && (
              <button className="test" onClick={handleRemoveAllPaintsFromOrder}>
                Delete Order
              </button>
            )}
          </div>
          <div>
            {cart.number_of_items > 0 && (
              <button
                className="ml-16 test"
                onClick={() => {
                  if (userPayments.length === 0) {
                    window.alert(
                      "Please add a payment method to your account..."
                    )
                    navigate("/payments")
                  } else {
                    setIsCompleteHidden(false)
                  }
                }}
              >
                Complete Order
              </button>
            )}
          </div>
        </div>
        <div hidden={isCompleteHidden}>
          <CompleteOrder
            setIsCompleteHidden={setIsCompleteHidden}
            cart={cart}
          />
        </div>
      </div>
    </div>
  )
}
