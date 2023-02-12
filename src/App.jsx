import './App.css'
import LandingPage from './components/pages/LandingPage.jsx'
import Favourites from './components/pages/favourites/Favourites'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './components/pages/Login'
import Cart from './components/pages/cart/Cart'
function App() {
  const [loggedUser, setLoggedUser] = useState(null)

  const changeLoggedUser = (user) => {
    setLoggedUser(user)
  }

  return (
    <Routes>
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/favorites" element={<Favourites loggedUser={loggedUser} />} />
      <Route path="/login" element={<Login changeLoggedUser={changeLoggedUser} />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
