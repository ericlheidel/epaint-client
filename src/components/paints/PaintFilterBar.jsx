import { useState } from "react"
import PropTypes from "prop-types"
import { gradientOne } from "../../utils.jsx"

export const PaintFilterBar = ({ setSearchText, setOrderBy }) => {
  const [selectValue, setSelectValue] = useState("")

  return (
    <div className="filter-bar flex flex-row justify-between mb-5">
      <input
        type="text"
        placeholder="Search Paints..."
        className={`${gradientOne} ml-40 pt-2 pb-2 pl-5 shrink w-2/3 text-3xl rounded-full text-white placeholder-white outline-none focus:placeholder-opacity-0
        bg-gradient-to-r from-purple-500 via-pink-500 to-red-500`}
        spellCheck={false}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      />
      <div className="filter-options">
        {/* {selectValue !== "" && (
          <button
            className={`mr-5 p-3 bg-red-500 text-white rounded-xl text-3xl`}
            onClick={() => {
              setSelectValue("")
              setOrderBy("")
            }}
          >
            X
          </button>
        )} */}

        <select
          value={selectValue}
          className={` mr-12 p-2 w-80 text-3xl rounded-full text-white outline-none bg-red-500`}
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
  setSearchText: PropTypes.func,
  setOrderBy: PropTypes.func,
}
