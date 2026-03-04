import '../styles/ComoLlegar.css'

const ComoLlegar = () => {
  return (
    <div className="llegar-page">
      <header className="llegar-hero">
        <h1>Cómo Llegar</h1>
        <p>¡Te esperamos con los brazos abiertos!</p>
      </header>

      <section className="llegar-section">
        <div className="llegar-grid">
          <div className="llegar-info">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3>Dirección</h3>
              <p>Calle Ejemplo 1234, Ciudad, País</p>
            </div>

            <div className="info-card">
              <span className="info-icon">🕐</span>
              <h3>Horarios de reunión</h3>
              <p>Domingos 10:00 hs y 18:00 hs</p>
              <p>Miércoles 20:00 hs</p>
            </div>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <h3>Contacto</h3>
              <p>+54 11 1234-5678</p>
              <p>info@iglesiasumar.com</p>
            </div>
          </div>

          <div className="llegar-mapa">
            <div className="mapa-placeholder">
              <span>🗺️</span>
              <p>Acá irá el mapa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComoLlegar