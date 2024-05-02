import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  addPaintToCart,
  getPaintById,
  updatePaint,
} from "../../data/paints.jsx"
import { getAllSizes, getSizeById } from "../../data/sizes.jsx"

export const PaintDetail = () => {
  const { paintId } = useParams()
  const [paint, setPaint] = useState({})
  const [sizes, setSizes] = useState([])
  const [selectedSize, setSelectedSize] = useState(1)
  const [correspondingPrice, setCorrespondingPrice] = useState(9.99)
  const [hexIsHidden, setHexIsHidden] = useState(true)
  const [rgbIsHidden, setRgbIsHidden] = useState(true)
  const [cmykIsHidden, setCmykIsHidden] = useState(true)
  const [updatedHex, setUpdatedHex] = useState("")
  const [updatedRgb, setUpdatedRgb] = useState("")
  const [updatedCmyk, setUpdatedCmyk] = useState("")

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

  const handleUpdateHex = (e) => {
    e.preventDefault()

    if (updatedHex !== "") {
      setHexIsHidden(true)
      updatePaint(updatedHexCode).then(() => {
        getAndSetPaintAfterUpdate(paintId)
      })
    }
  }

  const handleUpdateRgb = (e) => {
    e.preventDefault()

    if (updatedRgb !== "") {
      setRgbIsHidden(true)
      updatePaint(updatedRgbCode).then(() => {
        getAndSetPaintAfterUpdate(paintId)
      })
    }
  }

  const handleUpdateCmyk = (e) => {
    e.preventDefault()

    if (updatedCmyk !== "") {
      setCmykIsHidden(true)
      updatePaint(updatedCmykCode).then(() => {
        getAndSetPaintAfterUpdate(paintId)
      })
    }
  }

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
        <h1 className="bomber-urban mb-10 text-9xl">
          {paint.color} {paint.paint_number}
        </h1>
        <div className="flex flex-col items-center">
          <img
            src={paint.image_two}
            alt="image of front and back of paint can"
            className="w-1/2"
          />
          <div className="flex flex-row">
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
              <div className="hex flex flex-col">
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
                    className="test button"
                    onClick={handleUpdateHex}
                  >
                    Submit
                  </button>
                </form>
                <button
                  hidden={hexIsHidden}
                  className="test"
                  onClick={() => {
                    setUpdatedHex("")
                    setHexIsHidden(true)
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="rgb">
                <div className="rgb">
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
                <div>
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
                      setUpdatedRgb("")
                      setRgbIsHidden(true)
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="cmyk">
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
                <div>
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
                      setUpdatedCmyk("")
                      setCmykIsHidden(true)
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
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
