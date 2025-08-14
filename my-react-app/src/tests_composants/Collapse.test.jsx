import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from '../composants/collapse';

describe('Collapse', () => {
  it('affiche le label correctement', () => {
    render(<Collapse label="Mon titre">Mon contenu</Collapse>);
    expect(screen.getByText('Mon titre')).toBeInTheDocument();
  });

  it('cache le contenu au départ', () => {
    render(<Collapse label="Titre">Texte caché</Collapse>);
    expect(screen.queryByText('Texte caché')).not.toBeVisible();
  });

  it('affiche le contenu après clic', () => {
    render(<Collapse label="Titre">Texte visible</Collapse>);
    fireEvent.click(screen.getByText('Titre'));
    expect(screen.getByText('Texte visible')).toBeVisible();
  });

  it('cache à nouveau le contenu si on reclique', () => {
    render(<Collapse label="Titre">Texte togglé</Collapse>);
    const button = screen.getByText('Titre');

    // Premier clic → ouverture
    fireEvent.click(button);
    expect(screen.getByText('Texte togglé')).toBeVisible();

    // Deuxième clic → fermeture
    fireEvent.click(button);
    expect(screen.getByText('Texte togglé')).not.toBeVisible();
  });
});
