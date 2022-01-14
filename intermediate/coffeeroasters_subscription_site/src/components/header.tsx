import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 32px;

  a {
    transition: var(--transition);
    color: var(--grey);
  }

  &:hover a {
    color: var(--dark-grey-blue);
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <Link to="/">
          <p className="small">Home</p>
        </Link>
        <Link to="/about-us">
          <p className="small">About us</p>
        </Link>
        <Link to="/create-your-plan">
          <p className="small">create your plan</p>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};
