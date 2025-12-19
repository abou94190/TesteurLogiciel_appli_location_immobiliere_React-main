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
    width: '100%',
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
    margin: 0,
    color: 'white',
  }
};

const mobileStyles = {
  footerContainer: {
    width: '375px',
    height: '209px',
    padding: '62px 20px',
    opacity: 1,
    position: 'relative', // Pour utiliser top/left sur les enfants
  },
  text: {
    fontSize: '12px',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: '143%',
    letterSpacing: '0%',
    verticalAlign: 'bottom',
    width: '133.59px', // arrondi à 2 décimales
    height: '46px',
    opacity: 1,
    position: 'absolute',
    top: '105px',
    left: '121.09px',
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