import React from 'react'

const DopdownMenu = ({ items, changeSelected }) => {
  return (
    <div className="w-full top-full left-0 border rounded-[10px] mt-2 text-right">
      <option
        className="cursor-pointer bg-none py-3 px-3 my-2 text-[17px] border-r-[2px] border-transparent hover:border-lightBlue hover:border-r-[2px]"
        value={'كل المنتجات'}
        onClick={(e) => changeSelected(e.target.value)}
      >
        كل المنتجات
      </option>
      {items.map((item) => (
        <option
          className="cursor-pointer bg-none py-3 px-3 my-2 text-[17px] border-r-[2px] border-transparent hover:border-lightBlue hover:border-r-[2px]"
          key={item}
          value={item}
          onClick={(e) => changeSelected(e.target.value)}
        >
          {item}
        </option>
      ))}
    </div>
  )
}

export default DopdownMenu
