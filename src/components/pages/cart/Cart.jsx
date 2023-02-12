import React from 'react'
import { useState } from 'react'
import SearchBar from '../../common/SearchBar'
import RoundButton from '../../common/RoundButton'
import NavList from '../../common/NavList'
import PageEmpty from '../../common/PageEmpty'
import LogoScript from '../../common/LogoScript'
/*    Icons    */
import HeartDark from '../../../assets/common/HeartDark.svg'
import CartLight from '../../../assets/common/CartLight.svg'
import Location from '../../../assets/common/Location.svg'
import CartDark from '../../../assets/common/CartDark.svg'
import Person from '../../../assets/common/Person.svg'
const Cart = () => {
  const [query, setQuery] = useState('')
  const searchResult = (e) => {
    setQuery(e.target.value)
  }
  return (
    <>
      <div className="flex pt-3 px-[112px]">
        <LogoScript />
        <SearchBar onGetData={searchResult} />
        <RoundButton onGetLogo={HeartDark} onGetText="المفضلة" onGetPath="/favorites" />
        <RoundButton onGetLogo={Location} onGetText="أقرب صيدلية" onGetPath="/location" />
        <RoundButton onGetLogo={CartDark} onGetText="العربة" onGetPath="/cart" />
        <RoundButton onGetLogo={Person} onGetText="حسابي" onGetPath="/profile" />
      </div>
      <div className="my-5 py-3 border w-full">
        <NavList />
      </div>
      <div>
        <PageEmpty onGetTitle="سلة التسوق" onGetLogo={CartLight} onGetText="عربة التسوق فارغة " />
      </div>
    </>
  )
}

export default Cart