import React, { useState } from 'react';
import styled from 'styled-components';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 415px; 
  border-radius: 15px;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  display: block;
`;

const ArrowButton = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
  width: 48px;
  height: 48px;
  filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.5));

  &.left {
    left: 20px;
  }

  &.right {
    right: 20px;
  }

  &:hover {
    transform: translateY(-50%) scale(1.1);
    transition: transform 0.2s ease;
  }
`;

const Counter = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 0px 0px 4px rgba(0,0,0,0.7);
`;

const Slideshow = ({ pictures = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return (
      <SlideshowContainer>
        <SlideImage src="/placeholder-image.jpg" alt="placeholder" />
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

  return (
    <SlideshowContainer>
      <SlideImage
        src={pictures[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />

      {pictures.length > 1 && (
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
          <Counter>
            {currentImageIndex + 1}/{pictures.length}
          </Counter>
        </>
      )}
    </SlideshowContainer>
  );
};

export default Slideshow;
