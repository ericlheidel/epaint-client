import PropTypes from "prop-types"
import { button } from "../../utils.jsx"

export const ModalDefaultError = ({
  title,
  modalMessage,
  handleCloseModal,
}) => {
  return (
    <div
      className={`fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-slate-800 p-12 rounded-lg shadow-2xl z-50`}
    >
      <h2 className={`font-three text-8xl text-white mb-8`}>{title}</h2>
      <p className="text-white text-3xl mb-4">{modalMessage}</p>
      <button autoFocus className={`${button}`} onClick={handleCloseModal}>
        Ok
      </button>
    </div>
  )
}

ModalDefaultError.propTypes = {
  title: PropTypes.string,
  modalMessage: PropTypes.string,
  handleCloseModal: PropTypes.func,
}
