import React, { useState } from 'react';

const Slideshow = ({ pictures = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return (
      <div className="slideshow slideshow--no-images">
        <div className="slideshow__placeholder">Aucune image disponible</div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const showNavigation = pictures.length > 1;

  return (
    <div className="slideshow">
      <div className="slideshow__container">
        <img
          src={pictures[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="slideshow__image"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg';
          }}
        />

        {showNavigation && (
          <>
            <img
              src="./assets/arrow-left.svg"
              alt="Précédent"
              className="slideshow__arrow slideshow__arrow--left"
              onClick={prevImage}
              style={{ cursor: 'pointer' }}
            />
            <img
              src="./assets/arrow-right.svg"
              alt="Suivant"
              className="slideshow__arrow slideshow__arrow--right"
              onClick={nextImage}
              style={{ cursor: 'pointer' }}
            />
          </>
        )}

        {showNavigation && (
          <div className="slideshow__counter">
            {currentImageIndex + 1}/{pictures.length}
          </div>
        )}

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
    </div>
  );
};

export default Slideshow;