import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
/*      Components     */
import BrandsPictures from './BrandsPictures'
/*       Icons       */
import ArrowOrange from '../../../assets/mainPage/ArrowOrange.svg'
import RightArrow from '../../../assets/mainPage/RightArrow.svg'
import LeftArrow from '../../../assets/mainPage/LeftArrow.svg'
/*       Images        */
import Image1 from '../../../assets/brands/Garnier.png'
import Image2 from '../../../assets/brands/VICHY.png'
import Image3 from '../../../assets/brands/Pampers.png'
import Image4 from '../../../assets/brands/Beesline.png'
import Image5 from '../../../assets/brands/AXE.png'

const Brands = () => {
  const container = document.querySelector('.brands')

  const handleLeft = () => {
    let scrollAmount = 0
    const slideTimer = setInterval(function () {
      container.scrollLeft -= 25
      scrollAmount += 10
      if (scrollAmount >= 100) {
        window.clearInterval(slideTimer)
      }
    }, 25)
  }

  const handleRight = () => {
    let scrollAmount = 0
    const slideTimer = setInterval(function () {
      container.scrollLeft += 25
      scrollAmount += 10
      if (scrollAmount >= 100) {
        window.clearInterval(slideTimer)
      }
    }, 25)
  }

  const [title, setTitle] = useState([])
  useEffect(() => {
    const getTitle = () => {
      setTitle('تصفح الماركات')
    }
    getTitle()
  }, [])

  return (
    <div className="mx-36">
      <div className="flex justify-between">
        <p className="text-right text-[26px] pb-3">{title}</p>
        <Link to="/brands" className="flex border border-orange py-3 px-5 rounded-[10px]">
          <p className="text-left text-orange text-[22px] whitespace-nowrap">عرض الكل</p>
          <img src={ArrowOrange} draggable="false" className="pr-2" />
        </Link>
      </div>
      <div className="flex relative">
        {/*    Right Arrow    */}
        <div
          className="flex absolute justify-center items-center self-center min-w-[42px] min-h-[42px] -right-[42px] bg-[#f5f5f581] rounded-full shadow-md cursor-pointer hover:opacity-60"
          onClick={handleRight}
        >
          <img src={RightArrow} />
        </div>
        {/*    Left Arrow    */}
        <div
          className="flex absolute justify-center items-center self-center min-w-[42px] min-h-[42px] -left-[42px] bg-[#f5f5f581] rounded-full shadow-md cursor-pointer hover:opacity-60"
          onClick={handleLeft}
        >
          <img src={LeftArrow} />
        </div>
        {/*      Brands     */}
        <div className="flex w-full pb-7 overflow-x-auto brands container justify-between">
          <ol className="flex justify-between">
            <li>
              <BrandsPictures onGetImage={Image1} onGetPath="garnier" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image2} onGetPath="vichy" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image3} onGetPath="pampers" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image4} onGetPath="beesline" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image5} onGetPath="axe" />
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Brands
