import PropTypes from "prop-types"
import { addPaintToCart } from "../../data/paints.jsx"
import { useNavigate } from "react-router-dom"
import { buttonNoMarginNoSize } from "../../utils.jsx"
import { useState } from "react"

export const PaintInOrder = ({ paint }) => {
  const [showMessage, setShowMessage] = useState(false)

  const navigate = useNavigate()

  const handleAddPaintToCart = () => {
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 500)
    addPaintToCart(paint.paint.id, paint.size.id)
  }

  return (
    <>
      <td className="pb-6">
        <div className="p-2 border bg-slate-200 rounded-lg hover:cursor-pointer hover:scale-110 cursor-pointer  hover:border-x-4 hover:border-y-4 hover:rounded-lg">
          <img
            src={paint.paint.image_one}
            alt="image of paint"
            className="w-full m-auto rounded hover:cursor-pointer hover:scale-110 cursor-pointer hover:border-x-4 hover:border-y-4 hover:rounded-lg"
            onClick={() => {
              navigate(`/${paint.paint_type_id}/paints/${paint.paint.id}`)
            }}
          />
        </div>
      </td>
      <td className="text-4xl text-white align-middle pl-6 pb-6">
        {paint.paint.color}
      </td>
      <td className="text-4xl text-white align-middle pl-6 pb-6">
        {paint.paint.paint_number}
      </td>
      <td className="text-4xl text-white align-middle pl-6 pb-6">
        {paint.size.size}
      </td>
      <td className="text-4xl text-white align-middle pl-6 pb-6">
        ${paint.size.price}
      </td>
      <td className="align-middle pb-6">
        <button
          className={`${buttonNoMarginNoSize} px-10 py-4 ml-12 w-56 cart-button`}
          onClick={handleAddPaintToCart}
        >
          Add To Cart
          {showMessage && <span className="added-to-cart">Added To Cart</span>}
        </button>
      </td>
    </>
  )
}

PaintInOrder.propTypes = {
  paint: PropTypes.object.isRequired,
}
