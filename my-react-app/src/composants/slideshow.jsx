import React, { useState } from 'react';
import styled from 'styled-components';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const SlideshowContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ArrowButton = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  width: 32px;
  height: 32px;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const Counter = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  color: white;
  background: rgba(0,0,0,0.4);
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
`;

const IndicatorButton = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({ active }) => (active ? 'white' : 'rgba(255,255,255,0.5)')};
  cursor: pointer;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slideshow = ({ pictures = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return (
      <SlideshowContainer>
        <Placeholder>Aucune image disponible</Placeholder>
      </SlideshowContainer>
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
    <SlideshowContainer>
      <SlideImage
        src={pictures[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        onError={(e) => {
          e.target.src = '/placeholder-image.jpg';
        }}
      />

      {showNavigation && (
        <>
          <ArrowButton
            src={arrowLeft}
            alt="Précédent"
            className="left"
            onClick={prevImage}
          />
          <ArrowButton
            src={arrowRight}
            alt="Suivant"
            className="right"
            onClick={nextImage}
          />
        </>
      )}

      {showNavigation && (
        <Counter>{currentImageIndex + 1}/{pictures.length}</Counter>
      )}

      {showNavigation && pictures.length <= 10 && (
        <Indicators>
          {pictures.map((_, index) => (
            <IndicatorButton
              key={index}
              active={index === currentImageIndex}
              onClick={() => goToImage(index)}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </Indicators>
      )}
    </SlideshowContainer>
  );
};

export default Slideshow;
