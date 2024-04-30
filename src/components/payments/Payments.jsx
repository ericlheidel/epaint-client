import { useEffect, useState } from "react"
import { getUserPayments } from "../../data/payments.jsx"
import { AddPayment } from "./AddPayment.jsx"
import { Payment } from "./Payment.jsx"

export const Payments = () => {
  const [payments, setPayments] = useState([])
  const [isNewHidden, setIsNewHidden] = useState(true)

  const refresh = () => {
    getUserPayments().then((res) => {
      if (res) {
        setPayments(res)
      }
    })
  }

  useEffect(() => {
    refresh()
  }, [])

  return (
    <div>
      <div className="flex flex-col">
        <table className="w-2/3 mx-auto">
          <thead>
            <tr>
              <th>Payment Name</th>
              <th>Account Number</th>
              <th>Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => {
              return (
                <Payment key={payment.id} payment={payment} refresh={refresh} />
              )
            })}
          </tbody>
        </table>
        <div>
          <button
            className="test"
            hidden={!isNewHidden}
            onClick={() => {
              setIsNewHidden(false)
            }}
          >
            Add Payment
          </button>
          <div>
            <AddPayment
              refresh={refresh}
              isNewHidden={isNewHidden}
              setIsNewHidden={setIsNewHidden}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
