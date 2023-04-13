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
import LandingPage from './components/pages/onBoarding/LandingPage'
import SigninOptions from './components/pages/onBoarding/SigninOptions'
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
import Map from './components/pages/Map'
import AddCard from './components/pages/insurance/AddCard'
import CategoryPage from './components/pages/categoryPage/CategoryPage'
import ErrorPage from './components/common/ErrorPage'
import Pharmacy from './components/pages/pharmacy/Pharmacy'
import UserProtectedRoutes from './UserProtectedRoutes'
import PharmacyProtectedRoutes from './PharmacyProtectedRoutes'

function App() {
  const [cookies, setCookie] = useCookies(['loggedUser'])
  const [loggedInUser, setLoggedUser] = useState(cookies.loggedUser)
  const [loggedInUserType, setLoggedInUserType] = useState(cookies.loggedInUserType)

  const changeLoggedInUser = (user, type) => {
    setLoggedUser(user)
    setLoggedInUserType(type)
    setCookie('loggedUser', user, { path: '/' })
    setCookie('loggedInUserType', type, { path: '/' })
  }

  return (
    <Routes>
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/landingPage/:type" element={<SigninOptions />} />
      <Route
        path="/"
        element={loggedInUser ? <Navigate to="/home" /> : <Navigate to="/landingPage" />}
      />
      <Route path="/login/:type" element={<Login changeLoggedUser={changeLoggedInUser} />} />

      {/* User protected routes */}
      <Route element={<UserProtectedRoutes loggedInUser={loggedInUser} type={loggedInUserType} />}>
        <Route path="/favorites" element={<Favourites loggedInUser={loggedInUser} />} />
        <Route path="/cart" element={<Cart loggedInUser={loggedInUser} />} />
        <Route path="/product/:id" element={<ProductPage loggedInUser={loggedInUser} />} />
        <Route path="/products/type/:type" element={<CategoryPage loggedInUser={loggedInUser} />} />
        <Route
          path="/products/type/:type/category/:category"
          element={<CategoryPage loggedInUser={loggedInUser} />}
        />
        <Route
          path="/searchResults/:searchResults"
          element={<SearchResults loggedInUser={loggedInUser} />}
        />
        <Route
          path="/searchResults/"
          element={<SearchResults loggedInUser={loggedInUser} empty={true} />}
        />
        <Route path="/profile/" element={<Profile loggedInUser={loggedInUser} />} />
        <Route
          exact
          path="/alternatives/:id"
          element={<AlternativesPage loggedInUser={loggedInUser} />}
        />
        <Route path="/home" element={<Main loggedInUser={loggedInUser} />} />
        <Route path="/prescription" element={<Prescription loggedInUser={loggedInUser} />} />
        <Route
          path="/insuranceCompanies"
          element={<InsuranceCompanies loggedInUser={loggedInUser} />}
        />
        <Route
          path="/insuranceCompanies/:id"
          element={<CompanyPage loggedInUser={loggedInUser} />}
        />
        <Route
          path="/insuranceCards/:companyId"
          element={<InsuranceCardPage loggedInUser={loggedInUser} />}
        />
        <Route path="/location/:id" element={<Map loggedInUser={loggedInUser} />} />
        <Route path="/location/" element={<Map loggedInUser={loggedInUser} />} />
        <Route path="/addCard/:id" element={<AddCard loggedInUser={loggedInUser} />} />
      </Route>
      {/* User protected routes */}

      {/* Pharmacy protected routes */}
      <Route element={<PharmacyProtectedRoutes loggedInUser={loggedInUser} type="pharmacy" />}>
        <Route path="/pharmacy" element={<Pharmacy loggedInUser={loggedInUser} />} />
      </Route>
      {/* Pharmacy protected routes */}

      <Route path="/*" element={<ErrorPage loggedInUser={loggedInUser} />} />
      <Route path="/forgotPassword/:type" element={<ForgotPassword />} />
      <Route path="/forgotPassword/verify/:email" element={<VerifyCode />} />
      <Route path="/signup/:type" element={<SignUp changeLoggedUser={changeLoggedInUser} />} />
      <Route path="/newPassword/:code" element={<NewPassword />} />
    </Routes>
  )
}

export default App
