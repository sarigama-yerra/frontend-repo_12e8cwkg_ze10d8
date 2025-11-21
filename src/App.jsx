import Home from './pages/Home'
import Rules from './pages/Rules'
import Lore from './pages/Lore'
import Donate from './pages/Donate'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/lore" element={<Lore />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  )
}

export default App
