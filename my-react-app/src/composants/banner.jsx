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
    fontWeight: 'bold',
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
    width: '335px',
    height: '111px',
    borderRadius: '10px',
    marginBottom: '20px',
    borderWidth: '1px',
    mixBlendMode: 'darken',
    opacity: 1,
  },
  bannerText: {
    fontSize: '24px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
    paddingLeft: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
    verticalAlign: 'bottom',
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