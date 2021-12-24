import styled from 'styled-components';
import { useState } from 'react';

import { ReactComponent as HamburgerIcon } from '../assets/icons/hamburger.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';

import MenuList from './MenuList';

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
          <MenuList onClick={() => setOpenMenu(false)} />
        </StyledNav>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
