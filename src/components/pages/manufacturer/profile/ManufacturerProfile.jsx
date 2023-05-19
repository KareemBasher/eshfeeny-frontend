import React, { useEffect, useState } from 'react'
/*    Components    */
import ManufacturerNavigation from '../../../common/ManufacturerNavigation'
import ManufacturerProfileContent from './ManufacturerProfileContent'
import ManufacturerChangePassword from './ManufacturerChangePassword'
/*    API    */
import { getManufacturer } from '../../../../utils/manufacturersAPI'

const ManufacturerProfile = ({ loggedInUser, logout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      setUser(await getManufacturer(loggedInUser))
    }

    getUser()
  }, [])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div>
        <ManufacturerNavigation loggedInUser={loggedInUser} logout={logout} />
      </div>
      {isOpen ? (
        <ManufacturerChangePassword toggleModal={toggleModal} user={user ? user : {}} />
      ) : (
        <ManufacturerProfileContent toggleModal={toggleModal} user={user ? user : {}} />
      )}
    </div>
  )
}

export default ManufacturerProfile
