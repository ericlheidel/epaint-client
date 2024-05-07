import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { gradientTwo } from "../../utils.jsx"

export const Paint = ({ paint }) => {
  return (
    <div
      className={`${gradientTwo} bg-slate-200 shadow-md rounded-lg p-4 hover:scale-110 cursor-pointer`}
    >
      <Link to={`/${paint.paint_type_id}/paints/${paint.id}`}>
        <div className="flex flex-col items-center">
          <img
            src={paint.image_one}
            alt="image of paint can"
            draggable="false"
            className="w-80 h-80 object-cover rounded-lg mb-4"
          />
          <div className="text-center">
            <h3 className="text-4xl font-semibold text-gray-800">
              {paint.color}
            </h3>
            <h3 className="text-3xl text-gray-600">{paint.paint_number}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

Paint.propTypes = {
  paint: PropTypes.object,
}
