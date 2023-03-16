import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResults = () => {
  const params = useParams()
  const IDs = params.searchResults.split('&')

  return (
    <div>
      {IDs.map((id) => {
        return <div key={id}>{id}</div>
      })}
    </div>
  )
}

export default SearchResults
