import React from 'react'
import GooglePlay from '../../../assets/mobile/GooglePlay.svg'
import AppGallery from '../../../assets/mobile/AppGallery.svg'
import MobileSVG from '../../../assets/mobile/Mobile.svg'

const Mobile = () => {
  return (
    <div className="h-screen flex flex-col justify-end items-center relative">
      <img
        draggable="false"
        className="w-3/4 sm:w-2/5 sm:z-30 sm:absolute sm:bottom-0 sm:left-10"
        src={MobileSVG}
        alt="Mobile"
      />
      <div className="w-full bg-[#0583F2] text-right py-16 px-5 rounded-t-[20px]">
        <div className="sm:w-1/2">
          <p className="text-white text-lg py-2">حمل تطبيق ميدفايندر الأن</p>

          <p className="text-white font">
            الأن يمكنك معرفة اقرب صيدلية تحتوي علي الدواء الذي تحتاجه والعديد من المميزات الأخري.
          </p>

          <div className="w-full flex justify-around pt-8">
            <img draggable="false" src={AppGallery} alt="App Gallery" />
            <img draggable="false" src={GooglePlay} alt="Google Play" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mobile
