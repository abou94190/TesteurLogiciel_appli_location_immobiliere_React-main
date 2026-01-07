import React, { useState, useEffect } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const Slideshow = ({ pictures = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const styles = {
    slideshowContainer: {
      position: "relative",
      width: isMobile ? "335px" : "100%",
      height: isMobile ? "255px" : "415px",
      borderRadius: isMobile ? "10px" : "15px",
      overflow: "hidden",
      margin: "0 auto",
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
      width: isMobile ? "24px" : "48px",
      height: isMobile ? "24px" : "48px",
      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
    },
    arrowButtonLeft: {
      left: isMobile ? "10px" : "20px",
    },
    arrowButtonRight: {
      right: isMobile ? "10px" : "20px",
    },
    counter: {
      position: "absolute",
      bottom: isMobile ? "10px" : "15px",
      left: "50%",
      transform: "translateX(-50%)",
      color: "white",
      fontSize: isMobile ? "0.875rem" : "1rem",
      fontWeight: "bold",
      textShadow: "0px 0px 4px rgba(0,0,0,0.7)",
    },
  };

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