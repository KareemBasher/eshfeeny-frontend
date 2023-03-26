import React from 'react'
/*     Components     */
import UserNavigation from '../../common/UserNavigation'
import SideBar from '../../common/sideBar/SideBar'
/*     API     */
import { getCategory } from '../../../utils/productsAPI'
import { useParams } from 'react-router-dom'

const CategoreyPage = ({ loggedInUser }) => {
  const { category } = useParams()

  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
      <SideBar />
    </div>
  )
}

export default CategoreyPage
