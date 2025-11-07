import { Link, useLocation } from 'react-router-dom';

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    padding: '20px 40px'
  },
  logo: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '24px',
    color: '#FF6060',
    display: 'flex',
    alignItems: 'center',
    height: '68px',
    width: '210.32px',
    margin: 0
  },
  nav: {
    display: 'flex',
    gap: '40px',
    alignItems: 'flex-end'
  },
  navLink: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '24px',
    color: 'black',
    textDecoration: 'none',
    lineHeight: '143%',
    verticalAlign: 'bottom'
  },
  navLinkActive: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '24px',
    color: 'black',
    textDecoration: 'underline',
    textUnderlineOffset: '0%',
    textDecorationThickness: '0%',
    lineHeight: '143%',
    verticalAlign: 'bottom'
  }
};

function Header() {
  const location = useLocation();

  return (
    <header style={styles.headerContainer}>
      <h1 style={styles.logo}>
        <span>
          <img src="src/assets/LOGO.png" alt="Maison" />
        </span>
      </h1>
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