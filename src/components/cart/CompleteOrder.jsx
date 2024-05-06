import { useEffect, useState } from "react"
import { getUserPayments } from "../../data/payments.jsx"
import PropTypes from "prop-types"
import { closeOrder } from "../../data/orders.jsx"
import { useNavigate } from "react-router-dom"
import { button, getTodaysDate, gradientOne } from "../../utils.jsx"
import { ModalMustSelectPayment } from "../../elements/modals/ModalMustSelectPAyment.jsx"
import { Backdrop } from "../../elements/Backdrop.jsx"

export const CompleteOrder = ({ setIsCompleteHidden, cart }) => {
  const [userPayments, setUserPayments] = useState([])
  const [selectedPayment, setSelectedPayment] = useState(0)

  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getUserPayments().then((res) => {
      setUserPayments(res)
    })
  }, [])

  const handlePurchase = () => {
    if (!selectedPayment) {
      setShowModal(true)
    } else {
      const closedOrder = {
        payment_type_id: selectedPayment,
        purchase_date: getTodaysDate(),
      }
      closeOrder(closedOrder, parseInt(cart.id)).then(navigate("/my-orders"))
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      {showModal && (
        <ModalMustSelectPayment handleCloseModal={handleCloseModal} />
      )}
      {showModal && <Backdrop />}
      <div>
        <button className={`${button}`} onClick={handlePurchase}>
          Purchase
        </button>
        <select
          className={`${gradientOne} ml-20 mr-20 p-2 w-80 text-3xl rounded-full text-white outline outline-slate-700`}
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
        <button
          className={`${button}`}
          onClick={() => {
            setIsCompleteHidden(true)
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

CompleteOrder.propTypes = {
  setIsCompleteHidden: PropTypes.func,
  cart: PropTypes.object,
}
