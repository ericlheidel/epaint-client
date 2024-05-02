import { useState } from "react"
import PropTypes from "prop-types"

export const PaintFilterBar = ({ setSearchText, setOrderBy }) => {
  const [selectValue, setSelectValue] = useState("")

  return (
    <div className="filter-bar flex flex-row justify-between mb-5">
      <input
        type="text"
        placeholder="Search Paints..."
        className=""
        spellCheck={false}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      />
      <div className="filter-options">
        {selectValue !== "" && (
          <button
            className="mr-2 test"
            onClick={() => {
              setSelectValue("")
              setOrderBy("")
            }}
          >
            X
          </button>
        )}

        <select
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value)
            setOrderBy(e.target.value)
          }}
        >
          <option value={""} key={0}>
            Order Paints By...
          </option>
          <option value={"color"} key={1}>
            Paint Name
          </option>
          <option value={"paint_number"} key={2}>
            Paint Number
          </option>
        </select>
      </div>
    </div>
  )
}

PaintFilterBar.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  setOrderBy: PropTypes.func.isRequired,
}
