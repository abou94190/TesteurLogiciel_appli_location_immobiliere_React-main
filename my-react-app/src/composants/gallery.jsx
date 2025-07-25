import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./card"; // assure-toi que le chemin est correct

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 50px;
  background-color: #f6f6f6;
  border-radius: 25px;
  width: 1240px;
  margin: 0 auto;
`;

const LoadingMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #ff6b6b;
`;

function Gallery() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        //endpoint API 
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
      <GalleryContainer>
        <LoadingMessage>Chargement des propriétés...</LoadingMessage>
      </GalleryContainer>
    );
  }

  if (error) {
    return (
      <GalleryContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </GalleryContainer>
    );
  }

  return (
    <GalleryContainer>
      {properties.map((property) => (
        <Card
          key={property.id}
          locationId={property.id}
          title={property.title}
          cover={property.cover}
        />
      ))}
    </GalleryContainer>
  );
}

export default Gallery;