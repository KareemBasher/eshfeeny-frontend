import React, { useState } from 'react'
/*     Components    */
import PopUp from './PopUp'
/*      Icons      */
import ThreeDots from '../../../../assets/manufacturer/More.svg'

const RowContent = ({ order, manufacturerId, type, refresh, setRefresh }) => {
  const [popUp, setPopUp] = useState(false)

  const handlePopup = () => {
    setPopUp(!popUp)
  }

  return (
    <>
      {/*  Image and Name   */}
      <td className="flex h-[103px]">
        <div className="flex p-2 min-w-fit">
          <img src={order.productImage} />
        </div>
        <p className="flex justify-center items-center w-full px-5">
          {order.productName} {order.productVolume ? ` | ${order.productVolume}` : ''}
          {order.productAmount ? ` | ${order.productAmount}` : ''}
        </p>
      </td>
      {/*     Quantity     */}
      <td>{order.quantity} عبوة</td>
      {/*  Total Price   */}
      <td>{order.totalPrice} جنيه</td>
      {/*  Pharmacy Name   */}
      <td>{order.pharmacyName}</td>
      {/*  Phone Number   */}
      <td>{order.phoneNumber}</td>
      {/*  Address   */}
      <td>{order.pharmacyAdress}</td>
      {/*  Order Status   */}
      <td>
        <button className="p-5 outline-none" onClick={() => handlePopup()}>
          <img src={ThreeDots} />
        </button>
        {popUp && (
          <PopUp
            onGetHandlePopup={handlePopup}
            onGetManufacturerId={manufacturerId}
            type={type}
            order={order}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        )}
      </td>
    </>
  )
}

export default RowContent
