import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ComoLlegar from './pages/ComoLlegar'
import QueEsSumar from './pages/QueEsSumar'
import Mensajes from './pages/Mensajes'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/que-es-sumar" element={<QueEsSumar />} />
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/como-llegar" element={<ComoLlegar />} />
        </Routes>
      </main>

      <footer className="footer">
        <img
          src="/logo-sumar.png"
          alt="Logo SUMAR"
          className="footer-logo"
        />
        <p>© 2025 Iglesia SUMAR — Servimos Unidos Mirando Al Redentor</p>
      </footer>
    </div>
  )
}

export default App