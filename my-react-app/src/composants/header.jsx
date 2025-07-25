import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 20px 40px;
`;

const Logo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #FF6060;
  display: flex;
  align-items: center;
  height: 68px;
  width: 210.32px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: flex-end;
`;

const NavLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: black;
  text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
  text-underline-offset: 0%;
  text-decoration-thickness: 0%;
  line-height: 143%;
  vertical-align: bottom;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo><span><img src="src/assets/LOGO.png" alt="Maison"  /></span></Logo>
      <Nav>
        <NavLink to="/" $active={location.pathname === '/'}>Accueil</NavLink>
        <NavLink to="/about" $active={location.pathname === '/about'}>À Propos</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
