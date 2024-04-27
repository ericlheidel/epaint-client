import { useState } from "react"

export const PaintFilterBar = ({
  setSearchText,
  setOrderBy,
  handleSearchAndOrder,
}) => {
  const [selectValue, setSelectValue] = useState("")

  return (
    <div className="flex flex-row justify-between mb-5">
      <input
        type="text"
        placeholder="Search Paints..."
        className=""
        spellCheck={false}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      />
      <div>
        {selectValue !== "" && (
          <button
            className="mr-2 test"
            onClick={() => {
              setSelectValue("")
              setOrderBy("")
              handleSearchAndOrder()
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
            handleSearchAndOrder()
          }}
        >
          <option value={""} key={0}>
            Order Paints By...
          </option>
          <option value={"color"} key={1}>
            Paint Color
          </option>
          <option value={"paint_number"} key={2}>
            Paint Number
          </option>
        </select>
      </div>
    </div>
  )
}
