import React, { useState, useEffect } from "react";
import Card from "./card";

const styles = {
  galleryContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '60px 60px',
    padding: '56px 50px',
    backgroundColor: '#F6F6F6',
    borderRadius: '25px',
    margin: '40px 0'
  },
  loadingMessage: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.2rem',
    color: '#666'
  },
  errorMessage: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.2rem',
    color: '#ff6b6b'
  }
};

const mobileStyles = {
  galleryContainer: {
    gridTemplateColumns: '1fr',
    gap: '20px',
    padding: '20px',
    backgroundColor: 'transparent',
    borderRadius: '0',
    margin: '20px 0'
  }
};

function Gallery() {
  const [properties, setProperties] = useState([]);
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
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8080/api/properties');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError('Erreur lors du chargement des propriétés');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const currentStyles = isMobile ? mobileStyles : {};

  if (loading) {
    return (
      <div style={{...styles.galleryContainer, ...currentStyles.galleryContainer}}>
        <div style={styles.loadingMessage}>
          Chargement des propriétés...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{...styles.galleryContainer, ...currentStyles.galleryContainer}}>
        <div style={styles.errorMessage}>{error}</div>
      </div>
    );
  }

  return (
    <div style={{...styles.galleryContainer, ...currentStyles.galleryContainer}}>
      {properties.map((property) => (
        <Card
          key={property.id}
          locationId={property.id}
          title={property.title}
          cover={property.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;