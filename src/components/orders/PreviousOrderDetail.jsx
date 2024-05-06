import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getOrderById } from "../../data/orders.jsx"
import { PaintInOrder } from "../paints/PaintInOrder.jsx"
import { button, buttonNoMarginNoSize, gradientOne } from "../../utils.jsx"
import { addPaintToCart } from "../../data/paints.jsx"

export const PreviousOrderDetail = () => {
  const { orderId } = useParams()

  const [previousOrder, setPreviousOrder] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    getOrderById(orderId).then((res) => {
      setPreviousOrder(res)
    })
  }, [orderId])

  return (
    <div
      className={`${gradientOne} flex flex-col shrink-0 mt-36 ml-auto mr-auto w-2/3 p-12 rounded-3xl`}
    >
      <h2 className="font-three text-9xl mb-5 text-white">
        Order #{previousOrder.id}
      </h2>
      <table>
        <thead>
          <tr>
            <th className="text-5xl text-white p-3 pb-6">Paint</th>
            <th className="text-5xl text-white p-3 pl-6 pb-6">Color</th>
            <th className="text-5xl text-white p-3 pl-6 pb-6">Number</th>
            <th className="text-5xl text-white p-3 pl-6 pb-6">Size</th>
            <th className="text-5xl text-white p-3 pl-6 pb-6">Price</th>
          </tr>
        </thead>
        <tbody>
          {previousOrder.items &&
            previousOrder.items.map((paint) => {
              return (
                <tr key={paint.id}>
                  <PaintInOrder key={paint.id} paint={paint} />
                </tr>
              )
            })}
        </tbody>
      </table>
      <button
        className={`${buttonNoMarginNoSize} h-16 w-72 mx-auto`}
        onClick={() => {
          previousOrder.items.map((paint) => {
            addPaintToCart(paint.paint.id, paint.size.id).then(() => {
              getOrderById(orderId).then((res) => {
                setPreviousOrder(res)
              })
            })
          })
        }}
      >
        Add All To Order
      </button>
      <div className="flex flex-col flex-wrap gap-20 justify-evenly">
        <div className="text-4xl text-white p-3 pb-2 mt-6">
          {previousOrder.total > 0 && `Total Price $${previousOrder.total}`}
        </div>
      </div>
      <div className="flex flex-row justify-center mt-5">
        <button
          className={`${buttonNoMarginNoSize} px-10 py-4`}
          onClick={() => {
            navigate("/my-orders")
          }}
        >
          My Orders
        </button>
        <button
          className={`${buttonNoMarginNoSize} px-10 py-4 ml-12`}
          onClick={() => {
            navigate("/cart")
          }}
        >
          Cart
        </button>
      </div>
    </div>
  )
}
