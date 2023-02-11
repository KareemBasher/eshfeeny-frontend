import React, { useState } from 'react'
import SearchBar from '../common/SearchBar'
import RoundButton from '../common/RoundButton'
import NavList from '../common/NavList'
import HeartDark from '../../assets/common/HeartDark.svg'
import HeartLight from '../../assets/common/HeartLight.svg'
import Location from '../../assets/common/Location.svg'
import Cart from '../../assets/common/Cart.svg'
import Person from '../../assets/common/Person.svg'
import PageEmpty from '../common/PageEmpty'

const Favourites = () => {
  const [query, setQuery] = useState('')
  const searchResult = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <div className="flex pt-3 px-[112px]">
        <SearchBar onGetData={searchResult} />
        <RoundButton onGetLogo={HeartDark} onGetText="المفضلة" onGetPath="/favorites" />
        <RoundButton onGetLogo={Location} onGetText="أقرب صيدلية" onGetPath="/location" />
        <RoundButton onGetLogo={Cart} onGetText="العربة" onGetPath="/cart" />
        <RoundButton onGetLogo={Person} onGetText="حسابي" onGetPath="/profile" />
      </div>
      <div className="my-5 py-3 border w-full">
        <NavList />
      </div>
      <div>
        <PageEmpty onGetLogo={HeartLight} onGetText="لا توجد أي منتجات مفضلة لديك"></PageEmpty>
      </div>
    </>
  )
}

export default Favourites
