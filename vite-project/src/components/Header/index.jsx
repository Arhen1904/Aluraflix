import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { IoAddCircle, IoHome } from "react-icons/io5";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-header);
  color: var(--color-text);
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 1.5rem;
`;

const NavMenu = styled.span`
  font-size: 1.5rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #2484a1;
  }

  @media (max-width: 550px) {
    .nav-text {
      display: none;
    }
  }
`;

const NavIcon = styled.span`
  display: inline;
  font-size: 1.5rem;
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo>Aluraflix</Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
              <NavIcon><IoHome /></NavIcon>
              <NavMenu className="nav-text">Home</NavMenu>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/nuevo-video" className={location.pathname === '/nuevo-video' ? 'active' : ''}>
              <NavIcon><IoAddCircle /></NavIcon>
              <NavMenu className="nav-text">Nuevo Video</NavMenu>
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
