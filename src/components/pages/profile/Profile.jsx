/*        Components       */
import UserNavigation from '../../common/UserNavigation'
import ProfileContent from './ProfileContent'
/*        Hooks       */
import { useEffect, useState } from 'react'
/*        API       */
import * as UsersAPI from '../../../utils/usersAPI'

import ChangePassword from './ChangePassword'

const Profile = ({ loggedInUser, logout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      setUser(await UsersAPI.getUser(loggedInUser))
    }

    getUser()
  }, [])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <UserNavigation loggedInUser={loggedInUser} logout={logout} />
      {isOpen ? (
        <ChangePassword toggleModal={toggleModal} user={user ? user : {}} />
      ) : (
        <ProfileContent toggleModal={toggleModal} user={user ? user : {}} />
      )}
    </>
  )
}

export default Profile
