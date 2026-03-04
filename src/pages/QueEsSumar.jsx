import '../styles/QueEsSumar.css'

const valores = [
  {
    titulo: "Responsabilidad",
    descripcion: "Lo que hacemos, lo haremos bien.",
    emoji: "✅"
  },
  {
    titulo: "Honestidad e Integridad",
    descripcion: "Ejecutamos las acciones que Dios nos encomienda hacer como cuerpo.",
    emoji: "💎"
  },
  {
    titulo: "Respeto",
    descripcion: "Valoramos y respetamos todas las iglesias y ministerios del cuerpo de Cristo.",
    emoji: "🤝"
  },
  {
    titulo: "Capacitación",
    descripcion: "La Biblia es el libro que estudiamos y sobre el cual promovemos su aprendizaje; es la base de nuestra fe y doctrina.",
    emoji: "📖"
  },
  {
    titulo: "Cooperación",
    descripcion: "Todo lo material y los talentos existentes que Dios nos ha dado, son complementos puestos al servicio de la obra de Dios para que millones de almas conozcan el evangelio.",
    emoji: "🌍"
  },
  {
    titulo: "Oración",
    descripcion: "Trae la divina dirección y guía para las actividades de SUMAR.",
    emoji: "🙏"
  },
  {
    titulo: "Entusiasmo",
    descripcion: "Obramos con pasión sabiendo que Dios está con nosotros.",
    emoji: "🔥"
  },
  {
    titulo: "Unidad",
    descripcion: "Elegimos estar unidos siempre porque así Dios nos necesita.",
    emoji: "💜"
  },
  {
    titulo: "Adoración",
    descripcion: "Reconocemos siempre que Dios es quien merece la gloria de todo lo que sucedió en SUMAR.",
    emoji: "🎵"
  }
]

const QueEsSumar = () => {
  return (
    <div className="sumar-page">
      <header className="sumar-hero">
        <img
          src="/logo-sumar.png"
          alt="Logo SUMAR"
          className="sumar-hero-logo"
        />
        <h1>¿Qué es Sumar?</h1>
        <p>Servimos Unidos Mirando Al Redentor</p>
      </header>

      <section className="valores-section">
        <h2 className="valores-title">Nuestros Valores</h2>
        <div className="valores-grid">
          {valores.map((valor, index) => (
            <div className="valor-card" key={index}>
              <span className="valor-emoji">{valor.emoji}</span>
              <h3 className="valor-nombre">{valor.titulo}</h3>
              <p className="valor-desc">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default QueEsSumar