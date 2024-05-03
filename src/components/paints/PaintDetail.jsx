import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addPaintToCart, getPaintById } from "../../data/paints.jsx"
import { getAllSizes, getSizeById } from "../../data/sizes.jsx"
import { HexEdit } from "./color_edits/Hex.jsx"
import { RgbEdit } from "./color_edits/Rgb.jsx"
import { CmykEdit } from "./color_edits/Cmyk.jsx"

export const PaintDetail = () => {
  const { paintId } = useParams()
  const [paint, setPaint] = useState({})
  const [sizes, setSizes] = useState([])
  const [selectedSize, setSelectedSize] = useState(1)
  const [correspondingPrice, setCorrespondingPrice] = useState(9.99)

  const navigate = useNavigate()

  const getAndSetPaintAfterUpdate = () => {
    getPaintById(paintId).then((res) => {
      setPaint(res)
    })
  }

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

  const handleAddPaintToCart = () => {
    addPaintToCart(paintId, selectedSize).then(navigate("/cart"))
  }

  useEffect(() => {
    if (selectedSize !== 0) {
      getSizeById(parseInt(selectedSize)).then((res) => {
        setCorrespondingPrice(res.price)
      })
    }
  }, [selectedSize])

  return (
    <div>
      <div>
        <h1 className="font-two mb-10 text-9xl">
          {paint.color} - {paint.paint_number}
        </h1>
        <div className="flex flex-col items-center">
          <img
            src={paint.image_two}
            alt="image of front and back of paint can"
            className="w-1/3 border rounded-3xl"
          />
          <div className="flex flex-row mb-10">
            <HexEdit
              paint={paint}
              paintId={paintId}
              getAndSetPaintAfterUpdate={getAndSetPaintAfterUpdate}
            />
            <RgbEdit
              paint={paint}
              paintId={paintId}
              getAndSetPaintAfterUpdate={getAndSetPaintAfterUpdate}
            />
            <CmykEdit
              paint={paint}
              paintId={paintId}
              getAndSetPaintAfterUpdate={getAndSetPaintAfterUpdate}
            />
          </div>
          <div className="test">
            <h3>Please choose a size...</h3>
            <select
              className="test"
              onChange={(e) => {
                setSelectedSize(e.target.value)
              }}
            >
              {sizes.map((size) => {
                return (
                  <option key={size.id} value={size.id}>
                    {size.size}
                  </option>
                )
              })}
            </select>
            <div>${correspondingPrice}</div>
            <div>
              <button className="test" onClick={handleAddPaintToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
