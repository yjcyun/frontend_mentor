import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../assets/shared/mobile/icon-close.svg";

interface SidebarProps {
  open: boolean;
}

const Hamburger = styled.button<SidebarProps>`
  display: none;
  background: transparent;

  svg g {
    fill: ${(props) => (props.open ? "var(--white-20)" : "var(--white)")};
  }

  @media (max-width: 640px) {
    display: flex;
  }
`;

const StyledSidebar = styled.div<SidebarProps>`
  display: none;
  position: absolute;
  right: 0;
  top: 90px;
  width: 100%;
  padding: 40px 0 0;
  background: linear-gradient(var(--light-cream), rgba(254, 253, 247, 0.5));
  z-index: 1;
  height: calc(100vh - 90px);

  .mobile-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;

    ul {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    a {
      color: var(--dark-grey-blue);
    }
  }

  @media (max-width: 640px) {
    display: ${(props) => (props.open ? "flex" : "none")};
  }
`;

export const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setOpenMenu(!openMenu)} open={openMenu}>
        {openMenu ? <CloseIcon /> : <HamburgerIcon />}
      </Hamburger>
      <StyledSidebar open={openMenu} aria-label="sidebar-nav">
        <nav className="mobile-nav">
          <ul>
            <li>
              <Link to="/">
                <h4>Home</h4>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h4>About Us</h4>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h4>Create Your Plan</h4>
              </Link>
            </li>
          </ul>
        </nav>
      </StyledSidebar>
    </>
  );
};
