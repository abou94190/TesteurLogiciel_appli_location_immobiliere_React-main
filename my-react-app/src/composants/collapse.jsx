import React, { useState } from "react";
import ArrowDown from "../assets/arrow-down.svg";

const styles = {
  collapseWrapper: {
    width: "100%",
    marginBottom: "20px",
  },
  collapseButton: {
    backgroundColor: "#ff6060",
    color: "white",
    borderRadius: "5px",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.1rem",
    border: "none",
    width: "100%",
  },
  collapseArrow: {
    width: "20px",
    height: "20px",
    transition: "transform 0.3s ease",
  },
  collapseArrowOpen: {
    transform: "rotate(180deg)",
  },
  collapseContent: {
    backgroundColor: "#f6f6f6",
    color: "#333",
    padding: "15px 20px",
    fontSize: "1rem",
    borderRadius: "0 0 5px 5px",
    animation: "fadeIn 0.3s ease-in-out",
  },
};

function Collapse({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

      <div style={styles.collapseWrapper}>
        <div style={styles.collapseButton} onClick={() => setOpen(!open)}>
          {label}
          <img 
            src={ArrowDown} 
            alt="arrow" 
            style={{
              ...styles.collapseArrow,
              ...(open ? styles.collapseArrowOpen : {}),
            }}
          />
        </div>
        {open && (
          <div style={styles.collapseContent}>
            {children}
          </div>
        )}
      </div>
    </>
  );
}

export default Collapse;