import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from '../composants/collapse';
import { vi } from 'vitest';

// Correction du mock : retourner un objet avec une propriété 'default'
vi.mock('../assets/arrow-down.svg', () => ({
  default: 'mocked-arrow.svg'
}));

describe('Collapse', () => {
  it('affiche le label correctement', () => {
    render(<Collapse label="Mon titre">Mon contenu</Collapse>);
    expect(screen.getByText('Mon titre')).toBeInTheDocument();
  });

  it('ne rend pas le contenu au départ', () => {
    render(<Collapse label="Titre">Texte caché</Collapse>);
    expect(screen.queryByText('Texte caché')).toBeNull();
  });

  it('affiche le contenu après clic', () => {
    render(<Collapse label="Titre">Texte visible</Collapse>);
    
    expect(screen.queryByText('Texte visible')).toBeNull();
    
    fireEvent.click(screen.getByText('Titre'));
    
    expect(screen.getByText('Texte visible')).toBeInTheDocument();
    expect(screen.getByText('Texte visible')).toBeVisible();
  });

  it('cache à nouveau le contenu si on reclique', () => {
    render(<Collapse label="Titre">Texte togglé</Collapse>);
    const button = screen.getByText('Titre');

    fireEvent.click(button);
    expect(screen.getByText('Texte togglé')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText('Texte togglé')).toBeNull();
  });

  it('fait pivoter la flèche quand ouvert/fermé', () => {
    render(<Collapse label="Titre">Contenu</Collapse>);
    const arrow = screen.getByAltText('arrow');
    
    expect(arrow.style.transform).toBe('');
    
    fireEvent.click(screen.getByText('Titre'));
    expect(arrow.style.transform).toBe('rotate(180deg)');
    
    fireEvent.click(screen.getByText('Titre'));
    expect(arrow.style.transform).toBe('');
  });
});