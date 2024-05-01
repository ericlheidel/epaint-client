import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export const Paint = ({ paint }) => {
  return (
    <div>
      <Link to={`/${paint.paint_type_id}/paints/${paint.id}`}>
        <div>
          <img
            src={paint.image_one}
            alt="image of paint can"
            className="size-44"
          />
          <div className="flex flex-wrap justify-center h-auto">
            <div>
              <h3 className="text-2xl test">{paint.color}</h3>
              <h3 className="text-2xl test">{paint.paint_number}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

Paint.propTypes = {
  paint: PropTypes.object.isRequired,
}
