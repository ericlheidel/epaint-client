import { Link } from "react-router-dom"

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
            <div className="text-2xl test">{paint.color}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
