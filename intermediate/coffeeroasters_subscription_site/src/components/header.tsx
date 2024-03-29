import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";
import { Sidebar } from "./sidebar";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  margin-top: 5px;

  .desktop-ul {
    display: flex;
    gap: 32px;

    a {
      transition: var(--transition);
      color: var(--grey);
    }

    li:hover a {
      color: var(--dark-grey-blue);
    }
  }

  @media (max-width: 640px) {
    .desktop-ul {
      display: none;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <Sidebar />
        <ul className="desktop-ul">
          <li>
            <Link to="/">
              <p className="small">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              <p className="small">About us</p>
            </Link>
          </li>
          <li>
            <Link to="/create-your-plan">
              <p className="small">create your plan</p>
            </Link>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};
