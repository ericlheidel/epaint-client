import { useEffect, useState } from "react"
import { getUserPayments } from "../../data/payments.jsx"
import { AddPayment } from "./AddPayment.jsx"
import { Payment } from "./Payment.jsx"
import { buttonNoMarginNoSize, gradientOne } from "../../utils.jsx"

export const Payments = () => {
  const [userPayments, setUserPayments] = useState([])
  const [isNewHidden, setIsNewHidden] = useState(true)

  const refresh = () => {
    getUserPayments().then((res) => {
      if (res) {
        setUserPayments(res)
      }
    })
  }

  useEffect(() => {
    refresh()
  }, [])

  return (
    <div className="flex flex-col">
      <div
        className={`${gradientOne} flex flex-col shrink-0 mt-36 ml-auto mr-auto w-3/4 p-12 rounded-3xl`}
      >
        <h2 className="font-three text-9xl mb-5 text-white">Payments</h2>
        <table className="w-2/3 mx-auto">
          <thead>
            <tr>
              <th className="text-5xl text-white p-3 pb-6">Payment Name</th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">
                Account Number
              </th>
              <th className="text-5xl text-white p-3 pl-6 pb-6">
                Expiration Date
              </th>
            </tr>
          </thead>
          <tbody>
            {userPayments.map((payment) => {
              return (
                <Payment key={payment.id} payment={payment} refresh={refresh} />
              )
            })}
          </tbody>
        </table>
        <button
          className={`${buttonNoMarginNoSize} px-8 py-4 ml-auto mr-auto w-fit`}
          hidden={!isNewHidden}
          onClick={() => {
            setIsNewHidden(false)
          }}
        >
          Add Payment
        </button>
        <button
          className={`${buttonNoMarginNoSize} px-8 py-4 ml-auto mr-auto w-fit pointer-events-none opacity-50 bg-gray-600 text-gray-200`}
          disabled
          hidden={isNewHidden}
          onClick={() => {
            setIsNewHidden(false)
          }}
        >
          Add Payment
        </button>
      </div>
      <div>
        <div hidden={isNewHidden}>
          <AddPayment refresh={refresh} setIsNewHidden={setIsNewHidden} />
        </div>
      </div>
    </div>
  )
}
