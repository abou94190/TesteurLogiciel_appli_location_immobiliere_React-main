import { Link } from 'react-router-dom';

const styles = {
  cardLink: {
    display: 'block',
    width: '340px',
    height: '340px',
    borderRadius: '10px',
    overflow: 'hidden',
    textDecoration: 'none',
    background: 'linear-gradient(180deg, #ffffff 0%, #0a0a0a 0%, #040404 41%, #000000 100%)',
    position: 'relative',
    transition: 'transform 0.3s',
    '@media (max-width: 768px)': {
      width: '335px',
      height: '255px'
    }
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: 1
  },
  cardTitle: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '20px',
    color: 'white',
    zIndex: 2,
    fontSize: '1.2rem',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
    width: '100%',
    margin: 0,
    boxSizing: 'border-box',
    '@media (max-width: 768px)': {
      padding: '15px',
      fontSize: '1rem'
    }
  }
};

function Card({ locationId, title, cover }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.02)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  // Gestion des styles avec media queries inline
  const cardLinkStyle = {
    ...styles.cardLink,
    '@media (max-width: 768px)': undefined // Supprime la propriété non supportée
  };

  const cardTitleStyle = {
    ...styles.cardTitle,
    '@media (max-width: 768px)': undefined // Supprime la propriété non supportée
  };

  return (
    <Link 
      to={`/locations/${locationId}`} 
      style={{
        ...cardLinkStyle,
        ...(window.innerWidth <= 768 && {
          width: '335px',
          height: '255px'
        })
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={cover} alt={title} style={styles.cardImage} />
      <h3 style={{
        ...cardTitleStyle,
        ...(window.innerWidth <= 768 && {
          padding: '15px',
          fontSize: '1rem'
        })
      }}>{title}</h3>
    </Link>
  );
}

export default Card;