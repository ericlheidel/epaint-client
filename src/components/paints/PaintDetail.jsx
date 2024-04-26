import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPaintById, updatePaint } from "../../data/paints.jsx"
import { getAllSizes } from "../../data/sizes.jsx"

export const PaintDetail = () => {
  const { paintId } = useParams()
  const [paint, setPaint] = useState({})
  const [sizes, setSizes] = useState([])
  const [selectedSize, setSelectedSize] = useState("")
  const [correspondingPrice, setCorrespondingPrice] = useState(9.99)
  const [hexIsHidden, setHexIsHidden] = useState(true)
  const [rgbIsHidden, setRgbIsHidden] = useState(true)
  const [cmykIsHidden, setCmykIsHidden] = useState(true)
  const [updatedHex, setUpdatedHex] = useState(null)
  const [updatedRgb, setUpdatedRgb] = useState(null)
  const [updatedCmyk, setUpdatedCmyk] = useState(null)

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

  const updatedHexCode = {
    id: paintId,
    hex: updatedHex,
  }

  const updatedRgbCode = {
    id: paintId,
    rgb: updatedRgb,
  }

  const updatedCmykCode = {
    id: paintId,
    cmyk: updatedCmyk,
  }

  // const handleUpdateHex = (e) => {
  //   e.preventDefault()

  //   if (updatedHex !== null) {
  //     updatePaint(updatedHexCode).then(
  //       getPaintById(paintId).then(setHexIsHidden(true))
  //     )
  //   }
  // }

  const handleUpdateHex = (e) => {
    e.preventDefault()

    if (updatedHex !== null) {
      setHexIsHidden(true)
      updatePaint(updatedHexCode).then(() => {
        getAndSetPaintAfterUpdate(paintId)
      })
    }
  }

  const handleUpdateRgb = (e) => {
    e.preventDefault()

    if (updatedRgb !== null) {
      setRgbIsHidden(true)
      updatePaint(updatedRgbCode).then(() => {
        getAndSetPaintAfterUpdate(paintId)
      })
    }
  }

  const handleUpdateCmyk = (e) => {
    e.preventDefault()

    if (updatedCmyk !== null) {
      setCmykIsHidden(true)
      updatePaint(updatedCmykCode).then(() => {
        getAndSetPaintAfterUpdate(paintId)
      })
    }
  }

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
                <button
                  hidden={!hexIsHidden}
                  className="test"
                  onClick={() => setHexIsHidden(false)}
                >
                  Add a Hex Code
                </button>
              ) : (
                `Hex: ${paint.hex}`
              )}
            </div>
            <div className="flex flex-row">
              <form>
                <input
                  hidden={hexIsHidden}
                  type="text"
                  value={updatedHex}
                  onChange={(e) => {
                    setUpdatedHex(e.target.value)
                  }}
                />
                <button
                  hidden={hexIsHidden}
                  className="test"
                  onClick={handleUpdateHex}
                >
                  Submit
                </button>
              </form>
              <button
                hidden={hexIsHidden}
                className="test"
                onClick={() => {
                  setUpdatedHex(null)
                  setHexIsHidden(true)
                }}
              >
                Cancel
              </button>
            </div>
            <div>
              {paint.rgb == null ? (
                <button
                  hidden={!rgbIsHidden}
                  className="test"
                  onClick={() => setRgbIsHidden(false)}
                >
                  Add an RGB Code
                </button>
              ) : (
                `RGB: ${paint.rgb}`
              )}
            </div>
            <div className="flex flex-row">
              <form>
                <input
                  hidden={rgbIsHidden}
                  type="text"
                  value={updatedRgb}
                  onChange={(e) => {
                    setUpdatedRgb(e.target.value)
                  }}
                />
                <button
                  hidden={rgbIsHidden}
                  className="test"
                  onClick={handleUpdateRgb}
                >
                  Submit
                </button>
              </form>
              <button
                hidden={rgbIsHidden}
                className="test"
                onClick={() => {
                  setUpdatedRgb(null)
                  setRgbIsHidden(true)
                }}
              >
                Cancel
              </button>
            </div>
            <div>
              {paint.cmyk == null ? (
                <button
                  hidden={!cmykIsHidden}
                  className="test"
                  onClick={() => setCmykIsHidden(false)}
                >
                  Add a CMYK Code
                </button>
              ) : (
                `CMYK: ${paint.cmyk}`
              )}
            </div>
            <div className="flex flex-row">
              <form>
                <input
                  hidden={cmykIsHidden}
                  type="text"
                  value={updatedCmyk}
                  onChange={(e) => {
                    setUpdatedCmyk(e.target.value)
                  }}
                />
                <button
                  hidden={cmykIsHidden}
                  className="test"
                  onClick={handleUpdateCmyk}
                >
                  Submit
                </button>
              </form>
              <button
                hidden={cmykIsHidden}
                className="test"
                onClick={() => {
                  setUpdatedCmyk(null)
                  setCmykIsHidden(true)
                }}
              >
                Cancel
              </button>
            </div>
            <select
              className="test"
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
              <button className="test">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
