import { Link } from 'react-router-dom';
import styled from "styled-components";

const CardLink = styled(Link)`
  display: block;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #0a0a0a 0%,
    #040404 41%,
    #000000 100%
  );
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const CardTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  color: white;
  z-index: 2;
  font-size: 1.2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  width: 100%;
  margin: 0;
`;

function Card({ locationId, title, cover }) {
  return (
    <CardLink to={`/locations/${locationId}`}>
      <CardImage src={cover} alt={title} />
      <CardTitle>{title}</CardTitle>
    </CardLink>
  );
}

export default Card;
