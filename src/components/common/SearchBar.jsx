import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import SearchLogo from '../../assets/common/SearchIcon.svg'
import SearchLogoSmall from '../../assets/common/SearchIconSmall.svg'
import * as ProductsAPI from '../../utils/productsAPI'

// React hook for detecting clicks outside of a component
function useOutsideHook(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
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

  useOutsideHook(ref, (isOpen) => setResultsOpen(isOpen))

  useEffect(() => {
    const getData = async () => {
      if (query) setData(await ProductsAPI.search(query))
      else setData([])
    }

    getData()
  }, [query])

  return (
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
                  <Link to={`/product/${_id}`}>{nameAr}</Link>
                </li>
              ))}
              <div className="border-b" />
            </ol>
          </div>
        </>
      )}
    </div>
  )
}

export default SearchBar
