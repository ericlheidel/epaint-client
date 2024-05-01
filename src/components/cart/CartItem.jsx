import PropTypes from "prop-types"
import { deleteOrderPaintById } from "../../data/paints.jsx"
import { getCart } from "../../data/carts.jsx"

export const CartItem = ({ item, setCart }) => {
  return (
    <>
      <td>
        <img
          src={item.paint.image_one}
          alt="image of paint"
          className="size-12"
        />
      </td>
      <td>{item.paint.color}</td>
      <td>{item.paint.paint_number}</td>
      <td>{item.size.size}</td>
      <td>{item.size.price}</td>
      <td>
        <button
          className="test"
          onClick={() => {
            deleteOrderPaintById(item.id).then(() => {
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
  item: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
}
