import { useEffect, useState } from "react"
import { deleteUserPayment, getUserPayments } from "../../data/payments.jsx"

export const Payments = () => {
  const [payments, setPayments] = useState([])

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

  const handleDeletePayment = (paymentId) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this payment?`
    )

    if (confirmDelete) {
      deleteUserPayment(paymentId).then(refresh())
    }
  }

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
                <tr key={payment.id}>
                  <td>{payment.name}</td>
                  <td>{payment.acct_number}</td>
                  <td>{payment.ex_date}</td>
                  <td>
                    <button onClick={() => handleDeletePayment(payment.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
