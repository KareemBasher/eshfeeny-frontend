import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

/*         Assets        */
import SearchLogo from '../../assets/common/SearchIcon.svg'
import CameraSearch from '../../assets/common/CamSearch.svg'
import ImageSearch from '../../assets/common/ImageSearch.svg'
import CloseButton from '../../assets/common/CloseButton.svg'
import LoadingElipse from '../../assets/common/LoadingElipse.png'

/*         API        */
import { search } from '../../utils/productsAPI'
import { uploadImage, imageSearch } from '../../utils/dashboard'

// React hook for detecting clicks outside of a component
const useOutsideHook = (ref, handler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(false)
      } else {
        handler(true)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const SearchBar = ({ onGetData, query }) => {
  const ref = useRef(null)
  const [data, setData] = useState([])
  const [resultsOpen, setResultsOpen] = useState(true)
  const [dragActive, setDragActive] = useState(false)
  const [image, setImage] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const hiddenFileInput = useRef(null)

  useOutsideHook(ref, (isOpen) => setResultsOpen(isOpen))

  useEffect(() => {
    const getData = async () => {
      if (query) setData(await search(query))
      else setData([])
    }

    getData()
  }, [query])

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

  useEffect(() => {
    document.addEventListener('dragenter', (e) => dragHandler(e))

    return () => {
      document.removeEventListener('dragenter', (e) => dragHandler(e))
    }
  }, [])

  const handleClose = () => {
    setDragActive(false)
    setImage('')
    setImageURL('')
  }

  const resetImage = () => {
    setImage('')
    setImageURL('')
  }

  const handleTextSearch = async () => {
    if (query.length > 0) {
      setLoading(true)
      const searchResult = await search(query)
      setLoading(false)
      setDragActive(false)
      const IDs = searchResult.map((item) => item._id)
      navigate(`/searchResults/${IDs.join('&')}`)
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
    navigate(`/searchResults/${IDs.join('&')}`)
  }

  const handleInputClick = () => {
    hiddenFileInput.current.click()
  }

  return (
    <>
      {dragActive && (
        <div
          className="overflow-y-hidden fixed w-full h-full inset-0 bg-[#00000080] flex items-center justify-center z-50"
          onDragEnter={(e) => dragHandler(e)}
          onDragLeave={(e) => dragHandler(e)}
          onDragOver={(e) => dragHandler(e)}
          onDrop={(e) => handleDrop(e)}
        >
          <div className="bg-offWhite h-[550px] w-[950px] rounded-[20px] flex flex-col items-center justify-center">
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
                <p className="text-[14px] text-lightBlue">جاري البحث عن المنتج...</p>
              </div>
            ) : (
              <>
                <div className={`w-full flex px-10 ${!imageURL && 'flex-row-reverse'}`}>
                  {imageURL && (
                    <div className="w-full mb-3">
                      <p className="text-[24px] text-right">الصورة المختارة</p>
                    </div>
                  )}

                  <button onClick={() => handleClose()}>
                    <img src={CloseButton} draggable="false" alt="Close Button" />
                  </button>
                </div>
                <div className="h-[360px] w-[650px]">
                  {imageURL ? (
                    <div className="w-full flex flex-col items-center pt-8">
                      <img
                        draggable="false"
                        className="h-[250px] object-cover rounded-[10px]"
                        src={imageURL}
                        alt="Uploaded Image"
                      />
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
                      <p className="text-[22px]">أضف صورة الروشتة أو المنتج الذى تبحث عنه</p>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    disabled={imageURL ? false : true}
                    className="w-[223px] py-3 rounded-[10px] text-[24px] bg-lightBlue text-white mx-10 disabled:bg-[#E5E5E5] disabled:text-[#8d8d8d]"
                    onClick={() => handleSearch()}
                  >
                    بحث
                  </button>
                  <button
                    disabled={imageURL ? false : true}
                    className="w-[223px] py-3 border border-black rounded-[10px] text-[24px] mx-10 disabled:bg-[#E5E5E5] disabled:text-[#8d8d8d] disabled:border-none"
                    onClick={() => resetImage()}
                  >
                    إلغاء
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="w-full flex flex-col relative z-30" ref={ref}>
        <div className={`flex justify-start h-[45px] bg-[#F7F7F7] border rounded-full`}>
          <img
            draggable="false"
            className="px-5 py-3 cursor-pointer searchButton"
            onClick={handleTextSearch}
            src={SearchLogo}
            alt="Search Logo"
          />
          <input
            value={query}
            className="bg-[#F7F7F7] outline-none w-full min-w-fit ml-5 searchBar rounded-l-full"
            type="text"
            placeholder="ما الذي تبحث عنه؟"
            onChange={onGetData}
          />

          <button className="px-5" onClick={() => setDragActive(true)}>
            <img
              className="w-[32px]"
              draggable="false"
              src={CameraSearch}
              alt="Search using image"
            />
          </button>
        </div>

        {data.length > 0 && resultsOpen && (
          <>
            <div className="max-h-52 overflow-x-auto border absolute bg-white w-full top-[85%] flex justify-start rounded-[10px]">
              <ol className="w-full">
                {data.map(({ _id, nameAr, price, volume, amount, images }) => (
                  <li
                    key={_id}
                    className="w-full flex justify-start items-center pr-7 border-b py-2"
                  >
                    <Link to={`/product/${_id}`}>
                      <div className="flex">
                        <img draggable="false" src={images} className="w-[70px]" alt="Product" />
                        <div className="flex flex-col items-start mx-5">
                          <p>
                            {nameAr}
                            {volume ? ` | ${volume}` : ''}
                            {amount ? ` | ${amount}` : ''}
                          </p>

                          <p className="text-lightBlue py-1">{price} جنيه</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
                <div className="border-b" />
              </ol>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default SearchBar
