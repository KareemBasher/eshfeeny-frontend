import React, { useEffect, useState } from 'react'
/*    Components    */
import SearchBar from '../../common/SearchBar'
import RoundButton from '../../common/RoundButton'
import NavListContainer from '../../common/navBar/NavListContainer'
import PageEmpty from '../../common/PageEmpty'
import FavouritesContent from './FavouritesContent'
import LogoScript from '../../common/LogoScript'
/*    Icons    */
import HeartDark from '../../../assets/common/HeartDark.svg'
import HeartLight from '../../../assets/common/HeartLight.svg'
import Location from '../../../assets/common/Location.svg'
import CartDark from '../../../assets/common/CartDark.svg'
import Person from '../../../assets/common/Person.svg'
/*     API     */
import * as ProductsAPI from '../../../utils/productsAPI'
import * as UsersAPI from '../../../utils/usersAPI'

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

  const removeFromFavourites = (ID, productID) => {
    UsersAPI.removeFromFavorites(ID, productID)
    setItems(items.filter((product) => product._id !== productID))
  }

  return (
    <>
      <div className="flex pt-3 px-[112px]">
        <LogoScript />
        <SearchBar onGetData={searchResult} query={query} />
        <RoundButton onGetLogo={HeartDark} onGetText="المفضلة" onGetPath="/favorites" />
        <RoundButton onGetLogo={Location} onGetText="أقرب صيدلية" onGetPath="/location" />
        <RoundButton onGetLogo={CartDark} onGetText="العربة" onGetPath="/cart" />
        <RoundButton onGetLogo={Person} onGetText="حسابي" onGetPath="/profile" />
      </div>
      <NavListContainer />
      <div>
        {items.length ? (
          <FavouritesContent
            onGetTitle="المنتجات المفضلة"
            onGetItems={items}
            onRemoveFavourite={removeFromFavourites}
          />
        ) : (
          <PageEmpty
            onGetLogo={HeartLight}
            onGetText="لا توجد أي منتجات مفضلة لديك"
            onGetTitle="المنتجات المفضلة"
          />
        )}
      </div>
    </>
  )
}

export default Favourites
