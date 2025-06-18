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
      background: 'none',
      border: 'none',
    },
    link: {
      color: '#804000',
      background: 'none',
      border: 'none',
    },
    dropdownItem: {
      backgroundColor: '#fff8f0',
      color: '#804000',
      background: 'none',
      border: 'none',
      width: '100%',
      textAlign: 'left',
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

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={styles.navbar}>
      <div className="container-fluid">
        <button className="navbar-brand" onClick={handleClick} style={styles.brand}>
          Manu Boutique
        </button>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link" onClick={handleClick} style={styles.link}>Inicio</button>
            </li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" onClick={handleClick} data-bs-toggle="dropdown" aria-expanded="false" style={styles.link}>
                Coleción
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={handleClick} style={styles.dropdownItem}>Nueva temporada</button></li>
                <li><button className="dropdown-item" onClick={handleClick} style={styles.dropdownItem}>Más vendidos</button></li>
                <li><button className="dropdown-item" onClick={handleClick} style={styles.dropdownItem}>Exclusivos online</button></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" onClick={handleClick} data-bs-toggle="dropdown" aria-expanded="false" style={styles.link}>
                Mujer
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={handleClick} style={styles.dropdownItem}>Ropa</button></li>
                <li><button className="dropdown-item" onClick={handleClick} style={styles.dropdownItem}>Zapatos</button></li>
                <li><button className="dropdown-item" onClick={handleClick} style={styles.dropdownItem}>Accesorios</button></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" onClick={handleClick} data-bs-toggle="dropdown" aria-expanded="false" style={styles.link}>
                Hombre
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={handleClick} style={styles.dropdownItem}>Ropa</button></li>
                <li><button className="dropdown-item" onClick={handleClick} style={styles.dropdownItem}>Zapatos</button></li>
                <li><button className="dropdown-item" onClick={handleClick} style={styles.dropdownItem}>Accesorios</button></li>
              </ul>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={handleClick} style={styles.link}>Ofertas</button>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={handleClick} style={styles.link}>Nosotros</button>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={handleClick} style={styles.link}>Contacto</button>
            </li>
          </ul>

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
