import { useState } from "react"
import { deleteUserPayment, updateUserPayment } from "../../data/payments.jsx"
import PropTypes from "prop-types"

export const Payment = ({ payment, refresh }) => {
  const [isUpdateHidden, setIsUpdateHidden] = useState(true)
  const [updatedPaymentName, setUpdatedPaymentNamed] = useState(payment.name)
  const [updatedAcctNumber, setUpdatedAcctNumber] = useState(
    payment.acct_number
  )
  const [updatedExDate, setUpdatedExDate] = useState(payment.ex_date)

  const handleDeletePayment = (paymentId) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this payment?`
    )

    if (confirmDelete) {
      deleteUserPayment(paymentId).then(() => {
        refresh()
      })
    }
  }

  const handleUpdatePayment = (paymentId) => {
    const updatedPayment = {
      updatedPaymentName,
      updatedAcctNumber,
      updatedExDate,
    }

    const acctNumberFormat = /^\d{4}-\d{4}-\d{4}-\d{4}$/
    const exDateFormat = /^\d{4}-\d{2}-\d{2}$/

    if (updatedPaymentName === "") {
      window.alert("Please include a Payment Name")
    } else {
      if (!acctNumberFormat.test(updatedAcctNumber)) {
        window.alert('Please use card number  format: "####-####-####-####"')
      } else {
        if (!exDateFormat.test(updatedExDate)) {
          window.alert('Please use date format: "YYYY-MM-DD"')
        } else {
          updateUserPayment(paymentId, updatedPayment).then(() => {
            refresh()
            setIsUpdateHidden(true)
          })
        }
      }
    }
  }

  return (
    <tr key={payment.id}>
      <td hidden={!isUpdateHidden}>{payment.name}</td>
      <td hidden={isUpdateHidden}>
        <input
          id="paymentName"
          type="test"
          value={updatedPaymentName}
          onChange={(e) => {
            setUpdatedPaymentNamed(e.target.value)
          }}
        />
      </td>
      <td hidden={!isUpdateHidden}>{payment.acct_number}</td>
      <td hidden={isUpdateHidden}>
        <input
          id="accountNumber"
          type="test"
          value={updatedAcctNumber}
          className="ml-3"
          onChange={(e) => {
            setUpdatedAcctNumber(e.target.value)
          }}
        />
      </td>
      <td hidden={!isUpdateHidden}>{payment.ex_date}</td>
      <td hidden={isUpdateHidden}>
        <input
          id="expirationDate"
          type="test"
          value={updatedExDate}
          className="ml-3"
          onChange={(e) => {
            setUpdatedExDate(e.target.value)
          }}
        />
      </td>
      <td>
        <button
          className="ml-3"
          onClick={() => handleDeletePayment(payment.id)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
      <td>
        <button
          className="ml-3"
          onClick={() => {
            setIsUpdateHidden(false)
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </td>
      <td>
        <button
          className="ml-3"
          hidden={isUpdateHidden}
          onClick={() => {
            handleUpdatePayment(payment.id)
          }}
        >
          <i className="fa-solid fa-check"></i>
        </button>
      </td>
      <td>
        <button
          className="ml-3"
          hidden={isUpdateHidden}
          onClick={() => setIsUpdateHidden(true)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </td>
    </tr>
  )
}

Payment.propTypes = {
  payment: PropTypes.object.isRequired,
  refresh: PropTypes.func.isRequired,
}