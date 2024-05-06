import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { buttonNoMarginNoSize } from "../../utils.jsx"

export const PreviousOrder = ({ order }) => {
  const navigate = useNavigate()

  return (
    <>
      <td className="text-4xl text-white font-bold align-middle pb-6">
        #{order.id}
      </td>
      <td className="text-4xl text-white align-middle pb-6">
        {order.number_of_items}
      </td>
      <td className="text-4xl text-white align-middle pb-6">
        {order.purchase_date}
      </td>
      <td className="text-4xl text-white align-middle pb-6">
        {order.payment.name}
        {" ..."}
        {order.payment.the_last_four_numbers}
      </td>
      <td className="text-4xl text-white align-middle pb-6">${order.total}</td>
      <td>
        <button
          className={`${buttonNoMarginNoSize} px-8 py-4 ml-12 w-64`}
          onClick={() => {
            navigate(`/my-orders/${order.id}`)
          }}
        >
          View Order
        </button>
      </td>
    </>
  )
}

PreviousOrder.propTypes = {
  order: PropTypes.object,
}
