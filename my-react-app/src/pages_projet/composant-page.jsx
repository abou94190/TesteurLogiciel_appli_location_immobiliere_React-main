import { Outlet } from "react-router-dom";
import Header from "../composants/header";
import Footer from "../composants/footer";
import { useState, useEffect } from "react";

function Root() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const styles = {
    rootContainer: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    contentWrapper: {
      maxWidth: '1440px',
      width: '100%',
      margin: '0 auto',
      padding: isMobile ? '0 20px' : isTablet ? '0 50px' : '0 100px',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }
  };

  return (
    <div style={styles.rootContainer}>
      <div style={styles.contentWrapper}>
        <Header />
        <main style={styles.main}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Root;