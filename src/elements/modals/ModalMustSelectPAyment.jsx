import PropTypes from "prop-types"
import { button } from "../../utils.jsx"

export const ModalMustSelectPayment = ({ handleCloseModal }) => {
  return (
    <div
      className={`fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-slate-800 p-12 rounded-lg shadow-2xl z-50`}
    >
      <h2 className={`font-three text-8xl text-white mb-8`}>Payment</h2>
      <p className="text-white text-3xl mb-4">
        Please select a payment method.
      </p>
      <button className={`${button}`} onClick={handleCloseModal}>
        Ok
      </button>
    </div>
  )
}

ModalMustSelectPayment.propTypes = {
  handleCloseModal: PropTypes.func,
}
