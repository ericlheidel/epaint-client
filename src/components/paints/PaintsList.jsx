import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  getAllPaints,
  getPaintsByPaintTypeId,
  getPaintsBySearchAndOrder,
} from "../../data/paints.jsx"
import { getPaintTypeById } from "../../data/painttypes.jsx"
import { Paint } from "./Paint.jsx"
import { PaintFilterBar } from "./PaintFilterBar.jsx"

export const PaintsList = () => {
  const { paintTypeId } = useParams()

  const [paints, setPaints] = useState([])
  const [paintTypeName, setPaintTypeName] = useState({})

  // const [selectValue, setSelectValue] = useState("0")

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

  useEffect(() => {
    if (paintTypeId !== "all") {
      getPaintTypeById(paintTypeId).then((res) => {
        setPaintTypeName(res)
      })
    }
  }, [])

  useEffect(() => {
    getPaintsBySearchAndOrder(searchText, orderBy).then((res) => {
      setPaints(res)
    })
  }, [searchText, orderBy])

  return (
    <div>
      <h2 className="w-fit ml-auto mr-auto text-5xl">
        {paintTypeId === "all"
          ? "All Montana Paints"
          : paintTypeId === "1"
          ? "Montana Black"
          : paintTypeId === "2"
          ? "Montana Gold"
          : paintTypeId === "3"
          ? "Montana White"
          : paintTypeId === "4"
          ? "Montana Special"
          : ""}
      </h2>
      <div>
        <PaintFilterBar setSearchText={setSearchText} setOrderBy={setOrderBy} />
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
