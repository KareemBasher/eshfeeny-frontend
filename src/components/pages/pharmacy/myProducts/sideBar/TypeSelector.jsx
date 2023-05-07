import React, { useState } from 'react'
import ArrowDown from '../../../../../assets/common/ArrowDown.svg'
import types from './types'
import DropdownMenu from './DropdownMenu'

const TypeSelector = ({ selectedType, changeSelectedType }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false)

  const typesList = types.map((type) => type.type)

  const handleDropDown = () => {
    setDropDownOpen(!dropDownOpen)
  }

  return (
    <div className="">
      <div
        className="w-[250px] flex justify-between cursor-pointer text-[20px] text-right p-3 border rounded-[10px]"
        onClick={() => handleDropDown()}
      >
        <div>{selectedType}</div>
        <img
          className={`pointer-events-none transition-all ${dropDownOpen && 'rotate-180'}`}
          draggable="false"
          src={ArrowDown}
          alt="Arrow"
        />
      </div>

      {dropDownOpen && (
        <DropdownMenu
          items={typesList}
          changeSelected={changeSelectedType}
          handleDropDown={handleDropDown}
        />
      )}
    </div>
  )
}

export default TypeSelector
