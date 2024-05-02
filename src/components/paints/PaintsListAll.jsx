import { useEffect, useState } from "react"
import { getAllPaints, getPaintsBySearchAndOrder } from "../../data/paints.jsx"
import { PaintFilterBar } from "./PaintFilterBar.jsx"
import { Paint } from "./Paint.jsx"

export const PaintsListAll = () => {
  const [allPaints, setAllPaints] = useState([])
  const [searchText, setSearchText] = useState("")
  const [orderBy, setOrderBy] = useState("")

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllPaints().then((res) => {
      setAllPaints(res)
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleSearchAndOrder = () => {
    getPaintsBySearchAndOrder(searchText, orderBy, "").then((res) => {
      setAllPaints(res)
    })
  }

  useEffect(() => {
    getPaintsBySearchAndOrder(searchText, orderBy, "").then((res) => {
      setAllPaints(res)
    })
  }, [searchText, orderBy])

  return (
    <div>
      {isLoading ? (
        <div className="m-auto p-">
          <h1 className="bomber-urban text-9xl">Loading...</h1>
        </div>
      ) : (
        <>
          <div>
            <div>
              <div>
                <h2 className="bomber-urban mb-5 w-fit ml-auto mr-auto text-9xl">
                  All Montana Paints
                </h2>
                <PaintFilterBar
                  setSearchText={setSearchText}
                  setOrderBy={setOrderBy}
                  handleSearchAndOrder={handleSearchAndOrder}
                />
                <div className="bg-slate-300 h-16 mb-10 mt-10"></div>
              </div>
            </div>
            <article className="paints-container flex flex-row flex-wrap gap-20 justify-evenly">
              {allPaints.map((paint) => {
                return <Paint key={paint.id} paint={paint} />
              })}
            </article>
          </div>
        </>
      )}
    </div>
  )
}
