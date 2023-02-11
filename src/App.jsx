import './App.css'
import LandingPage from './components/pages/landingPage/index.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/favorites" element={}/>
    </Routes>
  )
}

export default App
