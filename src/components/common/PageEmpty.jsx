import React from 'react'
import GroupHeart from '../../assets/common/GroupHeart.svg'
const PageEmpty = () => {
  return (
    <div>
      <div className="text-right  text-[28px] m-10">المنتجات المفضلة</div>

      <div className="my-8">
        <div className="flex justify-center rounded-[50%]  w-ull ">
          <img src={GroupHeart} alt="" />
        </div>

        <div className="m-5 text-[26px]">
          <p>لا توجد أي منتجات مفضلة لديك </p>
        </div>
      </div>
    </div>
  )
}

export default PageEmpty
