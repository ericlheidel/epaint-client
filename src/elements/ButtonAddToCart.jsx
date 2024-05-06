import PropTypes from "prop-types"

import { useState } from "react"
import { buttonNoMarginNoSize } from "../utils.jsx"
import { addPaintToCart } from "../data/paints.jsx"

export const ButtonAddToCart = ({
  paint,
  paintId,
  selectedSize,
  selectedQuantity,
}) => {
  const [showMessage, setShowMessage] = useState(false)

  const handleAddPaintToCart = () => {
    if (selectedSize && paintId) {
      setShowMessage(true)

      setTimeout(() => {
        setShowMessage(false)
      }, 500)

      for (let i = 0; i < selectedQuantity; i++) {
        addPaintToCart(paintId, selectedSize)
      }
    } else {
      setShowMessage(true)

      setTimeout(() => {
        setShowMessage(false)
      }, 500)

      for (let i = 0; i < selectedQuantity; i++) {
        addPaintToCart(paint.paint.id, paint.size.id)
      }
    }
  }

  return (
    <button
      className={`${buttonNoMarginNoSize} px-10 py-4 mx-auto w-56 add-to-cart-button`}
      onClick={handleAddPaintToCart}
    >
      Add To Cart
      {showMessage && <span className="added-to-cart">Added To Cart</span>}
    </button>
  )
}

ButtonAddToCart.propTypes = {
  paint: PropTypes.object,
  paintId: PropTypes.string,
  selectedSize: PropTypes.string,
  selectedQuantity: PropTypes.number,
}
