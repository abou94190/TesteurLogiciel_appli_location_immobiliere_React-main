import React from "react";
import styled from "styled-components";
import Banner from '../composants/banner';
import Collapse from "../composants/collapse";
import aboutBannerImg from '../assets/about-banner.png';

const AboutContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BannerSection = styled.section`
  margin: 50px 0 30px 0;
`;

const CollapseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`;

const About = () => {
  const sections = [
    {
      label: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      label: "Respect", 
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      label: "Service",
      content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    },
    {
      label: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
    <AboutContainer>
      <BannerSection> 
        <Banner 
          backgroundImage={aboutBannerImg}
          altText="Montagnes"
          showText={false}
        />
      </BannerSection>
      
      <CollapseSection>
        {sections.map((section, index) => (
          <Collapse key={index} label={section.label}>
            {section.content}
          </Collapse>
        ))}
      </CollapseSection>
    </AboutContainer>
  );
};

export default About;