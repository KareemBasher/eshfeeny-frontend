import React from 'react'

const PharmacyProductItems = ({ items }) => {
  return (
    <div className="w-[233px] h-[303px] flex border rounded-[10px] justify-center items-center mx-5">
      {items.map((item) => (
        <div className="flex flex-col items-center" key={item.id}>
          <div>
            <img className="mt-5" src={item.img} alt="img" />
          </div>

          <div className="flex flex-col p-2 mt-10 text-right">
            <p className=" text-[16px] mb-3">{item.name}</p>
            <p className="text-blue text-[20px] mb-3">{item.price} جنيه</p>
            <p className="mt-1">
              الكمية المتبقية : <span className="text-blue text-[18px]">{item.quantity} عبوات</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PharmacyProductItems
