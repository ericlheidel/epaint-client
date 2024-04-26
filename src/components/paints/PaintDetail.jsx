import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPaintById } from "../../data/paints.jsx"
import { getAllSizes } from "../../data/sizes.jsx"

export const PaintDetail = () => {
  const { paintId } = useParams()
  const [paint, setPaint] = useState({})
  const [sizes, setSizes] = useState([])
  const [selectedSize, setSelectedSize] = useState("")
  const [correspondingPrice, setCorrespondingPrice] = useState(9.99)

  useEffect(() => {
    if (paintId) {
      getPaintById(paintId).then((res) => {
        setPaint(res)
      })
    }
  }, [paintId])

  useEffect(() => {
    getAllSizes().then((res) => {
      setSizes(res)
    })
  }, [])

  return (
    <div>
      <div>
        <div className="flex flex-row">
          <img
            src={paint.image_two}
            alt="image of front and back of paint can"
            className="size-96"
          />
          <div className="info-div">
            Paint Information:
            <div>Color: {paint.color}</div>
            <div>Paint Number: {paint.paint_number}</div>
            <div>
              {paint.hex == null ? (
                <button className="border border-solid border-red-700">
                  Add a Hex Code
                </button>
              ) : (
                `Hex Code: ${paint.hex}`
              )}
            </div>
            <div>
              {paint.rgb == null ? (
                <button className="border border-solid border-red-700">
                  Add a RGB Code
                </button>
              ) : (
                `RGB Code: ${paint.rgb}`
              )}
            </div>
            <div>
              {paint.cmyk == null ? (
                <button className="border border-solid border-red-700">
                  Add a CMYK Code
                </button>
              ) : (
                `CMYK Code: ${paint.cmyk}`
              )}
            </div>
            <select
              onChange={(e) => {
                setSelectedSize(e.target.key)
                setCorrespondingPrice(e.target.value)
              }}
            >
              {sizes.map((size) => {
                return (
                  <option key={size.id} value={size.price}>
                    {size.size}
                  </option>
                )
              })}
            </select>
            <div>${correspondingPrice}</div>
            <div>
              <button className="border border-solid border-red-700">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
