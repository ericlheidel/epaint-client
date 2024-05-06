import { useState } from "react"
import { deleteUserPayment, updateUserPayment } from "../../data/payments.jsx"
import PropTypes from "prop-types"
import { buttonNoMarginNoSize, inputBlackText } from "../../utils.jsx"

export const Payment = ({
  payment,
  refresh,
  setTitle,
  setModalMessage,
  setShowModal,
}) => {
  const [isUpdateHidden, setIsUpdateHidden] = useState(true)
  const [updatedPaymentName, setUpdatedPaymentNamed] = useState(payment.name)
  const [updatedAcctNumber, setUpdatedAcctNumber] = useState(
    payment.acct_number
  )
  const [updatedExDate, setUpdatedExDate] = useState(payment.ex_date)
  const [isConfirmHidden, setIsConfirmHidden] = useState(true)

  const handleDeletePayment = (paymentId) => {
    deleteUserPayment(paymentId).then(() => {
      refresh()
    })
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
      setTitle("Payments")
      setModalMessage("Please include a Payment Name")
      setShowModal(true)
    } else if (!acctNumberFormat.test(updatedAcctNumber)) {
      setTitle("Payments")
      setModalMessage('Please use card number  format: "####-####-####-####"')
      setShowModal(true)
    } else if (!exDateFormat.test(updatedExDate)) {
      setTitle("Payments")
      setModalMessage('Please use date format: "YYYY-MM-DD"')
      setShowModal(true)
    } else {
      updateUserPayment(paymentId, updatedPayment).then(() => {
        refresh()
        setIsUpdateHidden(true)
      })
    }
  }

  return (
    <>
      <tr key={payment.id}>
        <td
          className="text-4xl text-white align-middle pl-6 pb-6"
          hidden={!isUpdateHidden}
        >
          {payment.name}
        </td>
        <td className="pb-5" hidden={isUpdateHidden}>
          <input
            id="paymentName"
            type="test"
            value={updatedPaymentName}
            className={`${inputBlackText}`}
            onChange={(e) => {
              setUpdatedPaymentNamed(e.target.value)
            }}
          />
        </td>
        <td
          className="text-4xl text-white align-middle pl-6 pb-6"
          hidden={!isUpdateHidden}
        >
          {payment.acct_number}
        </td>
        <td hidden={isUpdateHidden}>
          <input
            id="accountNumber"
            type="test"
            value={updatedAcctNumber}
            className={`${inputBlackText} ml-3`}
            onChange={(e) => {
              setUpdatedAcctNumber(e.target.value)
            }}
          />
        </td>
        <td
          className="text-4xl text-white align-middle pl-6 pb-6"
          hidden={!isUpdateHidden}
        >
          {payment.ex_date}
        </td>
        <td hidden={isUpdateHidden}>
          <input
            id="expirationDate"
            type="test"
            value={updatedExDate}
            className={`${inputBlackText} ml-3`}
            onChange={(e) => {
              setUpdatedExDate(e.target.value)
            }}
          />
        </td>
        <td>
          <button
            hidden={!isConfirmHidden}
            className={`${buttonNoMarginNoSize} px-4 py-2 ml-3`}
            onClick={() => {
              setIsConfirmHidden(false)
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            hidden={isConfirmHidden}
            className={`${buttonNoMarginNoSize} px-4 py-2 ml-3`}
            onClick={() => {
              setIsConfirmHidden(true)
              handleDeletePayment(payment.id)
            }}
          >
            Confirm
          </button>
        </td>
        <td>
          <button
            className={`${buttonNoMarginNoSize} px-4 py-2 ml-4`}
            onClick={() => {
              setIsUpdateHidden(false)
            }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </td>
        <td>
          <button
            className={`${buttonNoMarginNoSize} px-4 py-2 ml-4`}
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
            className={`${buttonNoMarginNoSize} px-4 py-2 ml-4`}
            hidden={isUpdateHidden}
            onClick={() => setIsUpdateHidden(true)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </td>
      </tr>
    </>
  )
}

Payment.propTypes = {
  payment: PropTypes.object,
  refresh: PropTypes.func,
  setTitle: PropTypes.func,
  setModalMessage: PropTypes.func,
  setShowModal: PropTypes.func,
  setShowPrompt: PropTypes.func,
}
