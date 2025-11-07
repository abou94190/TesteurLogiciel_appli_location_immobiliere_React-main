import React from "react";
import bannerImg from "../assets/banner.png";

const styles = {
  bannerWrapper: {
    position: 'relative',
    width: '100%',
    height: '223px',
    borderRadius: '25px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)'
  },
  backgroundImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(75%)',
    zIndex: 1
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 2
  },
  bannerText: {
    position: 'relative',
    zIndex: 3,
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '0 1rem',
    margin: 0
  }
};

const Banner = ({ 
  backgroundImage = bannerImg, 
  altText = "CÃ´te rocheuse", 
  text = "Chez vous, partout et ailleurs",
  showText = true 
}) => {
  return (
    <div style={styles.bannerWrapper}>
      <img 
        src={backgroundImage} 
        alt={altText} 
        style={styles.backgroundImage}
      />
      <div style={styles.overlay}></div>
      {showText && (
        <h1 style={styles.bannerText}>{text}</h1>
      )}
    </div>
  );
};

export default Banner;