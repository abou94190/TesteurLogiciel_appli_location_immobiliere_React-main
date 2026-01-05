import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const styles = {
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: isMobile ? '20px 0' : isTablet ? '30px 0' : '45px 0 50px 0',
      boxSizing: 'border-box',
    },
    logo: {
      height: isMobile ? '47px' : isTablet ? '56px' : '68px',
      width: 'auto',
    },
    nav: {
      display: 'flex',
      gap: isMobile ? '26px' : isTablet ? '40px' : '57px',
      alignItems: 'center',
    },
    navLink: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: isMobile ? '12px' : isTablet ? '18px' : '24px',
      color: '#000000',
      textDecoration: 'none',
      transition: 'text-decoration 0.2s',
      textTransform: isMobile ? 'uppercase' : 'none',
    },
    navLinkActive: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: isMobile ? '12px' : isTablet ? '18px' : '24px',
      color: '#000000',
      textDecoration: 'underline',
      textTransform: isMobile ? 'uppercase' : 'none',
    }
  };

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