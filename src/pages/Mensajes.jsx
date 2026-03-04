import '../styles/Mensajes.css'

const mensajes = [
  {
    titulo: "El poder de la fe",
    pastor: "Pastor Juan",
    fecha: "12 de Enero, 2025",
    resumen: "Descubrí cómo la fe puede transformar cada área de tu vida."
  },
  {
    titulo: "Caminando en unidad",
    pastor: "Pastora María",
    fecha: "5 de Enero, 2025",
    resumen: "La unidad del cuerpo de Cristo es clave para cumplir Su propósito."
  },
  {
    titulo: "Adoración que transforma",
    pastor: "Pastor Juan",
    fecha: "29 de Diciembre, 2024",
    resumen: "Cuando adoramos en espíritu y en verdad, todo cambia."
  }
]

const Mensajes = () => {
  return (
    <div className="mensajes-page">
      <header className="mensajes-hero">
        <h1>Mensajes</h1>
        <p>Reviví las prédicas y enseñanzas de nuestra iglesia</p>
      </header>

      <section className="mensajes-section">
        <div className="mensajes-list">
          {mensajes.map((mensaje, index) => (
            <div className="mensaje-card" key={index}>
              <div className="mensaje-icon">▶</div>
              <div className="mensaje-content">
                <span className="mensaje-fecha">{mensaje.fecha}</span>
                <h3 className="mensaje-titulo">{mensaje.titulo}</h3>
                <p className="mensaje-pastor">Por {mensaje.pastor}</p>
                <p className="mensaje-resumen">{mensaje.resumen}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Mensajes