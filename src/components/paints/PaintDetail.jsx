import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPaintById } from "../../data/paints.jsx"
import { getAllSizes, getSizeById } from "../../data/sizes.jsx"
import { HexEdit } from "./color_edits/Hex.jsx"
import { RgbEdit } from "./color_edits/Rgb.jsx"
import { CmykEdit } from "./color_edits/Cmyk.jsx"
import { buttonNoMarginNoSize, gradientOne } from "../../utils.jsx"
import { SelectQuantity } from "../../elements/SelectQuantity.jsx"
import { ButtonAddToCart } from "../../elements/ButtonAddToCart.jsx"

export const PaintDetail = () => {
  const { paintId } = useParams()
  const [paint, setPaint] = useState({})
  const [sizes, setSizes] = useState([])
  const [selectedSize, setSelectedSize] = useState("1")
  const [correspondingPrice, setCorrespondingPrice] = useState(9.99)
  const [selectedQuantity, setSelectedQuantity] = useState(1)

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
          <div className={`${gradientOne} p-12 rounded-xl shadow-2xl`}>
            <h3 className="font-three text-8xl mb-6 text-white text-center">
              Please choose a size...
            </h3>
            <select
              className={`${gradientOne} ml-20 mr-20 p-2 w-80 text-3xl rounded-full text-white outline outline-slate-700`}
              onChange={(e) => {
                setSelectedSize(e.target.value)
              }}
            >
              {sizes.map((size) => {
                return (
                  <option
                    key={size.id}
                    value={size.id}
                    className="text-6xl mb-6 text-white text-center"
                  >
                    {size.size}
                  </option>
                )
              })}
            </select>
            <div className="font-three text-6xl mb-6 mt-6 text-white text-center">
              ${correspondingPrice}
            </div>
            <div className="flex flex-col">
              <ButtonAddToCart
                paint={paint}
                paintId={paintId}
                selectedSize={selectedSize}
                selectedQuantity={selectedQuantity}
              />
              <SelectQuantity setSelectedQuantity={setSelectedQuantity} />
              <button
                className={`${buttonNoMarginNoSize} px-10 py-4 mt-4 mx-auto w-56`}
                onClick={() => {
                  navigate("/cart")
                }}
              >
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
