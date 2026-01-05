import React, { useState, useEffect } from "react";
import Card from "./card";

function Gallery() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
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

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const styles = {
    galleryContainer: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '20px' : isTablet ? '30px' : '50px',
      padding: isMobile ? '20px 10px' : isTablet ? '40px' : '56px 50px', // Changé: '20px 10px' sur mobile
      backgroundColor: isMobile ? 'transparent' : '#F6F6F6',
      borderRadius: isMobile ? '0' : '25px',
      width: '100%',
      boxSizing: 'border-box', // Ajouté pour inclure padding dans la largeur
      margin: '0 auto', // Ajouté pour centrer
    },
    messageStyle: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      padding: '2rem',
      fontSize: isMobile ? '1rem' : '1.2rem',
    }
  };

  if (loading) {
    return (
      <div style={styles.galleryContainer}>
        <div style={{...styles.messageStyle, color: '#666'}}>
          Chargement des propriétés...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.galleryContainer}>
        <div style={{...styles.messageStyle, color: '#ff6b6b'}}>{error}</div>
      </div>
    );
  }

  return (
    <div style={styles.galleryContainer}>
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