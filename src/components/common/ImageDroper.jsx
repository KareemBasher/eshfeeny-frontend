/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

/*         Assets        */
import LoadingElipse from '../../assets/common/LoadingElipse.png'
import ImageSearch from '../../assets/common/ImageSearch.svg'

/*         API        */
import { uploadImage, imageSearch } from '../../utils/dashboard'

const ImageDroper = ({ title, buttonTitle }) => {
  const [dragActive, setDragActive] = useState(false)
  const [image, setImage] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const hiddenFileInput = useRef(null)

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
        setImageURL(URL.createObjectURL(e.dataTransfer.files[0]))
        setImage(e.dataTransfer.files[0])
      }
    } else {
      setDragActive(false)
    }
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
        setImageURL(URL.createObjectURL(file))
        setImage(file)
      }
    }
  }

  const handleSearch = async () => {
    setLoading(true)
    const result = await uploadImage(image)
    const imageURL = result.data.url
    const searchResult = await imageSearch(imageURL)
    setLoading(false)
    setDragActive(false)
    const IDs = searchResult.map((item) => item._id)
    navigate(`/location/${IDs.join('&')}`)
  }

  useEffect(() => {
    document.addEventListener('dragenter', (e) => dragHandler(e))

    return () => {
      document.removeEventListener('dragenter', (e) => dragHandler(e))
    }
  }, [])

  const handleInputClick = () => {
    hiddenFileInput.current.click()
  }

  return (
    <div
      className="flex items-center justify-center"
      onDragEnter={(e) => dragHandler(e)}
      onDragLeave={(e) => dragHandler(e)}
      onDragOver={(e) => dragHandler(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <div className="h-[550px] w-[950px] rounded-[20px] flex flex-col items-center justify-center">
        <input
          type="file"
          accept=".png, .jpeg, .jpg"
          ref={hiddenFileInput}
          onChange={handleFileSelect}
          className="hidden"
        />
        {loading ? (
          <div className="h-[256px] w-[256px] flex items-center justify-center relative">
            <img
              className="absolute animate-spin"
              draggable="false"
              src={LoadingElipse}
              alt="Loading Elipse"
            />
            <p className="text-[14px] text-lightBlue">جاري البحث عن المنتجات...</p>
          </div>
        ) : (
          <>
            <div className="w-[650px]">
              {imageURL ? (
                <div className="w-full flex flex-col items-center pt-8">
                  <div className="border-2 p-3 rounded-[10px] mb-10">
                    <img
                      draggable="false"
                      className="h-[250px] object-cover rounded-[10px]"
                      src={imageURL}
                      alt="Uploaded Image"
                    />
                  </div>
                </div>
              ) : (
                <div
                  onClick={handleInputClick}
                  className="h-[250px] rounded-[10px] border-2 border-lightBlue border-dashed flex flex-col items-center justify-around my-10 py-8"
                >
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
