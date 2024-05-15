import PropTypes from "prop-types"
import { useState } from "react"
import { updatePaint } from "../../../data/paints.jsx"
import {
  button,
  buttonNoMarginNoSize,
  gradientOne,
  inputWhiteText,
} from "../../../utils.jsx"

export const HexEdit = ({
  paint,
  paintId,
  getAndSetPaintAfterUpdate,
  setShowModal,
  setCode,
  setModalMessage,
}) => {
  const [hexIsHidden, setHexIsHidden] = useState(true)
  const [updatedHex, setUpdatedHex] = useState("")

  const handleUpdateHex = (e) => {
    e.preventDefault()

    const hexCodeFormat = /^#[0-9A-F]{6}$/i

    const updatedHexCode = {
      id: paintId,
      hex: updatedHex,
    }

    if (updatedHex === "") {
      setCode("Hex")
      setModalMessage("Please enter a Hex Code...")
      setShowModal(true)
    } else {
      if (!hexCodeFormat.test(updatedHex)) {
        setCode("Hex")
        setModalMessage("Please enter a valid Hex code: #FFFFFF")
        setShowModal(true)
      } else {
        setHexIsHidden(true)
        updatePaint(updatedHexCode).then(() => {
          getAndSetPaintAfterUpdate(paintId)
        })
      }
    }
  }

  return (
    <>
      <div className="mb-9">
        {paint.hex == null ? (
          <button
            hidden={!hexIsHidden}
            className={`${button} mb-8 mt-6`}
            onClick={() => setHexIsHidden(false)}
          >
            Add a Hex Code
          </button>
        ) : (
          <button
            hidden={!hexIsHidden}
            className={`${button} mb-8 mt-6 ${gradientOne}`}
            onClick={() => {
              setHexIsHidden(false)
              if (paint.hex) {
                setUpdatedHex(paint.hex)
              }
            }}
          >
            {`Hex: ${paint.hex}`}
          </button>
        )}
      </div>
      <div className="flex flex-col mr-5">
        <form>
          <input
            hidden={hexIsHidden}
            type="text"
            placeholder="Enter a Hex Code..."
            value={updatedHex}
            className={`${inputWhiteText} ${gradientOne} mt-6`}
            onChange={(e) => {
              setUpdatedHex(e.target.value)
            }}
          />
          <div className="mt-4">
            <button
              hidden={hexIsHidden}
              className={`${buttonNoMarginNoSize} p-4`}
              onClick={handleUpdateHex}
            >
              Submit
            </button>
            <button
              hidden={hexIsHidden}
              className={`${buttonNoMarginNoSize} p-4 ml-5`}
              onClick={(e) => {
                e.preventDefault()
                setUpdatedHex("")
                setHexIsHidden(true)
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

HexEdit.propTypes = {
  paint: PropTypes.object,
  paintId: PropTypes.string,
  getAndSetPaintAfterUpdate: PropTypes.func,
  setShowModal: PropTypes.func,
  setCode: PropTypes.func,
  setModalMessage: PropTypes.func,
}
