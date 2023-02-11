import React, { useState } from 'react'
import SearchBar from '../common/SearchBar'
import RoundButton from '../common/RoundButton'

const Favourites = () => {
  const [query, setQuery] = useState('')
  const searchResult = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="flex">
      <SearchBar onGetData={searchResult} />
      <RoundButton />
    </div>
  )
}

export default Favourites
