import React from 'react'
import usePlacesAutoComplete, { getGeocode, getLatLng } from 'use-places-autocomplete'

const Search = () => {
  const searchPlaces = () => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions
    } = usePlacesAutoComplete({
      requestOptions: {
        location: { lat: () => 26.8206, lng: () => 30.8025 },
        radius: 200 * 1000
      }
    })
  }
  return <div>Search</div>
}

export default Search
