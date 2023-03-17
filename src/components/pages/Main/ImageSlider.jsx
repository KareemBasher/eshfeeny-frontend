import React, { useState, useEffect, useRef } from 'react'
import RightArrow from '../../../assets/MainPage/RightArrow.svg'
import LeftArrow from '../../../assets/MainPage/LeftArrow.svg'
import Image_1 from '../../../assets/MainPage/Image_1.svg'
import Image_2 from '../../../assets/MainPage/Image_2.svg'
import Image_3 from '../../../assets/MainPage/Image_3.svg'
import Image_4 from '../../../assets/MainPage/Image_4.svg'
import './Dot.css'
import { FaCircle } from 'react-icons/fa'
const ImageSlider = () => {
  const images = [{ url: Image_1 }, { url: Image_2 }, { url: Image_3 }, { url: Image_4 }]
  const [currentIndex, setCurrtentIndex] = useState(0)
  const timerRef = useRef(null)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrtentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newSlide = isLastSlide ? 0 : currentIndex + 1
    setCurrtentIndex(newSlide)
  }
  const goToSlide = (slideIndex) => {
    setCurrtentIndex(slideIndex)
  }
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      nextSlide()
    }, 3000)

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [nextSlide])

  return (
    <>
      <div className="max-w-[1800px] h-[850px] w-full m-auto py-16 px-4 relative ">
        <div
          style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-300"
        ></div>
        {/* Left Arrow */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-[10px] p-2 cursor-pointer mx-5">
          <img src={LeftArrow} onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-[10px] p-2 cursor-pointer mx-5">
          <img src={RightArrow} onClick={nextSlide} size={30} />
        </div>
        <div className="absolute flex" dir="ltr">
          {images.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={currentIndex === slideIndex ? 'dot active' : 'dot'}
            >
              <FaCircle />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ImageSlider
