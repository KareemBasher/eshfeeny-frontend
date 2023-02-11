import React from 'react'
const PageEmpty = ({ onGetLogo, onGetText }) => {
  return (
    <div>
      <div className="text-right  text-[28px] m-10">المنتجات المفضلة</div>

      <div className="my-8">
        <div className="flex justify-center rounded-[50%]  w-ull ">
          <img src={onGetLogo} alt="" />
        </div>

        <div className="m-5 text-[26px]">
          <p>{onGetText}</p>
        </div>
      </div>
    </div>
  )
}

export default PageEmpty
