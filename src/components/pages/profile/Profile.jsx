// Components
import UserNavigation from '../../common/UserNavigation'
import ProfileContent from './ProfileContent'
import ChangePassword from './ChangePassword'
import { useState } from 'react'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <UserNavigation />
      {isOpen ? (
        <ChangePassword toggleModal={toggleModal} />
      ) : (
        <ProfileContent toggleModal={toggleModal} />
      )}
    </>
  )
}

export default Profile
