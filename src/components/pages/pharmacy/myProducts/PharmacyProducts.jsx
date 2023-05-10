/*     Hooks      */
import React, { useState, useEffect } from 'react'
/*     Components      */
import PharmacyNavigation from '../../../common/PharmacyNavigation'
import PharmacyProductContent from './PharmacyProductContent'
import SideBar from './sideBar/SideBar'
/*     API      */
import * as ProductAPI from '../../../../utils/productsAPI'

const PharmacyProducts = ({ loggedInUser, logout }) => {
  const [items, setItems] = useState([])
  const [selectedType, setSelectedType] = useState('كل المنتجات')
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    const updateItems = async () => {
      const products = await ProductAPI.getPharmacyProducts(loggedInUser)
      setItems(products ? products : [])
    }
    updateItems()
  }, [])

  useEffect(() => {
    const updateItems = async () => {
      if (selectedType !== 'كل المنتجات') {
        const products = await ProductAPI.getTypePharmacy(loggedInUser, selectedType)
        setItems(products)
        setSelectedCategories([])
      } else {
        const products = await ProductAPI.getPharmacyProducts(loggedInUser)
        setItems(products ? products : [])
        setSelectedCategories([])
      }
    }
    updateItems()
  }, [selectedType])

  useEffect(() => {
    const updateItems = async () => {
      if (selectedCategories.length > 0) {
        const products = await ProductAPI.getCategoryPharmacy(loggedInUser, selectedCategories)
        setItems(products)
      } else if (selectedType !== 'كل المنتجات') {
        const products = await ProductAPI.getTypePharmacy(loggedInUser, selectedType)
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

  return (
    <div>
      <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      <div className="flex mx-32">
        <SideBar
          changeSelectedType={changeSelectedType}
          changeSelectedCategories={changeSelectedCategories}
          selectedType={selectedType}
          selectedCategories={selectedCategories}
        />
        <PharmacyProductContent items={items} />
      </div>
    </div>
  )
}

export default PharmacyProducts
