import { Routes, Route, Link } from 'react-router-dom'
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
        <div className="footer-content">
          <h3 className="footer-brand">S.U.M.A.R.</h3>
          <p className="footer-slogan">Servimos Unidos Mirando Al Redentor</p>

          <nav className="footer-links">
            <Link to="/que-es-sumar" className="footer-link">Qué es Sumar</Link>
            <Link to="/mensajes" className="footer-link">Mensajes</Link>
            <Link to="/como-llegar" className="footer-link">Cómo Llegar</Link>
          </nav>

          <div className="footer-divider"></div>
          <p className="footer-copy">© 2025 Iglesia SUMAR — Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App