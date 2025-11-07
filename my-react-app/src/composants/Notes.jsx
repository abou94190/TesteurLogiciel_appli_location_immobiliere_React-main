import React from "react";
import PinkStar from "../assets/pink-star.svg";
import GreyStar from "../assets/grey-star.svg";

const styles = {
  ratingContainer: {
    display: 'flex',
    gap: '5px'
  },
  star: {
    width: '25px',
    height: '24px'
  }
};

function Rating({ rating }) {
  // Convertir la note en nombre et s'assurer qu'elle est entre 1 et 5
  const numRating = Math.max(1, Math.min(5, Math.round(Number(rating))));
  
  return (
    <div style={styles.ratingContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src={star <= numRating ? PinkStar : GreyStar}
          alt={star <= numRating ? "Étoile pleine" : "Étoile vide"}
          style={styles.star}
        />
      ))}
    </div>
  );
}

export default Rating;