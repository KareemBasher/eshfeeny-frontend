import React from 'react'

const DropdownMenu = ({ items, changeSelected, handleDropDown, setCurrentPage }) => {
  const handleClick = (e) => {
    changeSelected(e.target.value)
    setCurrentPage(1)
    handleDropDown()
  }

  return (
    <div className="w-full top-full left-0 border rounded-[10px] mt-2 text-right">
      <option
        className="cursor-pointer bg-none py-3 px-3 my-2 text-[17px] border-r-[2px] border-transparent hover:border-lightBlue hover:border-r-[2px]"
        value={'كل المنتجات'}
        onClick={(e) => handleClick(e)}
      >
        كل المنتجات
      </option>
      {items.map((item) => (
        <option
          className="cursor-pointer bg-none py-3 px-3 my-2 text-[17px] border-r-[2px] border-transparent hover:border-lightBlue hover:border-r-[2px]"
          key={item}
          value={item}
          onClick={(e) => handleClick(e)}
        >
          {item}
        </option>
      ))}
    </div>
  )
}

export default DropdownMenu
