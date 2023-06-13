import React from 'react'
/*       Hooks       */
import { useState, useEffect } from 'react'
/*       Icons       */
import RightArrow from '../../../assets/mainPage/RightArrow.svg'
import LeftArrow from '../../../assets/mainPage/LeftArrow.svg'
/*       components       */
import ManufacturerProductContainer from './ManufacturerProductContainer'
/*       API      */
import * as ProductsAPI from '../../../utils/productsAPI'

const ManufacturerCategoryItems = ({
  onGetTitle,
  onGetType,
  onGetCategory,
  onGetContainer,
  loggedInUser
}) => {
  const container = document.querySelector(`.${onGetContainer}`)
  const [products, setProducts] = useState([])
  const [overflow, setOverflow] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      if (onGetType) {
        setProducts(await ProductsAPI.getTypeManufacturer(loggedInUser, onGetType))
      } else {
        setProducts(await ProductsAPI.getCategoryManufacturer(loggedInUser, onGetCategory))
      }
    }
    getProducts()
  }, [])

  const handleLeft = () => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      container.scrollLeft -= 22
      scrollAmount += 9
      if (scrollAmount >= 100) {
        window.clearInterval(slideTimer)
      }
    }, 25)
  }

  const handleRight = () => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      container.scrollLeft += 22
      scrollAmount += 9
      if (scrollAmount >= 100) {
        window.clearInterval(slideTimer)
      }
    }, 25)
  }

  if (products.length > 12) {
    setProducts(products.slice(0, 12))
  }

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

  return (
    <div className="mx-36">
      <div className="flex justify-between">
        <p className="text-right text-[26px] pb-3">{onGetTitle}</p>
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
                <ManufacturerProductContainer onGetProduct={product} loggedInUser={loggedInUser} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
export default ManufacturerCategoryItems
