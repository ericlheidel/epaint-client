import PropTypes from "prop-types"

export const SelectQuantity = ({ setSelectedQuantity }) => {
  return (
    <select
      className={`mx-auto mt-4 p-2 w-56 text-3xl rounded-full text-center text-black outline-none`}
      onChange={(e) => {
        setSelectedQuantity(parseInt(e.target.value))
      }}
    >
      <option key={1} value={1}>
        1
      </option>
      <option key={2} value={2}>
        2
      </option>
      <option key={3} value={3}>
        3
      </option>
      <option key={4} value={4}>
        4
      </option>
      <option key={5} value={5}>
        5
      </option>
    </select>
  )
}

SelectQuantity.propTypes = {
  setSelectedQuantity: PropTypes.func,
}
