import React, { useState } from 'react'
import NavList from './NavList'

const NavListContainer = ({ onGetType, setCurrentPage }) => {
  const [black, setBlack] = useState(false)

  const handleShowOverlay = () => {
    setBlack(true)
  }

  const handleHideOverlay = () => {
    setBlack(false)
  }

  return (
    <div>
      <div className="border-y w-full relative bg-[#fdfdff] z-20">
        <NavList
          handleShowOverlay={handleShowOverlay}
          handleHideOverlay={handleHideOverlay}
          onGetType={onGetType}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div
        className={`${black ? 'fixed' : 'hidden'} inset-0 bg-black opacity-50 h-full w-full z-10`}
      ></div>
    </div>
  )
}

export default NavListContainer
