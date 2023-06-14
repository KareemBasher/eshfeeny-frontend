import React from 'react'

const Orders = ({ onGetTitle }) => {
  return (
    <div className="mx-32 2xl:mx-52">
      <div className="text-right text-[28px] my-10">{onGetTitle}</div>
      <div>
        <table className="w-full">
          <tr className="bg-blue text-[#F5F5F5] h-[58px] justify-between">
            <th>المنتج</th>
            <th>الكمية المطلوبة</th>
            <th>السعر الكلي</th>
            <th>أسم الصيدلية</th>
            <th>رقم الهاتف</th>
            <th>العنوان</th>
            <th>حالة الطلب</th>
          </tr>
          <tr className="border">
            <td>Emil</td>
            <td>Tobias</td>
            <td>Linus</td>
          </tr>
          <tr>
            <td>16</td>
            <td>14</td>
            <td>10</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders
