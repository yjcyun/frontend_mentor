import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../assets/icon-hamburger.svg";
import { ReactComponent as ArrowIcon } from "../assets/icon-chevron.svg";

import { colours } from "../data/colour-data";

interface SidebarProps {
  open: boolean;
}

const Hamburger = styled.button<SidebarProps>`
  display: none;
  background: transparent;

  svg g {
    fill: ${(props) => (props.open ? "var(--white-20)" : "var(--white)")};
  }

  @media (max-width: 767px) {
    display: flex;
  }
`;

const StyledSidebar = styled.div<SidebarProps>`
  display: none;
  position: absolute;
  right: 0;
  top: 6.8rem;
  width: 100%;
  padding: 44px 24px 0;
  background: var(--navy);
  z-index: 1;
  height: calc(100vh - 68px);

  .mobile-nav {
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 1.36px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .link {
    display: flex;
    padding: 20px 5px 20px 0;
    align-items: center;
    justify-content: space-between;
    color: var(--white);

    &:not(:last-child) {
      border-bottom: 1px solid var(--white-10);
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    h4 {
      font-size: 1.5rem;
      line-height: 2.5rem;
      letter-spacing: 1.36px;
    }
  }

  .menu-item {
    display: flex;
  }

  @media (max-width: 767px) {
    display: ${(props) => (props.open ? "flex" : "none")};
  }
`;

const Marker = styled.div<{ bg: string }>`
  width: 20px;
  height: 20px;
  background: ${(props) => props.bg};
  border-radius: 50%;
  margin-right: 25px;
`;

export const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setOpenMenu(!openMenu)} open={openMenu}>
        <HamburgerIcon />
      </Hamburger>
      <StyledSidebar open={openMenu} aria-label="sidebar-nav">
        <nav className="mobile-nav">
          {colours.map((m) => (
            <Link
              key={m.planet}
              to={m.planet}
              className="link"
              onClick={() => setOpenMenu(false)}
            >
              <div className="menu-item" key={m.planet}>
                <Marker bg={m.menuColour} />
                <h4>{m.planet}</h4>
              </div>
              <ArrowIcon />
            </Link>
          ))}
        </nav>
      </StyledSidebar>
    </>
  );
};
