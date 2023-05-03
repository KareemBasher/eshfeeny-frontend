import React, { useState, useEffect } from 'react'
/*    components    */
import PageEmpty from '../../../common/PageEmpty'
import PharmacyNavigation from '../../../common/PharmacyNavigation'
import PharmacyCartContent from './PharmacyCartContent'
/*    Icons    */
import CartLight from '../../../../assets/common/CartLight.svg'
import GuestLogo from '../../../../assets/common/AlternativeLogo.svg'
/*    API    */
import * as PharmacyAPI from '../../../../utils/pharmaciesAPI'

const PharmacyCart = ({ loggedInUser, logout }) => {
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState('')
  const [click, setClick] = useState('0')

  useEffect(() => {
    const updateItems = async () => {
      const result = await PharmacyAPI.getCart(loggedInUser)
      setItems(result?.cart ? result.cart : [])
    }
    updateItems()
  }, [])
  useEffect(() => {
    const updateItems = async () => {
      const result = await PharmacyAPI.getCart(loggedInUser)
      setTotalPrice(result?.total ? result.total : '')
    }
    updateItems()
  }, [click])

  const removeFromCart = (ID, productID) => {
    PharmacyAPI.removeFromCart(ID, productID)
    setItems(items.filter(({ product }) => product._id !== productID))
    setClick(click + 1)
  }

  return (
    <div>
      <div>
        <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      </div>

      <div>
        {loggedInUser === '6439bd5e1c12d023717e2be5' ? (
          <div>
            <PageEmpty
              onGetTitle="سلة التسوق"
              onGetLogo={GuestLogo}
              onGetText1="أنت الان في وضع الضيف"
              onGetText2="الرجاء تسجيل الدخول للاستمتاع بالمميزات"
              onGetButtonText="تسجيل الدخول"
              onGetPath="./login/pahrmacy"
            />
          </div>
        ) : (
          <div>
            {items.length ? (
              <PharmacyCartContent
                onGetItems={items}
                onGetTotal={totalPrice}
                OnGetTitle="سلة التسوق"
                loggedInUser={loggedInUser}
                onRemoveItem={removeFromCart}
                click={click}
                setClick={setClick}
              />
            ) : (
              <PageEmpty
                onGetTitle="سلة التسوق"
                onGetLogo={CartLight}
                onGetText1="عربة التسوق فارغة "
                onGetButtonText="اذهب للتسوق الان"
                onGetPath="/pharmacy"
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PharmacyCart
