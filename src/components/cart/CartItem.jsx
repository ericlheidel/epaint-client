import PropTypes from "prop-types"
import { deleteOrderPaintById } from "../../data/paints.jsx"
import { getCart } from "../../data/carts.jsx"
import { useNavigate } from "react-router-dom"

export const CartItem = ({ paint, setCart }) => {
  const navigate = useNavigate()
  return (
    <>
      <td>
        <img
          src={paint.paint.image_one}
          alt="image of paint"
          className="size-44 m-auto rounded-lg hover:cursor-pointer hover:scale-110 cursor-pointer"
          onClick={() => {
            navigate(`/${paint.paint_type_id}/paints/${paint.paint.id}`)
          }}
        />
      </td>
      <td>{paint.paint.color}</td>
      <td>{paint.paint.paint_number}</td>
      <td>{paint.size.size}</td>
      <td>{paint.size.price}</td>
      <td>
        <button
          className="flex text-white bg-blue-700 border-0 py-2 px-5 focus:outline-none hover:bg-blue-500 rounded"
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
