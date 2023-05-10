import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const UserProtectedRoutes = ({ loggedInUser, type }) => {
  return loggedInUser && type === 'manufacturer' ? <Outlet /> : <Navigate to="/landingPage" />
}

export default UserProtectedRoutes
