import React from 'react'

const ManufacturerProductContainer = ({ onGetProduct }) => (
  <div className="flex flex-col justify-between rounded-[10px] hover:shadow-xl transition-all duration-300 shadow-sm w-[240px] h-[340px] border-[#E7E7E7] border-[0.8px] mx-2.5 my-4">
    <div className="h-1/2 flex items-center justify-center">
      <img src={onGetProduct?.images} className="h-1/2" draggable="false" alt="Product" />
    </div>
    <div className="flex flex-col text-right px-3 pb-3 text-[18px]">
      <div>
        <p className="text-[17px]">
          {onGetProduct.nameAr}
          {onGetProduct.volume ? ` | ${onGetProduct.volume}` : ''}
          {onGetProduct.amount ? ` | ${onGetProduct.amount}` : ''}
        </p>
      </div>
      <p className="text-lightBlue my-1 text-[17px]">{onGetProduct.price} جنيه</p>
      <p className="text-[17px]">
        الكميات المتبقية: <span className="text-lightBlue">{onGetProduct.quantity}</span>
        <span className="text-lightBlue mx-[3px]">عبوات</span>
      </p>
    </div>
  </div>
)

export default ManufacturerProductContainer
