import React, { useEffect, useState } from 'react'
import SearchLogo from '../../assets/common/SearchIcon.svg'
import * as ProductsAPI from '../../utils/productsAPI'

const SearchBar = ({ onGetData, query }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      if (query) {
        const dataADA = await ProductsAPI.search(query)
        console.log(dataADA)
        setData(dataADA)
      }
    }

    getData()
  }, [query])

  return (
    <div className="w-full flex flex-col relative">
      <div className="flex justify-start bg-[#F7F7F7] rounded-full shadow-md">
        <img className="px-5 py-3 " src={SearchLogo} alt="Search Logo" />
        <input
          value={query}
          className="bg-[#F7F7F7] outline-none w-full rounded-full"
          type="text"
          placeholder="ما الذي تبحث عنه؟"
          onChange={onGetData}
        />
      </div>

      <div className="h-[100px] absolute bg-[#F7F7F7] w-full top-full flex justify-start"></div>
    </div>
  )
}

export default SearchBar
