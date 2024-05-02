import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  getPaintsByPaintTypeId,
  getPaintsBySearchAndOrder,
} from "../../data/paints.jsx"
import { Paint } from "./Paint.jsx"
import { PaintFilterBar } from "./PaintFilterBar.jsx"

export const PaintsList = () => {
  const { paintTypeId } = useParams()

  const [paints, setPaints] = useState([])

  const [searchText, setSearchText] = useState("")
  const [orderBy, setOrderBy] = useState("")

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getPaintsByPaintTypeId(paintTypeId).then((res) => {
      setPaints(res)
    })
  }, [paintTypeId])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
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
      {isLoading ? (
        <div className="m-auto">
          <h1 className="text-5xl">Loading...</h1>
        </div>
      ) : (
        <div>
          <h2 className="w-fit ml-auto mr-auto text-5xl">
            {paintTypeId === "1"
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
            <article className="paints-container flex flex-row flex-wrap gap-20 justify-evenly">
              {paints.map((paint) => {
                return <Paint key={paint.id} paint={paint} />
              })}
            </article>
          </div>
        </div>
      )}
    </div>
  )
}
