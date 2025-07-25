import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import Slideshow from "../composants/slideshow";
import Rating from "../composants/Notes";
import Collapse from "../composants/collapse";

const LogementContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 20px;
`;

const LogementInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #FF6060;
  margin: 0 0 5px 0;
`;

const Location = styled.p`
  font-size: 18px;
  color: #FF6060;
  margin: 0 0 20px 0;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #FF6060;
  color: white;
  padding: 3px 15px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const HostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HostName = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: right;
  margin: 0;
  width: 93px;
`;

const HostPicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const CollapseSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 76px;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #ff6b6b;
`;

function Logement() {
  const { locationId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <LogementContainer>
        <LoadingMessage>Chargement du logement...</LoadingMessage>
      </LogementContainer>
    );
  }

  if (error === 'fetch_error' || !property) {
    return (
      <LogementContainer>
        <ErrorMessage>Erreur lors du chargement du logement</ErrorMessage>
      </LogementContainer>
    );
  }

  return (
    <LogementContainer>
      <Slideshow pictures={property.pictures} />
      
      <LogementInfo>
        <LeftSection>
          <Title>{property.title}</Title>
          <Location>{property.location}</Location>
          <TagsContainer>
            {property.tags?.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        </LeftSection>
        
        <RightSection>
          <HostInfo>
            <HostName>{property.host?.name}</HostName>
            <HostPicture 
              src={property.host?.picture} 
              alt={property.host?.name} 
            />
          </HostInfo>
          <Rating rating={property.rating} />
        </RightSection>
      </LogementInfo>

      <CollapseSection>
        <Collapse label="Description">
          {property.description}
        </Collapse>
        <Collapse label="Équipements">
          {property.equipments?.map((equipment, index) => (
            <div key={index}>{equipment}</div>
          ))}
        </Collapse>
      </CollapseSection>
    </LogementContainer>
  );
}

export default Logement;