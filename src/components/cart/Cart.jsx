import { useEffect, useState } from "react"
import { getCart } from "../../data/carts.jsx"
import { deleteOrderPaintById } from "../../data/paints.jsx"
import { CompleteOrder } from "./CompleteOrder.jsx"
import { getUserPayments } from "../../data/payments.jsx"
import { useNavigate } from "react-router-dom"
import { CartItem } from "./CartItem.jsx"
import { buttonNoMarginNoSize, gradientOne } from "../../utils.jsx"
import { ModalMustAddPayment } from "../../elements/modals/ModalMustAddPayment.jsx"

export const Cart = () => {
  const [cart, setCart] = useState({
    total: 0,
    number_of_items: 0,
  })
  const [isCompleteHidden, setIsCompleteHidden] = useState(true)
  const [userPayments, setUserPayments] = useState([])

  const [showModalMustAddPayment, setShowModalMustAddPayment] = useState(false)

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

  const handleCloseModal = () => {
    setShowModalMustAddPayment(false)
  }

  return (
    <div className="flex">
      <div
        className={`${gradientOne} flex flex-col shrink-0 mt-36 ml-auto mr-auto w-2/3 p-12 rounded-3xl`}
      >
        <h2 className="font-three text-9xl mb-5 text-white">Cart</h2>
        <table className="w-2/3 mx-auto">
          <thead>
            <tr>
              <th className="text-5xl text-white p-3 pb-6">{"Image"}</th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">{"Color"}</th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">{"Number"}</th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">{"Size"}</th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">{"Price"}</th>
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
        <div className="text-4xl text-white p-3 pb-2 mt-6">
          {cart.total > 0 && `Total Price $${cart.total}`}
        </div>
        <div className="flex flex-row justify-center mt-5">
          <div>
            {cart.number_of_items > 0 && (
              <button
                className={`${buttonNoMarginNoSize} px-10 py-4 mr-12`}
                onClick={handleRemoveAllPaintsFromOrder}
              >
                Delete Order
              </button>
            )}
          </div>
          <div>
            {cart.number_of_items > 0 && (
              <button
                className={`${buttonNoMarginNoSize} px-10 py-4`}
                onClick={() => {
                  if (userPayments.length === 0) {
                    setShowModalMustAddPayment(true)
                    // window.alert(
                    //   "Please add a payment method to your account..."
                    // )
                    // navigate("/payments")
                  } else {
                    setIsCompleteHidden(false)
                  }
                }}
              >
                Complete Order
              </button>
            )}
          </div>
          {showModalMustAddPayment && (
            <ModalMustAddPayment handleCloseModal={handleCloseModal} />
          )}
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
