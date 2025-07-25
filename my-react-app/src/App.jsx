import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Logement from './pages_projet/page_logement';
import NotFound from './pages_projet/page_erreur';
import Home from './pages_projet/page_accueil';
import About from './pages_projet/page_a_propos';
import Root from './pages_projet/composant-page';

function App() {
  return (
    <>
      <div><h1>texte</h1></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations/:locationId" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/root" element={<Root />} />
      </Routes>
    </>
  );
}

export default App;

