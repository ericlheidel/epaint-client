import PropTypes from "prop-types"
import { button } from "../../utils.jsx"

export const ModalLoginIncorrect = ({ handleCloseModal }) => {
  return (
    <div
      className={`fixed top-1/4 left-1/2 w-auto transform -translate-x-1/2 bg-slate-800 p-12 rounded-lg shadow-2xl z-50`}
    >
      <h2 className={`font-three text-8xl text-white mb-8`}>Login</h2>
      <p className={`text-3xl text-white mb-8`}>
        Username or password incorrect
      </p>
      <button
        className={`${button}`}
        onClick={() => {
          handleCloseModal()
        }}
      >
        Close
      </button>
    </div>
  )
}

ModalLoginIncorrect.propTypes = {
  handleCloseModal: PropTypes.func,
}
