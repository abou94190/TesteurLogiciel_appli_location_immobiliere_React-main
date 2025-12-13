import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../composants/slideshow";
import Rating from "../composants/Notes";
import Collapse from "../composants/collapse";

// ====== Styles ======
const styles = {
  logementContainer: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "20px",
    minHeight: "calc(10vh - 200px)", // Hauteur minimale au lieu de hauteur fixe
  },

  logementInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "24px",
  },
  logementInfoMobile: {
    flexDirection: "column",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
  },
  rightSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "20px",
  },
  rightSectionMobile: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: 500,
    color: "#ff6060",
    margin: "0 0 5px 0",
  },
  location: {
    fontSize: "18px",
    color: "#000000ff",
    margin: "0 0 20px 0",
    textAlign: "left",
    
  },
  tagsContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#ff6060",
    color: "white",
    padding: "3px 15px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 500,
  },
  hostInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  hostName: {
    fontSize: "18px",
    fontWeight: 500,
    textAlign: "right",
    margin: 0,
    width: "93px",
    color: "#ff6b6b",
  },
  hostPicture: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  collapseSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "76px",
    marginTop: "24px",
  },
  collapseSectionMobile: {
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
  loadingMessage: {
    textAlign: "center",
    padding: "2rem",
    fontSize: "1.2rem",
    color: "#666",
  },
  errorMessage: {
    textAlign: "center",
    padding: "2rem",
    fontSize: "1.2rem",
    color: "#ff6b6b",
  },
};
// ====== Component ======
function Logement() {
  const { locationId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/properties/${locationId}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError("not_found");
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return;
        }
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("fetch_error");
      } finally {
        setLoading(false);
      }
    };
    if (locationId) fetchProperty();
  }, [locationId]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  if (error === "not_found") return <Navigate to="/not-found" replace />;

  if (loading) {
    return (
      <div style={styles.logementContainer}>
        <div style={styles.loadingMessage}>Chargement du logement...</div>
      </div>
    );
  }

  if (error === "fetch_error" || !property) {
    return (
      <div style={styles.logementContainer}>
        <div style={styles.errorMessage}>Erreur lors du chargement du logement</div>
      </div>
    );
  }

  return (
    <div style={styles.logementContainer}>
      <Slideshow pictures={property.pictures} />

      <div
        style={{
          ...styles.logementInfo,
          ...(isMobile ? styles.logementInfoMobile : {}),
        }}
      >
        <div style={styles.leftSection}>
          <h1 style={styles.title}>{property.title}</h1>
          <p style={styles.location}>{property.location}</p>
          <div style={styles.tagsContainer}>
            {property.tags?.map((tag, index) => (
              <span style={styles.tag} key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            ...styles.rightSection,
            ...(isMobile ? styles.rightSectionMobile : {}),
          }}
        >
          <div style={styles.hostInfo}>
            <p style={styles.hostName}>{property.host?.name}</p>
            <img
              style={styles.hostPicture}
              src={property.host?.picture}
              alt={property.host?.name}
            />
          </div>
          <Rating rating={property.rating} />
        </div>
      </div>

      <div
        style={{
          ...styles.collapseSection,
          ...(isMobile ? styles.collapseSectionMobile : {}),
        }}
      >
        <Collapse label="Description">{property.description}</Collapse>
        <Collapse label="Équipements">
          {property.equipments?.map((equipment, index) => (
            <div key={index}>{equipment}</div>
          ))}
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
