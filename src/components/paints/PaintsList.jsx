import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  getAllPaints,
  getPaintsByPaintTypeId,
  getPaintsBySearchAndOrder,
} from "../../data/paints.jsx"
import { Paint } from "./Paint.jsx"
import { PaintFilterBar } from "./PaintFilterBar.jsx"

export const PaintsList = () => {
  const { paintTypeId } = useParams()

  const [paints, setPaints] = useState([])
  const [paintTypeName, setPaintTypeName] = useState({})

  const [searchText, setSearchText] = useState("")
  const [orderBy, setOrderBy] = useState("")

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

  const handleSearchAndOrder = () => {
    getPaintsBySearchAndOrder(searchText, orderBy, paintTypeId).then((res) => {
      setPaints(res)
    })
  }

  useEffect(() => {
    getPaintsBySearchAndOrder(searchText, orderBy, paintTypeId).then((res) => {
      setPaints(res)
    })
  }, [searchText, orderBy, paintTypeId])

  return (
    <div>
      <h2 className="w-fit ml-auto mr-auto text-5xl">
        {paintTypeId === "all"
          ? `All Montana Paints (${paints.length})`
          : paintTypeId === "1"
          ? `Montana Black (${paints.length})`
          : paintTypeId === "2"
          ? `Montana Gold (${paints.length})`
          : paintTypeId === "3"
          ? `Montana White (${paints.length})`
          : paintTypeId === "4"
          ? `Montana Special (${paints.length})`
          : ""}
      </h2>
      <div>
        <PaintFilterBar
          setSearchText={setSearchText}
          setOrderBy={setOrderBy}
          handleSearchAndOrder={handleSearchAndOrder}
        />
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
