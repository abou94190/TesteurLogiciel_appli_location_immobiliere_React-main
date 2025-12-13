import React from "react";
import bannerImg from "../assets/banner.png";

const styles = {
  bannerWrapper: {
    position: 'relative',
    width: '100%',
    height: '223px',
    borderRadius: '25px',
    overflow: 'hidden',
    marginBottom: '43px',
  },
  backgroundImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(70%)',
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
    fontSize: '48px',
    fontWeight: 500,
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '0 1rem',
    margin: 0,
    fontFamily: 'Montserrat, sans-serif',
  }
};

const mobileStyles = {
  bannerWrapper: {
    height: '111px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  bannerText: {
    fontSize: '24px',
    textAlign: 'left',
    paddingLeft: '16px',
  }
};

const Banner = ({ 
  backgroundImage = bannerImg, 
  altText = "Côte rocheuse", 
  text = "Chez vous, partout et ailleurs",
  showText = true 
}) => {
  const isMobile = window.innerWidth <= 768;
  const currentStyles = isMobile ? mobileStyles : {};

  return (
    <div style={{...styles.bannerWrapper, ...currentStyles.bannerWrapper}}>
      <img 
        src={backgroundImage} 
        alt={altText} 
        style={styles.backgroundImage}
      />
      <div style={styles.overlay}></div>
      {showText && (
        <h1 style={{...styles.bannerText, ...currentStyles.bannerText}}>
          {text}
        </h1>
      )}
    </div>
  );
};

export default Banner;