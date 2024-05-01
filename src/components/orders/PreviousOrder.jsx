import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

export const PreviousOrder = ({ order }) => {
  const navigate = useNavigate()

  return (
    <>
      <td>{order.id}</td>
      <td>{order.number_of_items}</td>
      <td>{order.purchase_date}</td>
      <td>{order.payment.name}</td>
      <td>${order.total}</td>
      <td>
        <button
          className="test mb-3"
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
  order: PropTypes.object.isRequired,
}
