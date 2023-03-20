/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LoadingElipse from '../../assets/common/LoadingElipse.png'
import ImageSearch from '../../assets/common/ImageSearch.svg'
import PlusSign from '../../assets/common/PlusSign.svg'

const ImageDroper = ({ title, buttonTitle }) => {
  const [dragActive, setDragActive] = useState(false)
  const [image, setImage] = useState('')
  const [selectedImage, setSelectedImage] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const dragHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    }
  }

  const handleDrop = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (
        e.dataTransfer.files[0].type === 'image/jpeg' ||
        e.dataTransfer.files[0].type === 'image/jpg' ||
        e.dataTransfer.files[0].type === 'image/png'
      ) {
        const newImage = URL.createObjectURL(e.dataTransfer.files[0])
        setImageURL([...imageURL, newImage])
        setSelectedImage(newImage)
        setImage(e.dataTransfer.files[0])
      }
    } else {
      setDragActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener('dragenter', (e) => dragHandler(e))

    return () => {
      document.removeEventListener('dragenter', (e) => dragHandler(e))
    }
  }, [])

  return (
    <div
      className="flex items-center justify-center"
      onDragEnter={(e) => dragHandler(e)}
      onDragLeave={(e) => dragHandler(e)}
      onDragOver={(e) => dragHandler(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <div className="h-[550px] w-[950px] rounded-[20px] flex flex-col items-center justify-center">
        {loading ? (
          <div className="h-[256px] w-[256px] flex items-center justify-center relative">
            <img
              className="absolute animate-spin"
              draggable="false"
              src={LoadingElipse}
              alt="Loading Elipse"
            />
            <p className="text-[14px] text-lightBlue">جاري البحث عن المنتج...</p>
          </div>
        ) : (
          <>
            <div className="w-[650px]">
              {imageURL ? (
                <div className="w-full flex flex-col items-center pt-8">
                  <div className="border-2 p-3 rounded-[10px]">
                    <img
                      draggable="false"
                      className="h-[250px] object-cover rounded-[10px]"
                      src={selectedImage}
                      alt="Uploaded Image"
                    />
                  </div>

                  <div className="flex flex-row-reverse m-5">
                    {imageURL.map((img) => (
                      <div
                        onClick={() => setSelectedImage(img)}
                        key={img}
                        className={`h-[50px] w-[50px] flex justify-center p-[2px] border-2 rounded-[6px] overflow-hidden mx-2 cursor-pointer ${
                          selectedImage === img && 'border-lightBlue'
                        }`}
                      >
                        <img src={img} draggable="false" alt="Uploaded Image" />
                      </div>
                    ))}

                    <div className="h-[50px] w-[50px] flex justify-center p-[2px] border-2 rounded-[6px] mx-2">
                      <img draggable="false" className="w-[20px]" src={PlusSign} alt="Add image" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[250px] rounded-[10px] border-2 border-lightBlue border-dashed flex flex-col items-center justify-around my-10">
                  <img
                    className="w-[70px]"
                    draggable="false"
                    src={ImageSearch}
                    alt="Image Search"
                  />
                  <p className="text-[22px]">{title}</p>
                </div>
              )}
            </div>
            <div>
              <button
                disabled={imageURL ? false : true}
                className="text-[24px] py-2 my-2 text-[#F5F5F5] w-[472px] bg-[#0583F2] rounded-[10px] flex justify-center disabled:bg-[#e5e5e5] disabled:text-[#8d8d8d]"
                onClick={() => handleSearch()}
              >
                {buttonTitle}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ImageDroper
