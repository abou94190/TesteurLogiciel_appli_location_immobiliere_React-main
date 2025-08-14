import '@testing-library/jest-dom';

// Configuration globale pour les tests
beforeAll(() => {
  // Mock console pour éviter les warnings dans les tests
  global.console = {
    ...console,
    warn: jest.fn(),
    error: jest.fn(),
  };
});

// Mock pour les images statiques
jest.mock('../assets/LOGO-white.svg', () => 'mocked-logo.svg');

// Configuration pour styled-components si nécessaire
const { configure } = require('@testing-library/react');
configure({ testIdAttribute: 'data-testid' });