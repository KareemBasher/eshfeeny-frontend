import React, { useState } from 'react'
import ArrowDown from '../../../../../assets/common/ArrowDown.svg'
import types from './types'

const CategorySelector = () => {
  const [selectedType, setSelectedType] = useState('كل المنتجات')

  return (
    <div className="flex justify-between relative w-[250px] text-[20px] text-right p-3 border rounded-[10px]">
      <div>{selectedType}</div>
      <img draggable="false" src={ArrowDown} alt="Arrow" />
    </div>
  )
}

export default CategorySelector
