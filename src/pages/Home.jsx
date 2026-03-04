import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <img
            src="/logo-sumar.png"
            alt="Logo SUMAR"
            className="home-logo"
          />
          <h1 className="home-title">
            Servimos Unidos Mirando Al Redentor
          </h1>
          <p className="home-subtitle">
            Una iglesia que cree en el poder transformador de Dios
          </p>
          <div className="home-cta">
            <Link to="/que-es-sumar" className="btn btn-primary">
              Conocenos
            </Link>
            <Link to="/como-llegar" className="btn btn-secondary">
              Visitanos
            </Link>
          </div>
        </div>
      </section>

      <section className="home-highlight">
        <div className="highlight-container">
          <div className="highlight-card">
            <span className="highlight-icon">🙏</span>
            <h3>Reuniones</h3>
            <p>Domingos 10:00 hs y 18:00 hs</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">💜</span>
            <h3>Comunidad</h3>
            <p>Un lugar para crecer juntos en fe</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">📖</span>
            <h3>La Palabra</h3>
            <p>La Biblia es la base de nuestra fe</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home