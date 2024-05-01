import { useEffect, useState } from "react"
import { getUserPayments } from "../../data/payments.jsx"
import PropTypes from "prop-types"
import { closeOrder } from "../../data/orders.jsx"
import { useNavigate } from "react-router-dom"

export const CompleteOrder = ({ setIsCompleteHidden, cart }) => {
  const [userPayments, setUserPayments] = useState([])
  const [selectedPayment, setSelectedPayment] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    getUserPayments().then((res) => {
      setUserPayments(res)
    })
  }, [])

  const handlePurchase = () => {
    window.alert("Thank you for your purchase!")
    closeOrder(selectedPayment, parseInt(cart.id))
    navigate("/my-orders")
  }

  return (
    <div>
      <div>
        <button
          className="mr-5 test"
          onClick={() => {
            setIsCompleteHidden(true)
          }}
        >
          Cancel
        </button>
        <select
          className="mt-5"
          onChange={(e) => {
            setSelectedPayment(parseInt(e.target.value))
          }}
        >
          <option key={0} value={0}>
            Choose a payment...
          </option>
          {userPayments.map((payment) => {
            return (
              <option key={payment.id} value={payment.id}>
                {payment.name}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"..."}
                {payment.acct_number.slice(-4)}
              </option>
            )
          })}
        </select>
        <button className="ml-5 test" onClick={handlePurchase}>
          Purchase
        </button>
      </div>
    </div>
  )
}

CompleteOrder.propTypes = {
  setIsCompleteHidden: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
}
