import React, { useEffect, useState } from 'react'
/*    Components    */
import PharmacyNavigation from '../../../common/PharmacyNavigation'
import PharmacyProfileContent from './PharmacyProfileContent'
import PharmacyChangePassword from './PharmacyChangePassword'
/*    API    */
import * as PharmaciesApi from '../../../../utils/pharmaciesAPI'

const PharmacyProfile = ({ loggedInUser, logout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      setUser(await PharmaciesApi.getPharmacy(loggedInUser))
    }

    getUser()
  }, [])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div>
        <PharmacyNavigation loggedInUser={loggedInUser} logout={logout} />
      </div>
      {isOpen ? (
        <PharmacyChangePassword toggleModal={toggleModal} user={user ? user : {}} />
      ) : (
        <PharmacyProfileContent toggleModal={toggleModal} user={user ? user : {}} />
      )}
    </div>
  )
}

export default PharmacyProfile
