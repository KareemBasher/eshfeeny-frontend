import React, { useState } from 'react'
import SearchBar from '../common/SearchBar'
import RoundButton from '../common/RoundButton'
import NavList from '../common/NavList'

const Favourites = () => {
  const [query, setQuery] = useState('')
  const searchResult = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <div className="flex">
        <SearchBar onGetData={searchResult} />
        <RoundButton />
      </div>
      <div className=" my-5 border  w-full  py-3  ">
        <NavList />
      </div>
    </>
  )
}

export default Favourites
