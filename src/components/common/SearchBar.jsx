import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchLogo from '../../assets/common/SearchIcon.svg'
import SearchLogoSmall from '../../assets/common/SearchIconSmall.svg'
import * as ProductsAPI from '../../utils/productsAPI'

const SearchBar = ({ onGetData, query }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      if (query) setData(await ProductsAPI.search(query))
    }

    getData()
  }, [query])

  return (
    <div className="w-full flex flex-col relative">
      <div
        className={`flex justify-start bg-[#F7F7F7] ${
          data.length > 0 ? 'rounded-t-[10px]' : 'rounded-full'
        } shadow-md`}
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

      {data.length > 0 && (
        <>
          <div className="max-h-52 overflow-x-auto absolute bg-[#F7F7F7] w-full top-full flex justify-start rounded-b-[10px]">
            <ol className="w-full">
              {data.map(({ _id, nameAr }) => (
                <li key={_id} className="flex justify-start items-center pr-7 border-t py-2">
                  <img src={SearchLogoSmall} className="w-4 ml-2" />
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
