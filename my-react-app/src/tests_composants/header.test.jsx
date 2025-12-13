import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../composants/header";

describe("Header", () => {
  it("affiche le logo avec le bon alt", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("Kasa Logo");
    expect(logo).toBeInTheDocument();
  });

  it("affiche les liens de navigation", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("À Propos")).toBeInTheDocument();
  });

  it("souligne Accueil quand on est sur la page /", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    const accueilLink = screen.getByText("Accueil");
    expect(accueilLink).toHaveStyle("text-decoration: underline");
  });

  it("souligne À Propos quand on est sur la page /about", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Header />
      </MemoryRouter>
    );

    const aboutLink = screen.getByText("À Propos");
    expect(aboutLink).toHaveStyle("text-decoration: underline");
  });
});
