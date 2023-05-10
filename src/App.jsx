import './App.css'

/*         Hooks        */
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

/*         Page imports         */
import Login from './components/pages/login/Login'
import Cart from './components/pages/user/cart/Cart'
import ProductPage from './components/pages/user/productPage/ProductPage'
import Profile from './components/pages/user/profile/Profile'
import LandingPage from './components/pages/onBoarding/LandingPage'
import SigninOptions from './components/pages/onBoarding/SigninOptions'
import Favourites from './components/pages/user/favourites/Favourites'
import ForgotPassword from './components/pages/login/ForgotPassword'
import VerifyCode from './components/pages/login/VerifyCode'
import AlternativesPage from './components/pages/user/AlternativesPage'
import SearchResults from './components/pages/user/SearchResults'
import Main from './components/pages/user/main/Main'
import Prescription from './components/pages/user/Prescription'
import SignUp from './components/pages/signUp/SignUp'
import InsuranceCompanies from './components/pages/user/insurance/InsuranceCompanies'
import CompanyPage from './components/pages/user/insurance/CompanyPage'
import InsuranceCardPage from './components/pages/user/insurance/InsuranceCardPage'
import NewPassword from './components/pages/login/NewPassword'
import Map from './components/pages/user/map/Map'
import AddCard from './components/pages/user/insurance/AddCard'
import CategoryPage from './components/pages/categoryPage/CategoryPage'
import ErrorPage from './components/common/ErrorPage'
import Pharmacy from './components/pages/pharmacy/Pharmacy'
import UserProtectedRoutes from './UserProtectedRoutes'
import PharmacyProtectedRoutes from './PharmacyProtectedRoutes'
import PharmacyCart from './components/pages/pharmacy/cart/PharmacyCart'
import PharmacyFavourits from './components/pages/pharmacy/favourites/PharmacyFavourites'
import BrandProducts from './components/pages/brands/BrandProducts'
import BrandsList from './components/pages/brands/BrandsPage'
import PharmacyProfile from './components/pages/pharmacy/profile/PharmacyProfile'
import PharmacyProducts from './components/pages/pharmacy/myProducts/PharmacyProducts'
import PharmacyProductPage from './components/pages/pharmacy/productPage/ProductPage'
import PharmacyCategoryPage from './components/pages/pharmacy/categoryPage/PharmacyCategoryItems'
import PharmacyBrandProducts from './components/pages/pharmacy/brands/BrandProducts'
import PharmacyBrandsList from './components/pages/pharmacy/brands/BrandsPage'
import PharmacyConfirmOrder from './components/pages/pharmacy/PharmacyConfirmOrder'
/*   Manufacturer   */
import ManufacturerProtectedRoutes from './ManufacturerProtectedRoutes'
import Manufacturer from './components/pages/manufacturer/main/manufacturer'

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
          element={<BrandProducts loggedInUser={loggedInUser} logout={logout} />}
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
        <Route
          path="/pharmacyProducts"
          element={<PharmacyProducts loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/pharmacyProduct/:id"
          element={
            <PharmacyProductPage loggedInUser={loggedInUser} logout={logout} type="pharmacy" />
          }
        />
        <Route
          path="/pharmacyProducts/type/:type"
          element={<PharmacyCategoryPage loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/pharmacyProducts/type/:type/category/:category"
          element={<PharmacyCategoryPage loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/pharmacyBrands"
          element={<PharmacyBrandsList loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/pharmacyBrands/:brand"
          element={<PharmacyBrandProducts loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/pharmacyConfirm"
          element={<PharmacyConfirmOrder loggedInUser={loggedInUser} logout={logout} />}
        />
      </Route>
      {/* Pharmacy protected routes */}

      {/* Manufacturer protected routes */}
      <Route
        element={<ManufacturerProtectedRoutes loggedInUser={loggedInUser} type="manufacturer" />}
      >
        <Route
          path="/manufacturer"
          element={<Manufacturer loggedInUser={loggedInUser} logout={logout} />}
        />
      </Route>
      {/* Manufacturer protected routes */}

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
