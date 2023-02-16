/*        Components       */
import UserNavigation from '../../common/UserNavigation'
import ProfileContent from './ProfileContent'
/*        Hooks       */
import { useEffect, useState } from 'react'
/*        API       */
import * as UsersAPI from '../../../utils/usersAPI'

const Profile = ({ loggedInUser }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      setUser(await UsersAPI.getUser(loggedInUser))
    }

    getUser()
  }, [])

  return (
    <>
      <UserNavigation />
      <ProfileContent user={user} />
    </>
  )
}

export default Profile
