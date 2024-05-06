import { useEffect, useState } from "react"
import { getClosedOrders } from "../../data/orders.jsx"
import { PreviousOrder } from "./PreviousOrder.jsx"
import { button, gradientOne } from "../../utils.jsx"
import { getCart } from "../../data/carts.jsx"

export const PreviousOrdersList = () => {
  const [closedOrders, setClosedOrders] = useState([])

  useEffect(() => {
    getClosedOrders().then((res) => {
      setClosedOrders(res)
    })
  }, [])

  useEffect(() => {
    getCart()
  }, [])

  return (
    <div>
      <div
        className={`${gradientOne} flex flex-col shrink-0 mt-36 ml-auto mr-auto w-3/4 p-12 rounded-3xl`}
      >
        <h1 className="font-three text-9xl mb-5 text-white">Previous Orders</h1>
        <table className="w-2/3 mx-auto">
          <thead>
            <tr>
              <th className="text-5xl text-white p-3 pb-6">Order</th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">Items</th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">
                Purchase Date
              </th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">Payment</th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">Total</th>
            </tr>
          </thead>
          <tbody>
            {closedOrders.map((order) => {
              return (
                <tr key={order.id}>
                  <PreviousOrder order={order} />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
