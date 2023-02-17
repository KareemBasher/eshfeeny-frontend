import './App.css'
/*         Hooks        */
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

/*         Page imports         */
import Login from './components/pages/login/Login'
import Cart from './components/pages/cart/Cart'
import ProductPage from './components/pages/ProductPage'
import Profile from './components/pages/profile/Profile'
import LandingPage from './components/pages/LandingPage.jsx'
import Favourites from './components/pages/favourites/Favourites'
import ForgotPassword from './components/pages/login/ForgotPassword'
import VerifyCode from './components/pages/login/VerifyCode.jsx'

function App() {
  const [cookies, setCookie] = useCookies(['loggedUser'])
  const [loggedInUser, setLoggedUser] = useState(cookies.loggedUser)

  const changeLoggedInUser = (user) => {
    setLoggedUser(user)
    setCookie('loggedUser', user, { path: '/' })
  }

  return (
    <Routes>
      <Route path="/landingPage" element={<LandingPage />} />
      <Route
        path="/"
        element={loggedInUser ? <Navigate to="/products" /> : <Navigate to="/landingPage" />}
      />
      <Route path="/favorites" element={<Favourites loggedInUser={loggedInUser} />} />
      <Route path="/login" element={<Login changeLoggedUser={changeLoggedInUser} />} />
      <Route path="/cart" element={<Cart loggedInUser={loggedInUser} />} />
      <Route path="/product/:id" element={<ProductPage loggedInUser={loggedInUser} />} />
      <Route path="/profile/" element={<Profile loggedInUser={loggedInUser} />} />
      <Route path="/forgotPassword/" element={<ForgotPassword />} />
      <Route exact path="/forgotPassword/verify/:email" element={<VerifyCode />} />
    </Routes>
  )
}

export default App
