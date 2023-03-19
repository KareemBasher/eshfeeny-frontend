import React from 'react'
import ImageSearch from '../../assets/common/ImageSearch.svg'
function ImageDroper({ title }) {
  return (
    <div className="w-[643px] h-[250px] rounded-[10px] border-2 border-lightBlue border-dashed flex flex-col items-center justify-around my-10">
      <img className="w-[70px]" draggable="false" src={ImageSearch} alt="Image Search" />
      <p className="text-[22px]">{title}</p>
    </div>
  )
}

export default ImageDroper
