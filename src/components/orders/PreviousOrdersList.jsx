import { useState } from "react"

export const PreviousOrdersList = () => {
  const [previousOrders, setPreviousOrders] = useState([])

  return (
    <div>
      <div>
        <h1 className="text-4xl">Previous Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Number of Items</th>
              <th>Purchase Date</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}
