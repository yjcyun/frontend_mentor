import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../assets/icon-hamburger.svg";
import { ReactComponent as ArrowIcon } from "../assets/icon-chevron.svg";

import { menu } from "./header";

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

    &:not(:last-child) {
      border-bottom: 1px solid var(--white-10);
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
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
          {menu.map((m) => (
            <Link
              key={m.label}
              to={m.label}
              className="link"
              onClick={() => setOpenMenu(false)}
            >
              <div className="menu-item" key={m.label}>
                <Marker bg={m.color} />
                <h4>{m.label}</h4>
              </div>
              <ArrowIcon />
            </Link>
          ))}
        </nav>
      </StyledSidebar>
    </>
  );
};
