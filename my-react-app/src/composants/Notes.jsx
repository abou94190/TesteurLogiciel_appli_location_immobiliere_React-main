import React from "react";
import styled from "styled-components";
import PinkStar from "../assets/pink-star.svg";
import GreyStar from "../assets/grey-star.svg";

const RatingContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Star = styled.img`
  width: 25px;
  height: 24px;
`;

function Rating({ rating }) {
  // Convertir la note en nombre et s'assurer qu'elle est entre 1 et 5
  const numRating = Math.max(1, Math.min(5, Math.round(Number(rating))));
  
  return (
    <RatingContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          src={star <= numRating ? PinkStar : GreyStar}
          alt={star <= numRating ? "Étoile pleine" : "Étoile vide"}
        />
      ))}
    </RatingContainer>
  );
}

export default Rating;