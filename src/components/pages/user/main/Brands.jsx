import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
/*      Components     */
import BrandsPictures from './BrandsPictures'
/*       Icons       */
import ArrowOrange from '../../../../assets/mainPage/ArrowOrange.svg'
import RightArrow from '../../../../assets/mainPage/RightArrow.svg'
import LeftArrow from '../../../../assets/mainPage/LeftArrow.svg'
/*       Images        */
import Image1 from '../../../../assets/brands/Garnier.png'
import Image2 from '../../../../assets/brands/Listerine.png'
import Image3 from '../../../../assets/brands/Pampers.png'
import Image4 from '../../../../assets/brands/Beesline.png'
import Image5 from '../../../../assets/brands/LA ROCHE POSAY.png'
import Image6 from '../../../../assets/brands/CleanClear.png'
import Image7 from '../../../../assets/brands/Dove.png'
import Image8 from '../../../../assets/brands/HerbalEssences.png'
import Image9 from '../../../../assets/brands/LOreal Paris.png'

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
  const [overflow, setOverflow] = useState(false)

  useEffect(() => {
    const getTitle = () => {
      setTitle('تصفح الماركات')
    }
    const isOverflown = (element) => {
      if (element?.scrollWidth > element?.clientWidth) {
        setOverflow(true)
      } else {
        setOverflow(false)
      }
    }
    getTitle()
    isOverflown(container)
  }, [container?.scrollWidth])

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
        {overflow && (
          <>
            {/*    Right Arrow    */}
            <button
              className="flex absolute justify-center items-center self-center min-w-[42px] min-h-[42px] -right-[42px] bg-[#f5f5f581] rounded-full shadow-md cursor-pointer hover:opacity-60"
              onClick={handleRight}
            >
              <img src={RightArrow} draggable="false" />
            </button>
            {/*    Left Arrow    */}
            <button
              className="flex absolute justify-center items-center self-center min-w-[42px] min-h-[42px] -left-[42px] bg-[#f5f5f581] rounded-full shadow-md cursor-pointer hover:opacity-60"
              onClick={handleLeft}
            >
              <img src={LeftArrow} draggable="false" />
            </button>
          </>
        )}
        {/*      Brands     */}
        <div className="flex w-full pb-7 overflow-x-auto brands container justify-between">
          <ol className="flex justify-between">
            <li>
              <BrandsPictures onGetImage={Image1} onGetPath="Garnier" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image7} onGetPath="Dove" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image4} onGetPath="Beesline" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image5} onGetPath="LA ROCHE POSAY" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image3} onGetPath="Pampers" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image2} onGetPath="Listerine" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image6} onGetPath="Clean Clear" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image8} onGetPath="Herbal Essences" />
            </li>
            <li>
              <BrandsPictures onGetImage={Image9} onGetPath="L'Oréal Paris" />
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Brands
