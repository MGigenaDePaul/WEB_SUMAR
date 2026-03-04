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

      <section className="home-reuniones">
        <div className="reuniones-container">
          <span className="reuniones-label">Te esperamos</span>
          <h2 className="reuniones-title">Reuniones</h2>
          <div className="reuniones-time">
            <span className="reuniones-day">Sábados</span>
            <div className="reuniones-divider"></div>
            <span className="reuniones-hour">19:30h</span>
          </div>
          <Link to="/como-llegar" className="btn btn-reuniones">
            ¿Cómo llegar?
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home