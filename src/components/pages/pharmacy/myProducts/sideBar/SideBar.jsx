import React from 'react'
import TypeSelector from './TypeSelector'

const SideBar = ({ selectedType, changeSelectedType }) => {
  return (
    <div className="mt-4 ml-1">
      <TypeSelector changeSelectedType={changeSelectedType} selectedType={selectedType} />
    </div>
  )
}

export default SideBar
