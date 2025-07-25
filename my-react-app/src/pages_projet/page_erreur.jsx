import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: '288px',
        lineHeight: '143%',
        color: '#FF6060',
        margin: '0',
      }}>
        404
      </h1>
      <p style={{ 
        fontSize: '36px', 
        marginTop: '139px',
        marginBottom: '139px',
        color: '#FF6060',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
      }}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" style={{
        color: '#000000',
        textDecoration: 'underline',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '18px',
        fontWeight: 500,
      }}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;