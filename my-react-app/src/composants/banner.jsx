import React from "react";
import bannerImg from "../assets/banner.png";

const styles = {
  bannerWrapper: {
    position: "relative",
    width: "100%",
    height: "223px",
    borderRadius: "25px",
    overflow: "hidden",
    marginBottom: "43px",
  },
  backgroundImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(70%)",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 2,
  },
  bannerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 3,
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    margin: 0,
    fontFamily: "Montserrat, sans-serif",
    width: "100%",
    padding: "0 20px",
  },
};

const mobileStyles = {
  bannerWrapper: {
    width: "335px",
    height: "111px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  bannerText: {
    top: "50%",
    left: "16px",
    transform: "translateY(-50%)",
    fontSize: "24px",
    lineHeight: "26px",
    textAlign: "left",
    maxWidth: "220px",
    padding: 0,
  },
};

const Banner = ({
  backgroundImage = bannerImg,
  altText = "Côte rocheuse",
  showText = true,
}) => {
  const isMobile = window.innerWidth <= 768;
  const currentStyles = isMobile ? mobileStyles : {};

  return (
    <div style={{ ...styles.bannerWrapper, ...currentStyles.bannerWrapper }}>
      <img
        src={backgroundImage}
        alt={altText}
        style={styles.backgroundImage}
      />
      <div style={styles.overlay} />

      {showText && (
        <h1 style={{ ...styles.bannerText, ...currentStyles.bannerText }}>
          {isMobile ? (
            <>
              Chez vous,<br />
              partout et ailleurs
            </>
          ) : (
            "Chez vous, partout et ailleurs"
          )}
        </h1>
      )}
    </div>
  );
};

export default Banner;
