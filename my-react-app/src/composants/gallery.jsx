import React, { useState, useEffect } from "react";
import Card from "./card";

const styles = {
  galleryContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    padding: '50px',
    backgroundColor: '#f6f6f6',
    borderRadius: '25px',
    width: '1240px',
    margin: '0 auto'
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

function Gallery() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return (
      <div style={styles.galleryContainer}>
        <div style={styles.loadingMessage}>
          Chargement des propriétés...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.galleryContainer}>
        <div style={styles.errorMessage}>{error}</div>
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