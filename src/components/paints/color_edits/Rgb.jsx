import PropTypes from "prop-types"
import { useState } from "react"
import { updatePaint } from "../../../data/paints.jsx"
import {
  button,
  buttonNoMarginNoSize,
  gradientOne,
  inputWhiteText,
} from "../../../utils.jsx"

export const RgbEdit = ({ paint, paintId, getAndSetPaintAfterUpdate }) => {
  const [rgbIsHidden, setRgbIsHidden] = useState(true)
  const [updatedRgb, setUpdatedRgb] = useState("")

  const handleUpdateRgb = (e) => {
    e.preventDefault()

    const rgbCodeFormat =
      /^R(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d?)\sG(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d?)\sB(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d?)$/

    const updatedRgbCode = {
      id: paintId,
      rgb: updatedRgb,
    }

    if (updatedRgb === "") {
      window.alert("Please enter an RGB code...")
    } else {
      if (!rgbCodeFormat.test(updatedRgb)) {
        window.alert("Please enter a valid RGB code...\ni.e. R255 G255 B255")
      } else {
        setRgbIsHidden(true)
        updatePaint(updatedRgbCode).then(() => {
          getAndSetPaintAfterUpdate(paintId)
        })
      }
    }
  }

  return (
    <>
      <div className="mb-9">
        {paint.rgb == null ? (
          <button
            hidden={!rgbIsHidden}
            className={`${button} ml-5 mb-8 mt-6`}
            onClick={() => setRgbIsHidden(false)}
          >
            Add an RGB Code
          </button>
        ) : (
          <button
            hidden={!rgbIsHidden}
            className={`${button} ml-5 mb-8 mt-6 ${gradientOne}`}
            onClick={() => {
              setRgbIsHidden(false)
              if (paint.rgb) {
                setUpdatedRgb(paint.rgb)
              }
            }}
          >
            {`RGB: ${paint.rgb}`}
          </button>
        )}
      </div>
      <div className="flex flex-col mr-5">
        <form>
          <input
            hidden={rgbIsHidden}
            type="text"
            placeholder="Enter an RGB Code..."
            value={updatedRgb}
            className={`${inputWhiteText} ${gradientOne} mt-6`}
            onChange={(e) => {
              setUpdatedRgb(e.target.value)
            }}
          />
          <div className="mt-4">
            <button
              hidden={rgbIsHidden}
              className={`${buttonNoMarginNoSize} p-4`}
              onClick={handleUpdateRgb}
            >
              Submit
            </button>
            <button
              hidden={rgbIsHidden}
              className={`${buttonNoMarginNoSize} p-4 ml-5`}
              onClick={(e) => {
                e.preventDefault()
                setUpdatedRgb("")
                setRgbIsHidden(true)
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

RgbEdit.propTypes = {
  paint: PropTypes.object,
  paintId: PropTypes.string,
  getAndSetPaintAfterUpdate: PropTypes.func,
}
