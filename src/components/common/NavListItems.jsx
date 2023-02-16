import React from 'react'
import { Link } from 'react-router-dom'

const NavListItems = ({
  onGetPath,
  onGetTitle,
  onGetSubItems,
  handleShowOverlay,
  handleHideOverlay
}) => {
  return (
    <div
      className="group relative z-20"
      onMouseOver={() => handleShowOverlay()}
      onMouseOut={() => handleHideOverlay()}
    >
      <div className="flex items-center h-12  group-hover:border-b-blue group-hover:border-b-[2px]">
        <Link to={onGetPath}>{onGetTitle}</Link>
      </div>
      <div className="hidden group-hover:flex justify-start whitespace-nowrap min-w-fit h-fit absolute bg-[#FDFDFF] top-full border-t">
        <ol className="w-full text-[16px]">
          {onGetSubItems.map((subItem) => (
            <li key={subItem} className="flex justify-start items-center px-5 py-2">
              <Link to={`/products/category/${subItem}`} className="hover:text-blue">
                {subItem}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default NavListItems
