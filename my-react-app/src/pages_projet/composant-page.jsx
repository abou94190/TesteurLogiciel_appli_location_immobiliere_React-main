import { Outlet } from "react-router-dom";
import Header from "../composants/header";
import Footer from "../composants/footer";

const styles = {
  rootContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  contentWrapper: {
    maxWidth: '1440px',
    width: '100%',
    margin: '0 auto',
    padding: '0 100px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  }
};

function Root() {
  return (
    <div style={styles.rootContainer}>
      <div style={styles.contentWrapper}>
        <Header />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Root;