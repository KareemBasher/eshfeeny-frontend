import React from 'react'
import CheckMark from '../../../../assets/common/CheckMark.svg'

const BrandCounter = ({ brandCounts, selectedBrands, handleSelectedBrand }) => {
  const handleOnClick = (brand) => {
    if (selectedBrands.includes(brand)) {
      const newSelectedBrands = selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      handleSelectedBrand(newSelectedBrands)
    } else {
      const newSelectedBrands = [...selectedBrands, brand]
      handleSelectedBrand(newSelectedBrands)
    }
  }

  return (
    <div className="flex flex-col h-auto min-w-[262px] border mb-5 py-6 rounded-[10px] text-right whitespace-nowrap">
      <p className="text-[22px] pr-2">البراندات</p>
      <div>
        {brandCounts.map(({ _id, count }) => (
          <div
            key={_id}
            onClick={() => handleOnClick(_id)}
            className="w-full flex py-4 last:border-none only:border-none border-b"
          >
            <div className="w-5/6 flex flex-row-reverse justify-end px-2">
              <p className="px-2">({count})</p>
              <p>{_id}</p>
            </div>

            <div
              className={`h-[26px] w-[26px] flex items-center justify-center border rounded-[4px] cursor-pointer ${
                selectedBrands.includes(_id) ? 'bg-[#FFE5CC] border-[#F99D1C]' : 'border-[#4d4d4d]'
              }`}
            >
              {selectedBrands.includes(_id) && (
                <img draggable="false" src={CheckMark} alt="Check mark" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandCounter
