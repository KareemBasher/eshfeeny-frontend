import React from 'react'
import CheckMark from '../../../../../assets/common/CheckMark.svg'
import types from './types'

const CategorySelector = ({ selectedCategories, changeSelectedCategories, selectedType }) => {
  const handleOnClick = (category) => {
    if (selectedCategories.includes(category)) {
      const newSelectedCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      )
      changeSelectedCategories(newSelectedCategories)
    } else {
      const newSelectedBrands = [...selectedCategories, category]
      changeSelectedCategories(newSelectedBrands)
    }
  }

  const categoryList = types.filter((type) => {
    if (type.type === selectedType) return type
  })[0].categories

  return (
    <div className="flex flex-col h-auto border mb-5 mt-3 rounded-[10px] text-right">
      <div>
        {categoryList.map((category) => (
          <div
            key={category}
            onClick={() => handleOnClick(category)}
            className="w-full flex py-4 last:border-none only:border-none border-b"
          >
            <div className="w-5/6 flex flex-row-reverse justify-end px-2">
              <p>{category}</p>
            </div>

            <div
              className={`h-[26px] w-[26px] flex items-center justify-center border rounded-[4px] cursor-pointer ${
                selectedCategories.includes(category)
                  ? 'bg-[#FFE5CC] border-[#F99D1C]'
                  : 'border-[#4d4d4d]'
              }`}
            >
              {selectedCategories.includes(category) && (
                <img draggable="false" src={CheckMark} alt="Check mark" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorySelector
