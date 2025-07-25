import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from 'my-react-app/src/composants/header.jsx';
import '@testing-library/jest-dom';
import React from 'react';

// On regroupe tous les tests du composant Header
describe('Header', () => {

  // Test 1 : Vérifie que les éléments de base sont présents dans le header
  it('affiche le logo et les liens de navigation', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    // Vérifie que l'image avec alt="Maison" est présente
    expect(screen.getByAltText('Maison')).toBeInTheDocument();
    // Vérifie que le lien "Accueil" est visible
    expect(screen.getByText('Accueil')).toBeInTheDocument();
    // Vérifie que le lien "À Propos" est visible
    expect(screen.getByText('À Propos')).toBeInTheDocument();
  });

  // Test 2 : Vérifie que le lien "Accueil" est souligné quand on est sur la page d'accueil
  it('souligne le lien "Accueil" quand on est sur "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    // Récupère les liens dans le DOM
    const homeLink = screen.getByText('Accueil');
    const aboutLink = screen.getByText('À Propos');

    // Vérifie que "Accueil" est souligné
    expect(homeLink).toHaveStyle('text-decoration: underline');
    // Vérifie que "À Propos" ne l’est pas
    expect(aboutLink).toHaveStyle('text-decoration: none');
  });

  // Test 3 : Vérifie que le lien "À Propos" est actif (souligné) quand on est sur /about
  it('souligne le lien "À Propos" quand on est sur "/about"', () => {
    render(
      <MemoryRouter initialEntries={['/About']}>
        <Header />
      </MemoryRouter>
    );
    // Récupère les deux liens
    const homeLink = screen.getByText('Accueil');
    const aboutLink = screen.getByText('À Propos');

    // Vérifie que "Accueil" n’est pas souligné
    expect(homeLink).toHaveStyle('text-decoration: none');
    // Vérifie que "À Propos" est souligné
    expect(aboutLink).toHaveStyle('text-decoration: underline');
  });

});
