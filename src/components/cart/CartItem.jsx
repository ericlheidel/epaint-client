import PropTypes from "prop-types"
import { deleteOrderPaintById } from "../../data/paints.jsx"
import { getCart } from "../../data/carts.jsx"
import { useNavigate } from "react-router-dom"
import { buttonNoMarginNoSize } from "../../utils.jsx"

export const CartItem = ({ paint, setCart }) => {
  const navigate = useNavigate()
  return (
    <>
      <td className="pb-6">
        <div className="border border-black rounded-lg border-x-4 border-y-4">
          <img
            src={paint.paint.image_one}
            alt="image of paint"
            className="size-44 m-auto rounded hover:cursor-pointer hover:scale-110 cursor-pointer hover:border hover:border-black hover:border-x-4 hover:border-y-4 hover:rounded-lg"
            onClick={() => {
              navigate(`/${paint.paint_type_id}/paints/${paint.paint.id}`)
            }}
          />
        </div>
      </td>
      <td className="text-4xl text-white align-middle pb-6">
        {paint.paint.color}
      </td>
      <td className="text-4xl text-white align-middle pb-6">
        {paint.paint.paint_number}
      </td>
      <td className="text-4xl text-white align-middle pb-6">
        {paint.size.size}
      </td>
      <td className="text-4xl text-white align-middle pb-6">
        ${paint.size.price}
      </td>
      <td className="align-middle pb-6">
        <button
          className={`${buttonNoMarginNoSize} px-10 py-4 ml-12`}
          onClick={() => {
            deleteOrderPaintById(paint.id).then(() => {
              getCart().then((res) => {
                setCart(res)
              })
            })
          }}
        >
          Remove
        </button>
      </td>
    </>
  )
}

CartItem.propTypes = {
  paint: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
}
