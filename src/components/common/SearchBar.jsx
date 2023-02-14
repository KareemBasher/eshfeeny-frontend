import React from 'react'
import SearchLogo from '../../assets/common/SearchIcon.svg'

const SearchBar = ({ onGetData }) => {
  return (
    <div className="flex justify-start bg-[#F7F7F7] rounded-full w-full shadow-md">
      <img className="px-5 py-3 " src={SearchLogo} alt="Search Logo" />
      <input
        className="bg-[#F7F7F7] outline-none w-full rounded-full"
        type="text"
        placeholder="ما الذي تبحث عنه؟"
        onChange={onGetData}
      />
    </div>

  )
}

export default SearchBar
