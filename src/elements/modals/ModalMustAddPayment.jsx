import PropTypes from "prop-types"
import { button } from "../../utils.jsx"
import { useNavigate } from "react-router-dom"

export const ModalMustAddPayment = ({ handleCloseModal }) => {
  const navigate = useNavigate()

  return (
    <div
      className={`fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-slate-800 p-12 rounded-lg shadow-2xl z-50`}
    >
      <h2 className={`font-three text-8xl text-white mb-8`}>
        Add a Payment Method
      </h2>
      <p className="text-white text-3xl mb-4">
        Please add a payment method to your account before completing your
        order.
      </p>
      <p className="text-white text-3xl mt-6">Thank You!</p>
      <button
        className={`${button}`}
        onClick={() => {
          handleCloseModal()
          navigate("/payments")
        }}
      >
        Go To Payments
      </button>
      <button className={`${button} ml-24`} onClick={handleCloseModal}>
        Close
      </button>
    </div>
  )
}

ModalMustAddPayment.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
}
