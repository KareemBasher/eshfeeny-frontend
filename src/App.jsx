import './App.css'

/*         Hooks        */
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

/*         Page imports         */
import LandingPage from './components/pages/onBoarding/LandingPage'
import SigninOptions from './components/pages/onBoarding/SigninOptions'
import SignUp from './components/pages/signUp/SignUp'
import Login from './components/pages/login/Login'
import ForgotPassword from './components/pages/login/ForgotPassword'
import VerifyCode from './components/pages/login/VerifyCode'
import NewPassword from './components/pages/login/NewPassword'
import ErrorPage from './components/common/ErrorPage'
import Mobile from './components/pages/mobile/Mobile'
/*     User     */
import Main from './components/pages/user/main/Main'
import Favourites from './components/pages/user/favourites/Favourites'
import Cart from './components/pages/user/cart/Cart'
import Map from './components/pages/user/map/Map'
import Profile from './components/pages/user/profile/Profile'
import SearchResults from './components/pages/user/SearchResults'
import ProductPage from './components/pages/user/productPage/ProductPage'
import AlternativesPage from './components/pages/user/AlternativesPage'
import Prescription from './components/pages/user/Prescription'
import InsuranceCompanies from './components/pages/user/insurance/InsuranceCompanies'
import CompanyPage from './components/pages/user/insurance/CompanyPage'
import InsuranceCardPage from './components/pages/user/insurance/InsuranceCardPage'
import AddCard from './components/pages/user/insurance/AddCard'
import CategoryPage from './components/pages/categoryPage/CategoryPage'
import BrandsList from './components/pages/brands/BrandsPage'
import BrandProducts from './components/pages/brands/BrandProducts'
import UserProtectedRoutes from './UserProtectedRoutes'
/*      Pharmacy     */
import Pharmacy from './components/pages/pharmacy/Pharmacy'
import PharmacyFavourits from './components/pages/pharmacy/favourites/PharmacyFavourites'
import PharmacyCart from './components/pages/pharmacy/cart/PharmacyCart'
import PharmacyProducts from './components/pages/pharmacy/myProducts/PharmacyProducts'
import PharmacyProfile from './components/pages/pharmacy/profile/PharmacyProfile'
import PharmacyBrandsList from './components/pages/pharmacy/brands/BrandsPage'
import PharmacyBrandProducts from './components/pages/pharmacy/brands/BrandProducts'
import PharmacySearchResults from './components/pages/pharmacy/SearchResults'
import PharmacyProductPage from './components/pages/pharmacy/productPage/ProductPage'
import PharmacyCategoryPage from './components/pages/pharmacy/categoryPage/PharmacyCategoryItems'
import PharmacyConfirmOrder from './components/pages/pharmacy/PharmacyConfirmOrder'
import PharmacyProtectedRoutes from './PharmacyProtectedRoutes'
/*   Manufacturer   */
import Manufacturer from './components/pages/manufacturer/main/manufacturer'
import ManufacturerCurrentOrders from './components/pages/manufacturer/orders/CurrentOrders'
import ManufacturerDelayedOrders from './components/pages/manufacturer/orders/DelayedOrders'
import ManufacturerProducts from './components/pages/manufacturer/manufacturerProducts/ManufacturerProducts'
import ManufacturerProfile from './components/pages/manufacturer/profile/ManufacturerProfile'
import ManufacturerSearchResults from './components/pages/manufacturer/ManufacturerSearchResults'
import ManufacturerProtectedRoutes from './ManufacturerProtectedRoutes'

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

  if (window.innerWidth <= 800) return <Mobile />

  return (
    <Routes>
      <Route path="/mobile" element={<Mobile />} />
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
      <Route
        path="/pharmacySearchResults/:searchResults"
        element={<PharmacySearchResults loggedInUser={loggedInUser} logout={logout} />}
      />
      <Route
        path="/pharmacySearchResults/"
        element={<PharmacySearchResults loggedInUser={loggedInUser} empty={true} logout={logout} />}
      />
      {/* Pharmacy protected routes */}

      {/* Manufacturer protected routes */}
      <Route
        element={<ManufacturerProtectedRoutes loggedInUser={loggedInUser} type="manufacturer" />}
      >
        <Route
          path="/manufacturer"
          element={<Manufacturer loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/manufacturerProfile"
          element={<ManufacturerProfile loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/factoryProducts"
          element={<ManufacturerProducts loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/currentOrders"
          element={<ManufacturerCurrentOrders loggedInUser={loggedInUser} logout={logout} />}
        />
        <Route
          path="/DelayedOrders"
          element={<ManufacturerDelayedOrders loggedInUser={loggedInUser} logout={logout} />}
        />
      </Route>
      <Route
        path="/manufacturerSearchResults/:searchResults"
        element={<ManufacturerSearchResults loggedInUser={loggedInUser} logout={logout} />}
      />
      <Route
        path="/manufacturerSearchResults/"
        element={
          <ManufacturerSearchResults loggedInUser={loggedInUser} empty={true} logout={logout} />
        }
      />
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
