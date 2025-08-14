import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutBanner from '../composants/aboutbanner';
import bannerImg from '../assets/about-banner.png';

describe('AboutBanner', () => {
  it('affiche l’image avec le bon alt et src', () => {
    render(<AboutBanner />);
    
    const image = screen.getByAltText('Montagnes');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', bannerImg);
  });
});
