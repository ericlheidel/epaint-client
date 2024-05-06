import { useState } from "react"
import { addNewPayment } from "../../data/payments.jsx"
import PropTypes from "prop-types"
import { button, gradientOne } from "../../utils.jsx"
import { ModalDefaultError } from "../../elements/modals/ModalDefaultError.jsx"
import { Backdrop } from "../../elements/Backdrop.jsx"

export const AddPayment = ({ refresh, setIsNewHidden, setIsDisabled }) => {
  const [newPaymentName, setNewPaymentName] = useState("")
  const [newAcctNumber, setNewAcctNumber] = useState("")
  const [newExDate, setNewExDate] = useState("")

  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState("")
  const [modalMessage, setModalMessage] = useState("")

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
      setTitle("Payments")
      setModalMessage("Please include a Payment Name")
      setShowModal(true)
    } else if (!acctNumberFormat.test(newAcctNumber)) {
      setTitle("Payments")
      setModalMessage('Please use card number formatted: "####-####-####-####"')
      setShowModal(true)
    } else if (!exDateFormat.test(newExDate)) {
      setTitle("Payments")
      setModalMessage('Please use date format: "YYYY-MM-DD"')
      setShowModal(true)
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

  //   if (newPaymentName === "") {
  //     setTitle("Payments")
  //     setModalMessage("Please include a Payment Name")
  //     setShowModal(true)
  //   } else {
  //     if (!acctNumberFormat.test(newAcctNumber) || newAcctNumber === "") {
  //       setTitle("Payments")
  //       setModalMessage(
  //         'Please use card number in format: "####-####-####-####"'
  //       )
  //       showModal(true)
  //     } else {
  //       if (!exDateFormat.test(newExDate)) {
  //         setTitle("Payments")
  //         setModalMessage('Please use date format: "YYYY-MM-DD"')
  //         setShowModal(true)
  //       } else {
  //         addNewPayment(newPayment).then(() => {
  //           refresh()
  //           setNewPaymentName("")
  //           setNewAcctNumber("")
  //           setNewExDate("")
  //           setIsNewHidden(true)
  //         })
  //       }
  //     }
  //   }
  // }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const fillOutForm = () => {
    setNewPaymentName("Discover")
    setNewAcctNumber("1111-2222-3333-4444")
    setNewExDate("2030-08-08")
  }

  return (
    <div className="mt-36 flex justify-center items-center">
      {showModal && (
        <ModalDefaultError
          title={title}
          modalMessage={modalMessage}
          handleCloseModal={handleCloseModal}
        />
      )}
      {showModal && <Backdrop />}
      <div className={`${gradientOne} p-12 rounded-3xl shadow-2xl`}>
        <form onSubmit={handleSubmit}>
          <h2
            className="font-three text-9xl mb-5 text-white"
            onClick={fillOutForm}
          >
            Add a Payment
          </h2>
          <fieldset className="w-full mb-8">
            <label htmlFor="paymentName" className="text-4xl mb-2 text-white">
              Payment Name:{" "}
              <input
                id="paymentName"
                type="text"
                value={newPaymentName}
                className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                onChange={(e) => {
                  setNewPaymentName(e.target.value)
                }}
              />
            </label>
          </fieldset>
          <fieldset className="w-full mb-8">
            <label htmlFor="accountNumber" className="text-4xl mb-2 text-white">
              Account Number:{" "}
              <input
                id="accountNumber"
                type="text"
                value={newAcctNumber}
                className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                onChange={(e) => {
                  setNewAcctNumber(e.target.value)
                }}
              />
            </label>
          </fieldset>
          <fieldset className="w-full mb-8">
            <label
              htmlFor="expirationDate"
              className="text-4xl mb-2 text-white"
            >
              Expiration Date:{" "}
              <input
                id="expirationDate"
                type="text"
                value={newExDate}
                className="w-full p-4 text-3xl text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
                onChange={(e) => {
                  setNewExDate(e.target.value)
                }}
              />
            </label>
          </fieldset>
          <div className="flex flex-row justify-evenly">
            <fieldset>
              <button type="submit" className={`${button}`}>
                Add Payment
              </button>
            </fieldset>
            <fieldset>
              <button
                className={`${button} ml-12`}
                onClick={(e) => {
                  e.preventDefault()
                  setIsNewHidden(true)
                  setIsDisabled(false)
                }}
              >
                Cancel
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  )
}

AddPayment.propTypes = {
  refresh: PropTypes.func,
  isNewHidden: PropTypes.bool,
  setIsNewHidden: PropTypes.func,
  setIsDisabled: PropTypes.func,
}
