import React from 'react'

const PharmacyProductItems = ({ item }) => {
  return (
    <div className="flex flex-col rounded-lg hover:shadow-xl transition-all duration-300 shadow-sm w-[233px] h-[340px] border-[#E7E7E7] border-[0.8px] mx-2 my-4">
      <div className="flex flex-col justify-between items-center h-full bg-red-500">
        <div className="flex items-center justify-center h-3/4 w-5">
          <img draggable="false" src={item.images} alt="img" />
        </div>

        <div className="flex flex-col justify-end h-1/4 text-right p-2">
          <p>
            {item.nameAr}
            {item.volume ? ` | ${item.volume}` : ''}
            {item.amount ? ` | ${item.amount}` : ''}
          </p>
          <p className="text-blue text-[20px] my-5">{item.price} جنيه</p>
          <p>
            الكمية المتبقية : <span className="text-blue text-[18px]">{item.quantity} عبوات</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PharmacyProductItems
