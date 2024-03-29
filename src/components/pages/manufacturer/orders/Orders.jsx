import React, { useEffect, useState } from 'react'
/*     Components    */
import RowContent from './RowContent'
import PageEmpty from '../../../common/PageEmpty'
/*      Icons      */
import CartLight from '../../../../assets/common/CartLight.svg'
/*       API       */
import { getPharmacy } from '../../../../utils/pharmaciesAPI'
import { getProduct } from '../../../../utils/productsAPI'

const Orders = ({ onGetTitle, orders, loggedInUser, type, remove, delay, unDelay }) => {
  const [tableOrders, setTableOrders] = useState([])

  useEffect(() => {
    const orderFormat = async () => {
      const firstFormat = await orders?.map(async (order) => {
        const product = await getProduct(order.product)
        const pharmacy = await getPharmacy(order.pharmacyId)

        return {
          key: order._id,
          productData: product,
          quantity: order.quantity,
          pharmacyData: pharmacy
        }
      })

      let firstResult = []

      if (firstFormat) firstResult = await Promise.all(firstFormat)

      const finalFormat = firstResult.map((order) => {
        return {
          key: order.key,
          productImage: order.productData.images,
          productName: order.productData.nameAr,
          productVolume: order.productData.volume,
          productAmount: order.productData.amount,
          quantity: order.quantity,
          totalPrice: order.productData.price * order.quantity,
          pharmacyName: order.pharmacyData.name,
          phoneNumber: order.pharmacyData.phoneNumber,
          pharmacyAdress: order.pharmacyData.address
        }
      })
      setTableOrders(finalFormat)
    }
    orderFormat()
  }, [orders])

  return (
    <div className="mx-32 2xl:mx-52">
      <div className="text-right text-[28px] my-10">{onGetTitle}</div>
      {orders?.length > 0 ? (
        <div>
          <table className="w-full mb-32 2xl:text-[18px]">
            <tbody>
              <tr className="bg-blue text-[#F5F5F5] h-[58px] text-[18px] 2xl:text-[22px]">
                <th className="w-[352px]">المنتج</th>
                <th>الكمية المطلوبة</th>
                <th>السعر الكلي</th>
                <th>أسم الصيدلية</th>
                <th>رقم الهاتف</th>
                <th>العنوان</th>
                <th>حالة الطلب</th>
              </tr>
              {tableOrders &&
                tableOrders.map((order) => (
                  <tr key={order.key} className="bg-[#EFF6FF] even:bg-[#FDFDFF]">
                    <RowContent
                      order={order}
                      manufacturerId={loggedInUser}
                      type={type}
                      remove={remove}
                      delay={delay}
                      unDelay={unDelay}
                    />
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <PageEmpty
          onGetTitle=""
          onGetLogo={CartLight}
          onGetText1="ليس لديك طلبات"
          onGetButtonText="الرجوع الى الرئيسية"
          onGetPath="/manufacturer"
        />
      )}
    </div>
  )
}

export default Orders
