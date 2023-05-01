import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
/*      Components       */
import ProductContainer from '../../../common/ProductContainer'
/*       Icons       */
import ArrowOrange from '../../../../assets/mainPage/ArrowOrange.svg'
import RightArrow from '../../../../assets/mainPage/RightArrow.svg'
import LeftArrow from '../../../../assets/mainPage/LeftArrow.svg'
/*       API        */
import { getType, getCategory, getFavoriteProducts } from '../../../../utils/productsAPI'

const CategoryItems = ({ onGetTitle, onGetType, onGetCategory, onGetContainer, loggedInUser }) => {
  const container = document.querySelector(`.${onGetContainer}`)

  const handleLeft = () => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      container.scrollLeft -= 25
      scrollAmount += 10
      if (scrollAmount >= 100) {
        window.clearInterval(slideTimer)
      }
    }, 25)
  }

  const handleRight = () => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      container.scrollLeft += 25
      scrollAmount += 10
      if (scrollAmount >= 100) {
        window.clearInterval(slideTimer)
      }
    }, 25)
  }

  const [products, setProducts] = useState([])
  const [favouriteProducts, setFavouriteProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      if (onGetCategory === 'get type') {
        setProducts(await getType(onGetType))
      } else {
        setProducts(await getCategory(onGetCategory))
      }
      setFavouriteProducts(await getFavoriteProducts(loggedInUser))
    }
    getProducts()
  }, [])

  if (products.length > 12) {
    setProducts(products.slice(0, 12))
  }

  const [overflow, setOverflow] = useState(false)

  useEffect(() => {
    const isOverflown = (element) => {
      if (element?.scrollWidth > element?.clientWidth) {
        setOverflow(true)
      } else {
        setOverflow(false)
      }
    }
    isOverflown(container)
  }, [container?.scrollWidth])

  const favoriteProductsIDs = favouriteProducts.map((product) => product._id)

  return (
    <div className="mx-36">
      <div className="flex justify-between">
        <p className="text-right text-[26px] pb-3">{onGetTitle}</p>
        {onGetCategory === 'get type' ? (
          <Link
            to={`/products/type/${onGetType}`}
            className="flex border border-orange py-3 px-5 rounded-[10px]"
          >
            <p className="text-left text-orange text-[22px] whitespace-nowrap">عرض الكل</p>
            <img src={ArrowOrange} draggable="false" className="pr-2" />
          </Link>
        ) : (
          <Link
            to={`/products/type/${onGetType}/category/${onGetCategory}`}
            className="flex border border-orange py-3 px-5 rounded-[10px]"
          >
            <p className="text-left text-orange text-[22px] whitespace-nowrap">عرض الكل</p>
            <img src={ArrowOrange} draggable="false" className="pr-2" />
          </Link>
        )}
      </div>
      <div className="flex relative">
        {overflow && (
          <>
            {/*    Right Arrow    */}
            <button
              className="flex absolute justify-center items-center self-center min-w-[42px] min-h-[42px] -right-[42px] bg-[#f5f5f581] rounded-full shadow-md cursor-pointer hover:opacity-60"
              onClick={handleRight}
            >
              <img src={RightArrow} draggable="false" />
            </button>
            {/*    Left Arrow    */}
            <button
              className="flex absolute justify-center items-center self-center min-w-[42px] min-h-[42px] -left-[42px] bg-[#f5f5f581] rounded-full shadow-md cursor-pointer hover:opacity-60"
              onClick={handleLeft}
            >
              <img src={LeftArrow} draggable="false" />
            </button>
          </>
        )}
        {/*      Products     */}
        <div className={`flex w-full pb-7 overflow-x-auto ${onGetContainer} container`}>
          <ol className="flex justify-between">
            {products.map((product) => (
              <li key={product._id}>
                <ProductContainer
                  onGetProduct={product}
                  loggedInUser={loggedInUser}
                  favorites={favoriteProductsIDs}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default CategoryItems
