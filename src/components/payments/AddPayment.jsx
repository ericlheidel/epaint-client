import { useState } from "react"
import { addNewPayment } from "../../data/payments.jsx"
import PropTypes from "prop-types"

export const AddPayment = ({ refresh, isNewHidden, setIsNewHidden }) => {
  const [newPaymentName, setNewPaymentName] = useState("")
  const [newAcctNumber, setNewAcctNumber] = useState("")
  const [newExDate, setNewExDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPayment = {
      newPaymentName,
      newAcctNumber,
      newExDate,
    }

    const acctNumberFormat = /^\d{4}-\d{4}-\d{4}-\d{4}$/
    const exDateFormat = /^\d{4}-\d{2}-\d{2}$/

    if (newPaymentName === "") {
      window.alert("Please include a Payment Name")
    } else {
      if (!acctNumberFormat.test(newAcctNumber)) {
        window.alert('Please use card number  format: "####-####-####-####"')
      } else {
        if (!exDateFormat.test(newExDate)) {
          window.alert('Please use date format: "YYYY-MM-DD"')
        } else {
          addNewPayment(newPayment).then(() => {
            refresh()
            setNewPaymentName("")
            setNewAcctNumber("")
            setNewExDate("")
            setIsNewHidden(true)
          })
        }
      }
    }
  }

  return (
    <div className="add-payment-form" hidden={isNewHidden}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Payment Name:{" "}
            <input
              id="paymentName"
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
            <button type="submit" className="test">
              Add Payment
            </button>
          </fieldset>
          <fieldset>
            <button
              className="test"
              onClick={(e) => {
                e.preventDefault()
                setIsNewHidden(true)
              }}
            >
              Cancel
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

AddPayment.propTypes = {
  refresh: PropTypes.func.isRequired,
  isNewHidden: PropTypes.bool.isRequired,
  setIsNewHidden: PropTypes.func.isRequired,
}
