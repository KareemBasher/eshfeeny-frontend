import './App.css'

/*         Hooks        */
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

/*         Page imports         */
import Login from './components/pages/login/Login'
import Cart from './components/pages/cart/Cart'
import ProductPage from './components/pages/productPage/ProductPage'
import Profile from './components/pages/profile/Profile'
import LandingPage from './components/pages/LandingPage'
import Favourites from './components/pages/favourites/Favourites'
import ForgotPassword from './components/pages/login/ForgotPassword'
import VerifyCode from './components/pages/login/VerifyCode'
import AlternativesPage from './components/pages/AlternativesPage'
import SearchResults from './components/pages/SearchResults'
import Main from './components/pages/main/Main'
import Prescription from './components/pages/Prescription'
import SignUp from './components/pages/signUp/SignUp'
import InsuranceCompanies from './components/pages/insurance/InsuranceCompanies'
import CompanyPage from './components/pages/insurance/CompanyPage'
import InsuranceCardPage from './components/pages/insurance/InsuranceCardPage'
import NewPassword from './components/pages/login/NewPassword'

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
        element={loggedInUser ? <Navigate to="/home" /> : <Navigate to="/landingPage" />}
      />
      <Route path="/favorites" element={<Favourites loggedInUser={loggedInUser} />} />
      <Route path="/login" element={<Login changeLoggedUser={changeLoggedInUser} />} />
      <Route path="/cart" element={<Cart loggedInUser={loggedInUser} />} />
      <Route path="/product/:id" element={<ProductPage loggedInUser={loggedInUser} />} />
      <Route path="/profile/" element={<Profile loggedInUser={loggedInUser} />} />
      <Route path="/forgotPassword/" element={<ForgotPassword />} />
      <Route path="/forgotPassword/verify/:email" element={<VerifyCode />} />
      <Route
        path="/searchResults/:searchResults"
        element={<SearchResults loggedInUser={loggedInUser} />}
      />
      <Route
        exact
        path="/alternatives/:id"
        element={<AlternativesPage loggedInUser={loggedInUser} />}
      />
      <Route path="/home" element={<Main loggedInUser={loggedInUser} />} />
      <Route path="/prescription" element={<Prescription loggedInUser={loggedInUser} />} />
      <Route path="/signup" element={<SignUp changeLoggedUser={changeLoggedInUser} />} />
      <Route
        path="/insuranceCompanies"
        element={<InsuranceCompanies loggedInUser={loggedInUser} />}
      />
      <Route
        path="/insuranceCompanies/:company"
        element={<CompanyPage loggedInUser={loggedInUser} />}
      />
      <Route
        path="/insuranceCards/:company"
        element={<InsuranceCardPage loggedInUser={loggedInUser} />}
      />
      <Route path="/newPassword/:code" element={<NewPassword />} />
    </Routes>
  )
}

export default App
