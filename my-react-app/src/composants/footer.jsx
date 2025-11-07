import React from "react";

const styles = {
  footerContainer: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '1440px',
    height: '209px'
  },
  logo: {
    width: '122px',
    height:'39.44px',
    marginBottom: '1rem'
  },
  text: {
    fontSize: '0.9rem',
    whiteSpace: 'pre-line',
    margin: 0
  }
};

export default function Footer() {
  const rights = "© 2020 Kasa. All rights reserved";

  return (
    <footer style={styles.footerContainer}>
      <img src="/src/assets/LOGO-white.svg" alt="Kasa Logo" style={styles.logo} />
      <p style={styles.text}>{rights}</p>
    </footer>
  );
}