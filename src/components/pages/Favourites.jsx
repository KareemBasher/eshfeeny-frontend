import React, { useState } from 'react'
import SearchBar from '../common/SearchBar'

const Favourites = () => {
    const [query, setQuery] = useState('')
    const searchResult = (e) => {
        setQuery(e.target.value)
    }

  return (
    <SearchBar onGetData={searchResult} />
  )
}

export default Favourites