import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

/*         Assets        */
import SearchLogo from '../../assets/common/SearchIcon.svg'
import SearchLogoSmall from '../../assets/common/SearchIconSmall.svg'

/*         API        */
import * as ProductsAPI from '../../utils/productsAPI'
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
  const [loading, SetLoading] = useState(false)

  const navigate = useNavigate()

  useOutsideHook(ref, (isOpen) => setResultsOpen(isOpen))

  useEffect(() => {
    const getData = async () => {
      if (query) setData(await ProductsAPI.search(query))
      else setData([])
    }

    getData()
  }, [query])

  const dragHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
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
        SetLoading(true)
        const result = await uploadImage(e.dataTransfer.files[0])
        const imageURL = result.data.url
        const searchResult = await imageSearch(imageURL)
        SetLoading(false)
        setDragActive(false)
        const IDs = searchResult.map((item) => item._id)
        navigate(`/searchResults/${IDs.join('&')}`)
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
    <>
      {dragActive && (
        <div
          className="overflow-y-hidden backdrop-blur-sm absolute w-full h-full inset-0 bg-[#0000008a] flex items-center justify-center z-50"
          onDragEnter={(e) => dragHandler(e)}
          onDragLeave={(e) => dragHandler(e)}
          onDragOver={(e) => dragHandler(e)}
          onDrop={(e) => handleDrop(e)}
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
              <p className="text-white text-5xl mt-5">جاري التحميل</p>
            </div>
          ) : (
            <p className="text-white text-5xl">ارفع صورة لدواء او منتج للبحث</p>
          )}
        </div>
      )}
      <div className="w-full flex flex-col relative z-30" ref={ref}>
        <div
          className={`flex justify-start bg-[#F7F7F7] ${
            data.length > 0 && resultsOpen ? 'rounded-t-[10px]' : 'rounded-full'
          } shadow-sm`}
        >
          <img className="px-5 py-3 " src={SearchLogo} alt="Search Logo" />
          <input
            value={query}
            className="bg-[#F7F7F7] outline-none w-full ml-5"
            type="text"
            placeholder="ما الذي تبحث عنه؟"
            onChange={onGetData}
          />
        </div>

        {data.length > 0 && resultsOpen && (
          <>
            <div className="max-h-52 overflow-x-auto absolute bg-[#F7F7F7] w-full top-full flex justify-start rounded-b-[10px]">
              <ol className="w-full">
                {data.map(({ _id, nameAr }) => (
                  <li key={_id} className="flex justify-start items-center pr-7 border-t py-2">
                    <img src={SearchLogoSmall} className="w-4 ml-2" alt="SearchIcon" />
                    <Link onClick={() => setResultsOpen(false)} to={`/product/${_id}`}>
                      {nameAr}
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
