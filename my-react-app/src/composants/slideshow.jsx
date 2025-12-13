import React, { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const styles = {
  slideshowContainer: {
    position: "relative",
    width: "100%",
    height: "415px",
    borderRadius: "15px",
    overflow: "hidden",
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 2,
    width: "48px",
    height: "48px",
    filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
  },
  arrowButtonLeft: {
    left: "20px",
  },
  arrowButtonRight: {
    right: "20px",
  },
  counter: {
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    textShadow: "0px 0px 4px rgba(0,0,0,0.7)",
  },
};

const Slideshow = ({ pictures = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);

  if (!pictures || pictures.length === 0) {
    return (
      <div style={styles.slideshowContainer}>
        <img 
          style={styles.slideImage}
          src="/placeholder-image.jpg" 
          alt="placeholder" 
        />
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

  return (
    <div style={styles.slideshowContainer}>
      <img
        style={styles.slideImage}
        src={pictures[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />

      {pictures.length > 1 && (
        <>
          <img
            style={{
              ...styles.arrowButton,
              ...styles.arrowButtonLeft,
              transform: isHoveringLeft ? "translateY(-50%) scale(1.1)" : "translateY(-50%)",
              transition: "transform 0.2s ease",
            }}
            src={arrowLeft}
            alt="Précédent"
            onClick={prevImage}
            onMouseEnter={() => setIsHoveringLeft(true)}
            onMouseLeave={() => setIsHoveringLeft(false)}
          />
          <img
            style={{
              ...styles.arrowButton,
              ...styles.arrowButtonRight,
              transform: isHoveringRight ? "translateY(-50%) scale(1.1)" : "translateY(-50%)",
              transition: "transform 0.2s ease",
            }}
            src={arrowRight}
            alt="Suivant"
            onClick={nextImage}
            onMouseEnter={() => setIsHoveringRight(true)}
            onMouseLeave={() => setIsHoveringRight(false)}
          />
          <div style={styles.counter}>
            {currentImageIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;