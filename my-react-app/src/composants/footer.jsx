import React from "react";
import styled from "styled-components";

export default function Footer() {
  const rights = "© 2020 Kasa. All rights reserved";

  return (
    <FooterContainerStyled>
      <img src="/src/assets/LOGO-white.svg" alt="Kasa Logo" />
      <p>{rights}</p>
    </FooterContainerStyled>
  );
}

// Styled component pour le footer
const FooterContainerStyled = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    white-space: pre-line; /* Permet d’interpréter \n dans le texte */
  }
`;
