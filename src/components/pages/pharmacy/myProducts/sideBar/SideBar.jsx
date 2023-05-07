import React from 'react'
import TypeSelector from './TypeSelector'
import CategorySelector from './CategorySelector'
import FilterIcon from '../../../../../assets/pharmacyProducts/FilterIcon.svg'

const SideBar = ({
  selectedType,
  selectedCategories,
  changeSelectedType,
  changeSelectedCategories
}) => {
  return (
    <div className="mt-4 ml-1">
      <TypeSelector changeSelectedType={changeSelectedType} selectedType={selectedType} />
      {selectedType !== 'كل المنتجات' && (
        <>
          <div className="flex mt-5 px-3">
            <img draggable="false" src={FilterIcon} alt="Filter" />
            <p className="text-[22px] mx-3">تصفية</p>
          </div>
          <CategorySelector
            selectedCategories={selectedCategories}
            changeSelectedCategories={changeSelectedCategories}
            selectedType={selectedType}
          />
        </>
      )}
    </div>
  )
}

export default SideBar
