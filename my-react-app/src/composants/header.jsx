import { Link, useLocation } from 'react-router-dom';

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '45px 0 50px 0',
  },
  logo: {
    height: '68px',
    width: 'auto',
  },
  nav: {
    display: 'flex',
    gap: '57px',
    alignItems: 'center',
  },
  navLink: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '24px',
    color: '#000000',
    textDecoration: 'none',
    transition: 'text-decoration 0.2s',
  },
  navLinkActive: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '24px',
    color: '#000000',
    textDecoration: 'underline',
  }
};

function Header() {
  const location = useLocation();

  return (
    <header style={styles.headerContainer}>
      <Link to="/">
        <img src="/src/assets/LOGO.png" alt="Kasa Logo" style={styles.logo} />
      </Link>
      <nav style={styles.nav}>
        <Link 
          to="/" 
          style={location.pathname === '/' ? styles.navLinkActive : styles.navLink}
        >
          Accueil
        </Link>
        <Link 
          to="/about" 
          style={location.pathname === '/about' ? styles.navLinkActive : styles.navLink}
        >
          À Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;