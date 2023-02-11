import React from 'react'
import SearchLogo from '../../assets/common/SearchIcon.svg'

const SearchBar = ({ onGetData }) => {
  return (
    <div className="flex justify-start bg-[#F7F7F7] rounded-full w-96 shadow-md">
      <img className="px-5 py-3" src={SearchLogo} alt="Search Logo" />
      <input
        className="bg-[#F7F7F7] outline-none w-auto"
        dir="rtl"
        type="text"
        placeholder="ما الذي تبحت عنه؟"
        onChange={onGetData}
      />
    </div>
  )
}

export default SearchBar
