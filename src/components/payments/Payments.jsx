import { useEffect, useState } from "react"
import {
  addNewPayment,
  deleteUserPayment,
  getUserPayments,
} from "../../data/payments.jsx"

export const Payments = () => {
  const [payments, setPayments] = useState([])
  const [isHidden, setIsHidden] = useState(true)

  const [newPaymentName, setNewPaymentName] = useState("")
  const [newAcctNumber, setNewAcctNumber] = useState("")
  const [newExDate, setNewExDate] = useState("")

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

  const handleSubmit = () => {
    const newPayment = {
      newPaymentName,
      newAcctNumber,
      newExDate,
    }

    addNewPayment(newPayment).then(() => {
      refresh()
    })
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
                  <td>
                    <button
                      className="ml-3"
                      onClick={() => console.log("clicked")}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>
          <button
            className="test"
            hidden={!isHidden}
            onClick={() => {
              setIsHidden(false)
            }}
          >
            Add Payment
          </button>
        </div>
        <div className="add-payment-form" hidden={isHidden}>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                Payment Name:{" "}
                <input
                  id="name"
                  type="text"
                  value={newPaymentName}
                  onChange={(e) => {
                    setNewPaymentName(e.target.value)
                  }}
                />
              </label>
            </fieldset>
            <fieldset>
              <label>
                Account Number:{" "}
                <input
                  id="name"
                  type="text"
                  value={newAcctNumber}
                  onChange={(e) => {
                    setNewAcctNumber(e.target.value)
                  }}
                />
              </label>
            </fieldset>
            <fieldset>
              <label>
                Expiration Date:{" "}
                <input
                  id="name"
                  type="text"
                  value={newExDate}
                  onChange={(e) => {
                    setNewExDate(e.target.value)
                  }}
                />
              </label>
            </fieldset>
            <div className="flex flex-row justify-evenly mx-auto w-1/3">
              <fieldset>
                <button className="test">Add Payment</button>
              </fieldset>
              <fieldset>
                <button
                  className="test"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsHidden(true)
                  }}
                >
                  Cancel
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
