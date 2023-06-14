/*     Hooks      */
import React, { useState, useEffect } from 'react'
/*     Components      */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import ManufacturerProductContent from './ManufacturerProductContent'
import SideBar from '../../pharmacy/myProducts/sideBar/SideBar'
import Pagination from '../../pharmacy/myProducts/Pagination'
/*     API      */
import * as ProductAPI from '../../../../utils/productsAPI'

const ManufacturerProducts = ({ loggedInUser, logout }) => {
  const [items, setItems] = useState([])
  const [selectedType, setSelectedType] = useState('كل المنتجات')
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    const updateItems = async () => {
      const products = await ProductAPI.getManufacturerProducts(loggedInUser)
      setItems(products ? products : [])
    }
    updateItems()
  }, [])

  useEffect(() => {
    const updateItems = async () => {
      if (selectedType !== 'كل المنتجات') {
        const products = await ProductAPI.getTypeManufacturer(loggedInUser, selectedType)
        setItems(products)
        setSelectedCategories([])
      } else {
        const products = await ProductAPI.getManufacturerProducts(loggedInUser)
        setItems(products ? products : [])
        setSelectedCategories([])
      }
    }
    updateItems()
  }, [selectedType])

  useEffect(() => {
    const updateItems = async () => {
      if (selectedCategories.length > 0) {
        const products = await ProductAPI.getCategoryManufacturer(loggedInUser, selectedCategories)
        setItems(products)
      } else if (selectedType !== 'كل المنتجات') {
        const products = await ProductAPI.getTypeManufacturer(loggedInUser, selectedType)
        setItems(products ? products : [])
      }
    }
    updateItems()
  }, [selectedCategories])

  const changeSelectedType = (value) => {
    setSelectedType(value)
  }

  const changeSelectedCategories = (value) => {
    setSelectedCategories(value)
  }

  let result = 9
  if (innerWidth === 1920) {
    result = 15
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(result)

  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="flex mx-32">
        <SideBar
          changeSelectedType={changeSelectedType}
          changeSelectedCategories={changeSelectedCategories}
          selectedType={selectedType}
          selectedCategories={selectedCategories}
          loggedInUser={loggedInUser}
          setCurrentPage={setCurrentPage}
        />
        <ManufacturerProductContent
          items={items}
          firstProductIndex={firstProductIndex}
          lastProductIndex={lastProductIndex}
        />
      </div>
      <div className="ml-64 2xl:ml-[11.7rem]">
        <Pagination
          totalProducts={items?.length}
          productsPerPage={productsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default ManufacturerProducts
