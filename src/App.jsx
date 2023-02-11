import './App.css'
import LandingPage from './components/pages/landingPage/index.jsx'
import Favourites from './components/pages/Favourites'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/favorites" element={<Favourites/>}/>
    </Routes>
  )
}

export default App
