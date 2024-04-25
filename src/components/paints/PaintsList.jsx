import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllPaints, getPaintsByPaintTypeId } from "../../data/paints.jsx"
import { getPaintTypeById } from "../../data/painttypes.jsx"
import { Paint } from "./Paint.jsx"

export const PaintsList = () => {
  const { paintTypeId } = useParams()

  const [paints, setPaints] = useState([])
  const [paintTypeName, setPaintTypeName] = useState({})

  useEffect(() => {
    if (paintTypeId == "all") {
      getAllPaints()
        .then((res) => {
          setPaints(res)
        })
        .then(setPaintTypeName("All Paints"))
    } else {
      getPaintsByPaintTypeId(paintTypeId).then((res) => {
        setPaints(res)
      })
    }
  }, [paintTypeId])

  useEffect(() => {
    if (paintTypeId) {
      getPaintTypeById(paintTypeId).then((res) => {
        setPaintTypeName(res)
      })
    }
  }, [])

  return (
    <div>
      <h2 className="w-fit ml-auto mr-auto text-5xl">
        {paintTypeId === "all"
          ? "All Montana Paints"
          : `Montana ${paintTypeName.name}`}
      </h2>
      <div>
        <article className="flex flex-row flex-wrap gap-20 justify-evenly">
          {paints.map((paint) => {
            return (
              <Paint
                key={paint.id}
                paint={paint}
                paintTypeId={paintTypeId}
                paintTypeName={paintTypeName}
              />
            )
          })}
        </article>
      </div>
    </div>
  )
}
