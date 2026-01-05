import React, { useState, useEffect } from "react";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  
  const styles = {
    footerContainer: {
      backgroundColor: '#000000',
      color: 'white',
      textAlign: 'center',
      padding: isMobile ? '62px 20px' : isTablet ? '50px 40px' : '66px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 'auto',
      width: '100%',
    },
    logo: {
      width: '122px',
      height: 'auto',
      marginBottom: '28px'
    },
    text: {
      fontSize: isMobile ? '12px' : isTablet ? '18px' : '24px',
      fontWeight: 500,
      fontFamily: 'Montserrat, sans-serif',
      margin: 0,
      color: 'white',
      lineHeight: isMobile ? '143%' : 'normal',
      maxWidth: isMobile ? '134px' : 'none',
    }
  };
  
  return (
    <footer style={styles.footerContainer}>
      <img src="/src/assets/LOGO-white.svg" alt="Kasa Logo" style={styles.logo} />
      <p style={styles.text}>
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}