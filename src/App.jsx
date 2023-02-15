import './App.css'
import LandingPage from './components/pages/LandingPage.jsx'
import Favourites from './components/pages/favourites/Favourites'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './components/pages/Login'
import Cart from './components/pages/cart/Cart'
function App() {
  const [loggedInUser, setLoggedUser] = useState('63d9239b6ff014381890d178')

  const changeLoggedInUser = (user) => {
    setLoggedUser(user)
  }

  return (
    <Routes>
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/favorites" element={<Favourites loggedUser={loggedInUser} />} />
      <Route path="/login" element={<Login changeLoggedUser={changeLoggedInUser} />} />
      <Route path="/cart" element={<Cart loggedInUser={loggedInUser} />} />
    </Routes>
  )
}

export default App
