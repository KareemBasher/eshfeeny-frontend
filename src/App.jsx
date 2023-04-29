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
import Map from './components/pages/map/Map'
import AddCard from './components/pages/insurance/AddCard'
import CategoryPage from './components/pages/categoryPage/CategoryPage'
import ErrorPage from './components/common/ErrorPage'
import Pharmacy from './components/pages/pharmacy/Pharmacy'
import UserProtectedRoutes from './UserProtectedRoutes'
import PharmacyProtectedRoutes from './PharmacyProtectedRoutes'
import PharmacyCart from './components/pages/pharmacy/cart/PharmacyCart'
import PharmacyFavourits from './components/pages/pharmacy/favourites/PharmacyFavourites'
import Brands from './components/pages/brands/BrandPage'
import BrandsList from './components/pages/brands/BrandsList'
import PharmacyProfile from './components/pages/pharmacy/PharmacyProfile'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedUser'])
  const [loggedInUser, setLoggedUser] = useState(cookies.loggedUser)
  const [loggedInUserType, setLoggedInUserType] = useState(cookies.loggedInUserType)

  const changeLoggedInUser = (user, type) => {
    setLoggedUser(user)
    setLoggedInUserType(type)
    setCookie('loggedUser', user, { path: '/' })
    setCookie('loggedInUserType', type, { path: '/' })
  }

  const logout = () => {
    setLoggedUser(null)
    setLoggedInUserType(null)
    removeCookie('loggedUser', { path: '/' })
    removeCookie('loggedInUserType', { path: '/' })
  }

  return (
    <Routes>
      <Route path="/landingPage" element={<LandingPage />} />
      <Route
        path="/landingPage/:type"
        element={<SigninOptions changeLoggedInUser={changeLoggedInUser} />}
      />
      <Route
        path="/"
        element={loggedInUser ? <Navigate to="/home" /> : <Navigate to="/landingPage" />}
      />
      <Route path="/login/:type" element={<Login changeLoggedUser={changeLoggedInUser} />} />

      {/* User protected routes */}
      <Route element={<UserProtectedRoutes loggedInUser={loggedInUser} type={loggedInUserType} />}>
        <Route
          path="/favorites"
          element={<Favourites loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route path="/cart" element={<Cart loggedInUser={loggedInUser} logout={logout} />} />
        <Route
          path="/product/:id"
          element={<ProductPage loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/products/type/:type"
          element={<CategoryPage loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/products/type/:type/category/:category"
          element={<CategoryPage loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/searchResults/:searchResults"
          element={<SearchResults loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/searchResults/"
          element={<SearchResults loggedInUser={loggedInUser} empty={true} logout={logout} />}
        />
        <Route path="/profile/" element={<Profile loggedInUser={loggedInUser} logout={logout} />} />
        <Route
          exact
          path="/alternatives/:id"
          element={<AlternativesPage loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route path="/home" element={<Main loggedInUser={loggedInUser} logout={logout} />} />
        <Route
          path="/prescription"
          element={<Prescription loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/insuranceCompanies"
          element={<InsuranceCompanies loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/insuranceCompanies/:id"
          element={<CompanyPage loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/insuranceCards/:companyId"
          element={<InsuranceCardPage loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route path="/location/:id" element={<Map loggedInUser={loggedInUser} logout={logout} />} />
        <Route path="/location/" element={<Map loggedInUser={loggedInUser} logout={logout} />} />
        <Route
          path="/addCard/:id"
          element={<AddCard loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/brands"
          element={<BrandsList loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/brands/:brand"
          element={<Brands loggedInUser={loggedInUser} logout={logout} />}
        />
      </Route>
      {/* User protected routes */}

      {/* Pharmacy protected routes */}
      <Route element={<PharmacyProtectedRoutes loggedInUser={loggedInUser} type="pharmacy" />}>
        <Route
          path="/pharmacy"
          element={<Pharmacy loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/pharmacyCart"
          element={<PharmacyCart loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/pharmacyFavourits"
          element={<PharmacyFavourits loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/pharmacyProfile"
          element={<PharmacyProfile loggedInUser={loggedInUser} logout={logout} />}
        />
      </Route>
      {/* Pharmacy protected routes */}

      <Route
        path="/*"
        element={<ErrorPage loggedInUser={loggedInUser} type={loggedInUserType} />}
      />
      <Route path="/forgotPassword/:type" element={<ForgotPassword />} />
      <Route path="/forgotPassword/verify/:email/:type" element={<VerifyCode />} />
      <Route path="/signup/:type" element={<SignUp changeLoggedUser={changeLoggedInUser} />} />
      <Route path="/newPassword/:code/:type" element={<NewPassword />} />
    </Routes>
  )
}

export default App
