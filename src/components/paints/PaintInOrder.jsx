import PropTypes from "prop-types"
// import { addPaintToCart } from "../../data/paints.jsx"
import { useNavigate } from "react-router-dom"
// import { buttonNoMarginNoSize } from "../../utils.jsx"
import { useState } from "react"
import { SelectQuantity } from "../../elements/SelectQuantity.jsx"
import { ButtonAddToCart } from "../../elements/ButtonAddToCart.jsx"

export const PaintInOrder = ({ paint }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const navigate = useNavigate()

  return (
    <>
      <td className="pb-6">
        <div className="p-2 w-40 border bg-slate-200 rounded-lg hover:cursor-pointer hover:scale-110 cursor-pointer  hover:border-x-4 hover:border-y-4 hover:rounded-lg">
          <img
            src={paint.paint.image_one}
            alt="image of paint"
            className="w-44 m-auto rounded hover:cursor-pointer hover:scale-110 cursor-pointer hover:border-x-4 hover:border-y-4 hover:rounded-lg"
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
        <div className="ml-4">
          <ButtonAddToCart paint={paint} selectedQuantity={selectedQuantity} />
          {/* <SelectQuantity setSelectedQuantity={setSelectedQuantity} /> */}
        </div>
      </td>
    </>
  )
}

PaintInOrder.propTypes = {
  paint: PropTypes.object,
}
