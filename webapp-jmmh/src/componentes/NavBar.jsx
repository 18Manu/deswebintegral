import React from 'react';

function Navbar() {
  const styles = {
    navbar: {
      backgroundColor: '#fbe8d3',
    },
    brand: {
      color: '#b35c1e',
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
    link: {
      color: '#804000',
    },
    dropdownItem: {
      backgroundColor: '#fff8f0',
      color: '#804000',
    },
    searchInput: {
      borderColor: '#d49a6a',
    },
    searchButton: {
      backgroundColor: '#b35c1e',
      color: '#fff',
      border: 'none',
    },
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={styles.navbar}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={styles.brand}>
          Manu MBoutique
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Menú de navegación */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>Inicio</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={styles.link}>
                Colección
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" style={styles.dropdownItem}>Nueva temporada</a></li>
                <li><a className="dropdown-item" href="#" style={styles.dropdownItem}>Más vendidos</a></li>
                <li><a className="dropdown-item" href="#" style={styles.dropdownItem}>Exclusivos online</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={styles.link}>
                Mujer
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" style={styles.dropdownItem}>Ropa</a></li>
                <li><a className="dropdown-item" href="#" style={styles.dropdownItem}>Zapatos</a></li>
                <li><a className="dropdown-item" href="#" style={styles.dropdownItem}>Accesorios</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={styles.link}>
                Hombre
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" style={styles.dropdownItem}>Ropa</a></li>
                <li><a className="dropdown-item" href="#" style={styles.dropdownItem}>Zapatos</a></li>
                <li><a className="dropdown-item" href="#" style={styles.dropdownItem}>Accesorios</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>Ofertas</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>Nosotros</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>Contacto</a>
            </li>
          </ul>

          {/* 🔍 Buscador a la derecha */}
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar"
              style={styles.searchInput}
            />
            <button className="btn" type="submit" style={styles.searchButton}>
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
