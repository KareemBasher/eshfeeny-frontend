import React from 'react'

const PharmacyProductItems = ({ items }) => {
  return (
    <div className="w-[233px] h-[303px] flex border rounded-[10px] justify-center items-center mx-5">
      {items.map((item) => (
        <div className="flex flex-col items-center justify-between" key={item.id}>
          <div className="flex items-center justify-center w-[150px]">
            <img src={item.images} alt="img" />
          </div>

          <div className="flex flex-col p-2 text-right">
            <p className=" text-[16px] ">{item.nameAr}</p>
            <p className="text-blue text-[20px] ">{item.price} جنيه</p>
            <p className="">
              الكمية المتبقية : <span className="text-blue text-[18px]">{item.quantity} عبوات</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PharmacyProductItems
