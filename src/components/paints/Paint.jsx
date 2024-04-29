import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export const Paint = ({ paint, paintTypeId }) => {
  return (
    <div>
      <Link to={`/${paintTypeId}/paints/${paint.id}`}>
        <div>
          <img
            src={paint.image_one}
            alt="image of paint can"
            className="size-44"
          />
          <div className="flex flex-wrap justify-center h-auto">
            <div className="text-2xl test">
              <h3>{paint.color}</h3>
              <h3>{paint.paint_number}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

Paint.propTypes = {
  paint: PropTypes.object.isRequired,
  paintTypeId: PropTypes.string.isRequired,
}
