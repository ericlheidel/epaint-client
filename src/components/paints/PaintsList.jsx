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
          <h1 className="bomber-urban text-9xl">Loading...</h1>
        </div>
      ) : (
        <div>
          <h2 className="bomber-urban mb-5 w-fit ml-auto mr-auto text-9xl">
            {paintTypeId === "1"
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
            <PaintFilterBar
              setSearchText={setSearchText}
              setOrderBy={setOrderBy}
              handleSearchAndOrder={handleSearchAndOrder}
            />
            <div className="bg-slate-300 h-16 mb-10 mt-10"></div>
            <article className="ml-10 mr-10 flex flex-row flex-wrap gap-20 justify-evenly">
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
