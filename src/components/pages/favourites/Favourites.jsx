import React, { useEffect, useState } from 'react'
/*    Scripts    */
import SearchBar from '../../common/SearchBar'
import RoundButton from '../../common/RoundButton'
import NavList from '../../common/NavList'
import PageEmpty from '../../common/PageEmpty'
import FavouritesContent from './FavouritesContent'
import LogoScript from '../../common/LogoScript'
/*    Icons    */
import HeartDark from '../../../assets/common/HeartDark.svg'
import HeartLight from '../../../assets/common/HeartLight.svg'
import Location from '../../../assets/common/Location.svg'
import Cart from '../../../assets/common/Cart.svg'
import Person from '../../../assets/common/Person.svg'
/*     API     */
import * as ProductsAPI from '../../../utils/productsAPI'

const Favourites = () => {
  const [query, setQuery] = useState('')
  const searchResult = (e) => {
    setQuery(e.target.value)
  }
  const [items, setItems] = useState([])
  useEffect(() => {
    const updateItems = async () => {
      setItems(await ProductsAPI.getFavoriteProducts('63d9239b6ff014381890d178'))
    }
    updateItems()
  }, [])

  return (
    <>
      <div className="flex pt-3 px-[112px]">
        <LogoScript />
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
        <FavouritesContent OnGetTitle="المنتجات المفضلة" onGetItems={items} />
        {/* <PageEmpty onGetLogo={HeartLight} onGetText="لا توجد أي منتجات مفضلة لديك" OnGetTitle="المنتجات المفضلة"/> */}
      </div>
    </>
  )
}

export default Favourites