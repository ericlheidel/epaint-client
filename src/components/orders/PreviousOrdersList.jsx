import { useEffect, useState } from "react"
import { getClosedOrders } from "../../data/orders.jsx"
import { PreviousOrder } from "./PreviousOrder.jsx"

export const PreviousOrdersList = () => {
  const [closedOrders, setClosedOrders] = useState([])

  useEffect(() => {
    getClosedOrders().then((res) => {
      setClosedOrders(res)
    })
  }, [])

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-4xl mb-5">Previous Orders</h1>
        <table className="w-2/3 mx-auto">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Number of Items</th>
              <th>Purchase Date</th>
              <th>Payment</th>
              <th>Total</th>
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
