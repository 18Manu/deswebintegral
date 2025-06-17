import NavBar from '../componentes/NavBar';

function App() {
  const styles = {
    container: {
      backgroundColor: '#fff8f0',
      color: '#5c3b1e',
      minHeight: '100vh',
      paddingTop: '3rem',
      paddingBottom: '3rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#b35c1e',
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#804000',
    },
    button: {
      backgroundColor: '#b35c1e',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      padding: '0.75rem 2rem',
      fontWeight: 'bold',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <NavBar />
      <div className="container text-center" style={styles.container}>
        <h2 style={styles.title}>Bienvenido a Manu Boutique</h2>
        <hr className="my-4" />
        <p style={styles.subtitle}>
          Donde el estilo cobra vida con elegancia y personalidad.
        </p>

        {/* Botones de navegación destacados */}
        <div className="mt-4">
          {['Mujer', 'Hombre', 'Ofertas'].map((label, index) => (
            <button
              key={index}
              className="btn btn-lg mx-2"
              style={styles.button}
              onMouseOver={e => (e.target.style.backgroundColor = '#a14e18')}
              onMouseOut={e => (e.target.style.backgroundColor = '#b35c1e')}
              onClick={() => alert(`Explorar ${label}`)}
            >
              Explorar {label}
            </button>
          ))}
        </div>

        {/* Imagen principal */}
        <div className="mt-5">
          <img
            src="https://i.ebayimg.com/images/g/ub4AAOSwiL1mzsGd/s-l225.jpg"
            alt="Hombre con traje extravagante"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '550px', maxWidth: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Banner de promoción */}
        <div className="mt-5 p-4 text-white" style={{ backgroundColor: '#b35c1e', borderRadius: '15px' }}>
          <h4>🔥 50% en toda la colección de verano 🔥</h4>
          <p className="mb-0">¡Solo por tiempo limitado!</p>
        </div>

        {/* Colecciones destacadas tipo grid */}
        <div className="container mt-5">
          <h3 className="mb-4" style={{ color: '#b35c1e' }}>Colecciones destacadas</h3>
          <div className="row">
            {['Mujer', 'Hombre', 'Ofertas'].map((cat, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card border-0 shadow h-100">
                  <img
                    src={`https://source.unsplash.com/random/400x400?fashion,${cat.toLowerCase()}`}
                    alt={cat}
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '300px' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: '#5c3b1e' }}>{cat}</h5>
                    <button
                      className="btn btn-sm mt-2"
                      style={styles.button}
                      onMouseOver={e => (e.target.style.backgroundColor = '#a14e18')}
                      onMouseOut={e => (e.target.style.backgroundColor = '#b35c1e')}
                      onClick={() => alert(`Ver más de ${cat}`)}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-5 text-center py-4" style={{ backgroundColor: '#fff0e0', color: '#5c3b1e' }}>
          <small>&copy; 2025 Manu MBoutique. Todos los derechos reservados.</small>
        </footer>
      </div>
    </>
  );
}

export default App;
