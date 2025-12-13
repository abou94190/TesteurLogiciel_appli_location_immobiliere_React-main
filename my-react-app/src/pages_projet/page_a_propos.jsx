import React from "react";
import Banner from '../composants/banner';
import Collapse from "../composants/collapse";
import aboutBannerImg from '../assets/about-banner.png';

const styles = {
  aboutContainer: {
    width: '100%',
  },
  collapseSection: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    marginBottom: "50px",
    marginTop: "30px",
  },
};

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
    <div style={styles.aboutContainer}>
      <Banner 
        backgroundImage={aboutBannerImg}
        altText="Montagnes"
        showText={false}
      />
      
      <section style={styles.collapseSection}>
        {sections.map((section, index) => (
          <Collapse key={index} label={section.label}>
            {section.content}
          </Collapse>
        ))}
      </section>
    </div>
  );
};

export default About;