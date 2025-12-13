import '@testing-library/jest-dom';

// Configuration globale pour les tests
beforeAll(() => {
  // Mock console pour éviter les warnings dans les tests
  // Utilisez vi au lieu de jest pour Vitest
  global.console = {
    ...console,
    warn: vi.fn(),
    error: vi.fn(),
  };
});

// Mock pour les images statiques - UTILISEZ vi.mock() pour Vitest
vi.mock('../assets/LOGO-white.svg', () => ({
  default: 'mocked-logo.svg' // Notez l'objet avec propriété default
}));


const { configure } = require('@testing-library/react');
configure({ testIdAttribute: 'data-testid' });