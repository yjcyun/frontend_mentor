import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const menu = [
  { label: 'home', to: '/' },
  { label: 'portfolio', to: '/portfolio' },
  { label: 'contact me', to: '/contact-me' },
];

interface MenuListProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const StyledNavLink = styled(NavLink)`
  font-family: var(--bodyFF);
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  transition: var(--transition);
`;

const MenuList = (props: MenuListProps) => {
  return (
    <>
      {menu.map((m) => {
        return (
          <StyledNavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            key={m.label}
            to={m.to}
            {...props}
          >
            {m.label}
          </StyledNavLink>
        );
      })}
    </>
  );
};

export default MenuList;
