import React, { useState } from 'react'
import PharmacyCartItems from './PharmacyCartItems'
import WideButton from '../../../common/WideButton'

const PharmacyCartContent = ({ onGetItems, OnGetTitle, loggedInUser, onRemoveItem }) => {
  const [price, setPrice] = useState('55')

  return (
    <div>
      <div className="text-right text-[28px] my-10 mr-32 2xl:mr-52">{OnGetTitle}</div>
      <div className="flex">
        <div>
          <ol className="flex flex-col mb-16">
            {onGetItems.map(({ product, quantity }) => (
              <li key={product._id}>
                <PharmacyCartItems
                  product={product}
                  loggedInUser={loggedInUser}
                  quantity={quantity}
                  onRemoveItem={onRemoveItem}
                />
              </li>
            ))}
          </ol>
        </div>
        <div className="w-[333px] h-[188px] border rounded-[10px] p-5">
          <div className="flex text-[26px] justify-between">
            <p>الاجمالي</p>
            <p className="text-[#0583F2]">{price} جنيه</p>
          </div>
          <div className="pt-10">
            <WideButton content="إتمام الطلب" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PharmacyCartContent
