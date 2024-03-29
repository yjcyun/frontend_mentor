import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as HamburgerIcon } from '../assets/icons/hamburger.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';

import { MenuList } from './MenuList';

interface SidebarProps {
  open: boolean;
}

const Hamburger = styled.button`
  display: none;

  @media (max-width: 680px) {
    display: flex;
  }
`;

const StyledSidebar = styled.div<SidebarProps>`
  display: none;
  position: absolute;
  right: 0;
  top: 56px;
  width: 223px;
  background: var(--light-black);
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  @media (max-width: 680px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;

  a {
    color: var(--white);
    text-align: center;

    &.active {
      color: var(--cyan);
    }
  }
`;

export const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu ? <HamburgerIcon /> : <CloseIcon />}
      </Hamburger>
      <StyledSidebar open={openMenu} aria-label='sidebar-nav'>
        <StyledNav>
          <MenuList onClick={() => setOpenMenu(false)} />
        </StyledNav>
      </StyledSidebar>
    </>
  );
};
