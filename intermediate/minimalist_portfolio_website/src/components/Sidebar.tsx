import styled from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as HamburgerIcon } from '../assets/icons/hamburger.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';
import { menu } from './Header';

interface SidebarProps {
  open: boolean;
}

const Hamburger = styled.button`
  display: none;

  @media (max-width: 568px) {
    display: flex;
  }
`;

const StyledSidebar = styled.div<SidebarProps>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: absolute;
  right: 0;
  top: 56px;
  width: 223px;
  background: var(--light-black);
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;

  a {
    color: var(--white);
    font-size: 1.2rem;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    transition: var(--transition);
    text-align: center;

    &.active {
      color: var(--cyan);
    }
  }
`;

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu ? <HamburgerIcon /> : <CloseIcon />}
      </Hamburger>
      <StyledSidebar open={openMenu}>
        <StyledNav>
          {menu.map((m) => {
            return (
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                key={m.label}
                onClick={() => setOpenMenu(false)}
                to={m.to}
              >
                {m.label}
              </NavLink>
            );
          })}
        </StyledNav>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
