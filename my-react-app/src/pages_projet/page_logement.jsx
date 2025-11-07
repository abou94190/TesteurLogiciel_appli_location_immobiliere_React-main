import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../composants/slideshow";
import Rating from "../composants/Notes";
import Collapse from "../composants/collapse";

const styles = {
  logementContainer: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '20px',
    height: '415px',
    top: '163px'
  },
  logementInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px'
  },
  leftSection: {
    flex: 1
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '20px'
  },
  title: {
    fontSize: '36px',
    fontWeight: 500,
    color: '#FF6060',
    margin: '0 0 5px 0'
  },
  location: {
    fontSize: '18px',
    color: '#FF6060',
    margin: '0 0 20px 0'
  },
  tagsContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  tag: {
    backgroundColor: '#FF6060',
    color: 'white',
    padding: '3px 15px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 500
  },
  hostInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  hostName: {
    fontSize: '18px',
    fontWeight: 500,
    textAlign: 'right',
    margin: 0,
    width: '93px',
    color: '#ff6b6b'
  },
  hostPicture: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  collapseSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '76px',
    marginTop: '24px'
  },
  loadingMessage: {
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.2rem',
    color: '#666'
  },
  errorMessage: {
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.2rem',
    color: '#ff6b6b'
  },
  // Media queries styles (à appliquer conditionnellement)
  mobileLogementInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '24px'
  },
  mobileRightSection: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px'
  },
  mobileCollapseSection: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    marginTop: '24px'
  }
};

function Logement() {
  const { locationId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/properties/${locationId}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('not_found');
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return;
        }
        
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        console.error('Error fetching property:', err);
        setError('fetch_error');
      } finally {
        setLoading(false);
      }
    };

    if (locationId) {
      fetchProperty();
    }
  }, [locationId]);

  // Redirection vers 404 si propriété non trouvée
  if (error === 'not_found') {
    return <Navigate to="/not-found" replace />;
  }

  if (loading) {
    return (
      <div style={styles.logementContainer}>
        <div style={styles.loadingMessage}>Chargement du logement...</div>
      </div>
    );
  }

  if (error === 'fetch_error' || !property) {
    return (
      <div style={styles.logementContainer}>
        <div style={styles.errorMessage}>Erreur lors du chargement du logement</div>
      </div>
    );
  }

  return (
    <div style={styles.logementContainer}>
      <Slideshow pictures={property.pictures} />
      
      <div style={isMobile ? styles.mobileLogementInfo : styles.logementInfo}>
        <div style={styles.leftSection}>
          <h1 style={styles.title}>{property.title}</h1>
          <p style={styles.location}>{property.location}</p>
          <div style={styles.tagsContainer}>
            {property.tags?.map((tag, index) => (
              <span key={index} style={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        
        <div style={isMobile ? styles.mobileRightSection : styles.rightSection}>
          <div style={styles.hostInfo}>
            <p style={styles.hostName}>{property.host?.name}</p>
            <img 
              src={property.host?.picture} 
              alt={property.host?.name} 
              style={styles.hostPicture}
            />
          </div>
          <Rating rating={property.rating} />
        </div>
      </div>

      <div style={isMobile ? styles.mobileCollapseSection : styles.collapseSection}>
        <Collapse label="Description">
          {property.description}
        </Collapse>
        <Collapse label="Équipements">
          {property.equipments?.map((equipment, index) => (
            <div key={index}>{equipment}</div>
          ))}
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;