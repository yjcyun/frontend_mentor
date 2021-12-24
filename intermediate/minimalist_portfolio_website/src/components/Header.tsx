import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/logo.svg';

const menu = [
  { label: 'home', to: '/' },
  { label: 'portfolio', to: '/portfolio' },
  { label: 'contact me', to: '/contact-me' },
];

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    a {
      color: var(--light-black);
      font-family: var(--bodyFF);
      font-size: 1.2rem;
      letter-spacing: 2px;
      margin-left: 42px;
      text-decoration: none;
      text-transform: uppercase;
      transition: var(--transition);

      &:hover,
      &.active {
        color: var(--cyan);
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <Logo />
      </Link>

      <nav>
        {menu.map((m) => {
          return (
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              key={m.label}
              to={m.to}
            >
              {m.label}
            </NavLink>
          );
        })}
      </nav>
    </StyledHeader>
  );
};

export default Header;
