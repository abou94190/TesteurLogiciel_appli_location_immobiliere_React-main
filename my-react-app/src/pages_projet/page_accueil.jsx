import React, { useState, useEffect } from "react";
import Banner from "../composants/banner.jsx";
import Card from "../composants/card.jsx";
import styled from "styled-components";
import { fetchProperties } from "../proprieties_api/appel_api.jsx";
import Gallery from "../composants/gallery.jsx";




const Home = () => {
  return (
    <div>
      <Banner />
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2><Gallery/></h2>
      </section>
    </div>
  );
};

export default Home;