import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const Slideshow = ({ propertyId }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch property data
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/properties/${locationId}`);
        if (!response.ok) {
          throw new Error('Erreur lors du chargement de la propriété');
        }
        const data = await response.json();
        setProperty(data);
        setCurrentImageIndex(0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchProperty();
    }
  }, [propertyId]);

  const nextImage = () => {
    if (property && property.pictures) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === property.pictures.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (property && property.pictures) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? property.pictures.length - 1 : prevIndex - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (loading) {
    return (
      <div className="slideshow slideshow--loading">
        <div className="slideshow__loader">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="slideshow slideshow--error">
        <div className="slideshow__error">Erreur: {error}</div>
      </div>
    );
  }

  if (!property || !property.pictures || property.pictures.length === 0) {
    return (
      <div className="slideshow slideshow--no-images">
        <div className="slideshow__placeholder">Aucune image disponible</div>
      </div>
    );
  }

  const { pictures } = property;
  const showNavigation = pictures.length > 1;

  return (
    <div className="slideshow">
      <div className="slideshow__container">
        {/* Image principale */}
        <img
          src={pictures[currentImageIndex]}
          alt={`${property.title} - Image ${currentImageIndex + 1}`}
          className="slideshow__image"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg'; // Image de fallback
          }}
        />

        {/* Flèches de navigation */}
        {showNavigation && (
          <>
            <button
              className="slideshow__arrow slideshow__arrow--left"
              onClick={prevImage}
              aria-label="Image précédente"
            >
              <img src="/assets/arrow-left.svg" alt="Précédent" />
            </button>
            <button
              className="slideshow__arrow slideshow__arrow--right"
              onClick={nextImage}
              aria-label="Image suivante"
            >
              <img src="/assets/arrow-right.svg" alt="Suivant" />
            </button>
          </>
        )}

        {/* Compteur d'images */}
        {showNavigation && (
          <div className="slideshow__counter">
            {currentImageIndex + 1}/{pictures.length}
          </div>
        )}

        {/* Indicateurs (points) */}
        {showNavigation && pictures.length <= 10 && (
          <div className="slideshow__indicators">
            {pictures.map((_, index) => (
              <button
                key={index}
                className={`slideshow__indicator ${
                  index === currentImageIndex ? 'slideshow__indicator--active' : ''
                }`}
                onClick={() => goToImage(index)}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Support pour navigation clavier */}
      <div
        className="slideshow__keyboard-handler"
        tabIndex="0"
        onKeyDown={(e) => {
          if (showNavigation) {
            switch (e.key) {
              case 'ArrowLeft':
                e.preventDefault();
                prevImage();
                break;
              case 'ArrowRight':
                e.preventDefault();
                nextImage();
                break;
              case 'Home':
                e.preventDefault();
                goToImage(0);
                break;
              case 'End':
                e.preventDefault();
                goToImage(pictures.length - 1);
                break;
              default:
                break;
            }
          }
        }}
        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
      />
    </div>
  );
};

export default Slideshow;