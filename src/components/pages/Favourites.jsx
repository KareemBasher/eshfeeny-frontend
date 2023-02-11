import React, { useState } from 'react'
import SearchBar from '../common/SearchBar'
import RoundButton from '../common/RoundButton'
import HeartDark from '../../assets/common/HeartDark.svg'
import Location from '../../assets/common/Location.svg'
import Cart from '../../assets/common/Cart.svg'
import Person from '../../assets/common/Person.svg'

const Favourites = () => {
  const [query, setQuery] = useState('')
  const searchResult = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="flex">
      <SearchBar onGetData={searchResult} />
      <RoundButton onGetLogo={HeartDark} onGetText="المفضلة" onGetPath="/favorites" />
      <RoundButton onGetLogo={Location} onGetText="أقرب صيدلية" onGetPath="/location" />
      <RoundButton onGetLogo={Cart} onGetText="العربة" onGetPath="/cart" />
      <RoundButton onGetLogo={Person} onGetText="حسابي" onGetPath="/profile" />
    </div>
  )
}

export default Favourites
