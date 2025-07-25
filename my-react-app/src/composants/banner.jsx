import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/banner.png";

// Conteneur principal
const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 223px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
`;

// Image de fond
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(75%);
  z-index: 1;
`;

// Superposition sombre
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

// Texte centré
const BannerText = styled.h1`
  position: relative;
  z-index: 3;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <BackgroundImage src={bannerImg} alt="Côte rocheuse" />
      <Overlay />
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    </BannerWrapper>
  );
};

export default Banner;
