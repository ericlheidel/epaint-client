import PropTypes from "prop-types"
import { useState } from "react"
import { updatePaint } from "../../../data/paints.jsx"
import {
  button,
  buttonNoMarginNoSize,
  gradientOne,
  inputWhiteText,
} from "../../../utils.jsx"

export const CmykEdit = ({
  paint,
  paintId,
  getAndSetPaintAfterUpdate,
  setShowModal,
  setCode,
  setModalMessage,
}) => {
  const [cmykIsHidden, setCmykIsHidden] = useState(true)
  const [updatedCmyk, setUpdatedCmyk] = useState("")

  const handleUpdateCmyk = (e) => {
    e.preventDefault()

    const cmykCodeFormat =
      /^(C|M|Y|K)(100|[1-9]?[0-9])\s(C|M|Y|K)(100|[1-9]?[0-9])\s(C|M|Y|K)(100|[1-9]?[0-9])\s(C|M|Y|K)(100|[1-9]?[0-9])$/

    const updatedCmykCode = {
      id: paintId,
      cmyk: updatedCmyk,
    }

    if (updatedCmyk === "") {
      setCode("CMYK")
      setModalMessage("Please enter a CMYK code...")
      setShowModal(true)
    } else {
      if (!cmykCodeFormat.test(updatedCmyk)) {
        setCode("CMYK")
        setModalMessage(
          "Please enter a valid CMYK code: C(1-100) M(1-100) Y(1-100) K(1-100)"
        )
        setShowModal(true)
      } else {
        setCmykIsHidden(true)
        updatePaint(updatedCmykCode).then(() => {
          getAndSetPaintAfterUpdate(paintId)
        })
      }
    }
  }

  return (
    <>
      <div className="mb-9">
        {paint.cmyk == null ? (
          <button
            hidden={!cmykIsHidden}
            className={`${button} ml-5 mb-8 mt-6`}
            onClick={() => setCmykIsHidden(false)}
          >
            Add a CMYK Code
          </button>
        ) : (
          <button
            hidden={!cmykIsHidden}
            className={`${button} ml-5 mb-8 mt-6 ${gradientOne}`}
            onClick={() => {
              setCmykIsHidden(false)
              if (paint.cmyk) {
                setUpdatedCmyk(paint.cmyk)
              }
            }}
          >
            {`CMYK: ${paint.cmyk}`}
          </button>
        )}
      </div>
      <div className="flex flex-col mr-5">
        <form>
          <input
            hidden={cmykIsHidden}
            type="text"
            placeholder="Enter a CMYK Code..."
            value={updatedCmyk}
            className={`${inputWhiteText} ${gradientOne} mt-6`}
            onChange={(e) => {
              setUpdatedCmyk(e.target.value)
            }}
          />
          <div className="mt-4">
            <button
              hidden={cmykIsHidden}
              className={`${buttonNoMarginNoSize} p-4`}
              onClick={handleUpdateCmyk}
            >
              Submit
            </button>
            <button
              hidden={cmykIsHidden}
              className={`${buttonNoMarginNoSize} p-4 ml-5`}
              onClick={(e) => {
                e.preventDefault()
                setUpdatedCmyk("")
                setCmykIsHidden(true)
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

CmykEdit.propTypes = {
  paint: PropTypes.object,
  paintId: PropTypes.string,
  getAndSetPaintAfterUpdate: PropTypes.func,
  setShowModal: PropTypes.func,
  setCode: PropTypes.func,
  setModalMessage: PropTypes.func,
}
