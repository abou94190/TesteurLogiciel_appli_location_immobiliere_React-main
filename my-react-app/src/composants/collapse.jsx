import React, { useState } from "react";
import styled from "styled-components";
import ArrowDown from "../assets/arrow-down.svg";
import ArrowUp from "../assets/arrow-up.svg";

const CollapseWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const CollapseButton = styled.div`
  background-color: #ff6060;
  color: white;
  border-radius: 5px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
`;

const CollapseArrow = styled.img`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
`;

const CollapseContent = styled.div`
  background-color: #f6f6f6;
  color: #333;
  padding: 15px 20px;
  font-size: 1rem;
  border-radius: 0 0 5px 5px;
  animation: fadeIn 0.3s ease-in-out;
  display: ${(props) => (props.open ? "block" : "none")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function Collapse({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <CollapseWrapper>
      <CollapseButton onClick={() => setOpen(!open)}>
        {label}
        <CollapseArrow src={open ? ArrowUp : ArrowDown} alt="arrow" />
      </CollapseButton>
      <CollapseContent open={open}>
        {children}
      </CollapseContent>
    </CollapseWrapper>
  );
}

export default Collapse;
