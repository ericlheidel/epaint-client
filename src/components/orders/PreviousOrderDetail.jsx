import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getOrderById } from "../../data/orders.jsx"
import { PaintInOrder } from "../paints/PaintInOrder.jsx"

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
    <div>
      <div className="flex flex-col">
        <button
          className="test text-4xl mb-5 w-fit mx-auto"
          onClick={() => {
            navigate("/cart")
          }}
        >
          Back To Cart
        </button>
        <button
          className="test text-4xl mb-5 w-fit mx-auto"
          onClick={() => {
            navigate("/my-orders")
          }}
        >
          Back To My Orders
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-20 justify-evenly">
        {previousOrder.items &&
          previousOrder.items.map((paint) => {
            return <PaintInOrder key={paint.id} paint={paint} />
          })}
      </div>
    </div>
  )
}
