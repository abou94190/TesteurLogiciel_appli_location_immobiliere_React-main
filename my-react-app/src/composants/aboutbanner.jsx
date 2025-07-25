import styled from "styled-components";
import bannerImg from '../assets/about-banner.png';
const BannerContainer = styled.div`
  width: 1240px;
  height: 223px;
  border-radius: 25px;
  overflow: hidden;
  margin: 50px auto;
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 3;
  mix-blend-mode: darken;
  border-radius: 25px;
`;

function AboutBanner() {
  return (
    <BannerContainer>
      <BannerImage
        src={bannerImg} // Image de démonstration
        alt="Montagnes"
      />
    </BannerContainer>
  );
}

export default AboutBanner;
