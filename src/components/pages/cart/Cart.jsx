import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from '../../common/SearchBar'
import RoundButton from '../../common/RoundButton'
import NavList from '../../common/NavList'
import PageEmpty from '../../common/PageEmpty'
import LogoScript from '../../common/LogoScript'
import CartContent from './CartContent'
/*    Icons    */
import HeartDark from '../../../assets/common/HeartDark.svg'
import CartLight from '../../../assets/common/CartLight.svg'
import Location from '../../../assets/common/Location.svg'
import CartDark from '../../../assets/common/CartDark.svg'
import Person from '../../../assets/common/Person.svg'
/*     API     */
import * as ProductsAPI from '../../../utils/productsAPI'
import * as UsersAPI from '../../../utils/usersAPI'

const Cart = () => {
  const [query, setQuery] = useState('')
  const [amount, setAmount] = useState(1)
  const [items, setItems] = useState([])

  const addAmountHandler = (productID) => {
    console.log('click')

    setAmount(amount + 1)
  }

  const searchResult = (e) => {
    setQuery(e.target.value)
  }
  console.log(items)

  useEffect(() => {
    const updateItems = async () => {
      setItems(await ProductsAPI.getCartProducts('63d9239b6ff014381890d178'))
    }
    updateItems()
  }, [])

  const removeFromCart = (ID, productID) => {
    console.log('id:' + productID)
    UsersAPI.removeFromCart(ID, productID)
    setItems(items.filter((product) => product._id !== productID))
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
        <CartContent
          onGetItems={items}
          onRemoveCartItem={removeFromCart}
          OnGetTitle="سله التسوق"
          amount={amount}
          onAddAmount={addAmountHandler}
        />
        {/* <PageEmpty onGetTitle="سلة التسوق" onGetLogo={CartLight} onGetText="عربة التسوق فارغة " /> */}
      </div>
    </>
  )
}

export default Cart
