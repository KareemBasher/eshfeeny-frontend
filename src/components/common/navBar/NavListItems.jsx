import React from 'react'
import { Link } from 'react-router-dom'

const NavListItems = ({
  onGetTitle,
  onGetSubItems,
  handleShowOverlay,
  handleHideOverlay,
  onGetType,
  setCurrentPage
}) => {
  return (
    <div
      className="group relative z-20"
      onMouseOver={() => handleShowOverlay()}
      onMouseOut={() => handleHideOverlay()}
    >
      <div className="flex items-center h-12  group-hover:border-b-blue group-hover:border-b-[2px]">
        <Link
          to={
            onGetType === 'pharmacy'
              ? `/pharmacyProducts/type/${onGetTitle}`
              : `/products/type/${onGetTitle}`
          }
          onClick={() => setCurrentPage(1)}
        >
          {onGetTitle}
        </Link>
      </div>
      <div className="hidden group-hover:flex justify-start whitespace-nowrap min-w-fit h-fit absolute bg-[#FDFDFF] top-full border-t">
        <ol className="w-full text-[16px]">
          {onGetSubItems.map((subItem) => (
            <li key={subItem} className="flex justify-start items-center px-5 py-2">
              <Link
                to={
                  onGetType === 'pharmacy'
                    ? `/pharmacyProducts/type/${onGetTitle}/category/${subItem}`
                    : `/products/type/${onGetTitle}/category/${subItem}`
                }
                onClick={() => setCurrentPage(1)}
                className="hover:text-blue"
              >
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
