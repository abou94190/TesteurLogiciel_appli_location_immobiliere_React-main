import React from "react";

const styles = {
  footerContainer: {
    backgroundColor: '#000000',
    color: 'white',
    textAlign: 'center',
    padding: '66px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    height: '209px',
    width: '1440px'
  },
  logo: {
    width: '122px',
    height: 'auto',
    marginBottom: '28px'
  },
  text: {
    fontSize: '24px',
    fontWeight: 500,
    fontFamily: 'Montserrat, sans-serif',
    lineHeight: '143%',
    letterSpacing: '0%',
    textAlign: 'center',
    margin: 0,
    color: 'white',
    width: '513px',
    height: '46px'
  }
};

const mobileStyles = {
  footerContainer: {
    padding: '62px 0'
  },
  text: {
    fontSize: '12px',
    lineHeight: '1.4'
  }
};

export default function Footer() {
  const isMobile = window.innerWidth <= 768;
  const currentStyles = isMobile ? mobileStyles : {};
  
  return (
    <footer style={{...styles.footerContainer, ...currentStyles.footerContainer}}>
      <img src="/src/assets/LOGO-white.svg" alt="Kasa Logo" style={styles.logo} />
      <p style={{...styles.text, ...currentStyles.text}}>
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}