import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src="/logo-sumar.png" alt="Logo SUMAR" className="navbar-logo-img" />
        </NavLink>

        <ul className="navbar-links">
          <li>
            <NavLink
              to="/que-es-sumar"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Qué es Sumar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mensajes"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Mensajes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/como-llegar"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Cómo Llegar
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar