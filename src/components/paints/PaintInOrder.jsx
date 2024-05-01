import PropTypes from "prop-types"
import { addPaintToCart } from "../../data/paints.jsx"

export const PaintInOrder = ({ paint }) => {
  const handleAddPaintToCart = () => {
    addPaintToCart(paint.paint.id, paint.size.id)
  }

  return (
    <div>
      <div>
        <img
          src={paint.paint.image_one}
          alt="image of paint can"
          className="size-44 m-auto rounded-lg hover:cursor-pointer hover:scale-110"
        />
        <div>
          <h3 className="text-2xl font-bold test">{paint.paint.color}</h3>
          <h3 className="text-2xl font-bold test">
            {paint.paint.paint_number}
          </h3>
          <h3 className="text-xl test">{paint.size.size}</h3>
          <h3 className="text-xl test">${paint.size.price}</h3>
          <button className="test" onClick={handleAddPaintToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

PaintInOrder.propTypes = {
  paint: PropTypes.object.isRequired,
}
