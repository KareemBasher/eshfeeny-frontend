import React from 'react'
import { useParams } from 'react-router-dom'
import UserNavigation from '../../common/UserNavigation'

const CompanyPage = ({ loggedInUser }) => {
  const { company } = useParams()
  return (
    <div>
      <UserNavigation loggedInUser={loggedInUser} />
    </div>
  )
}

export default CompanyPage
