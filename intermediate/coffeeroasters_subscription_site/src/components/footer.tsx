import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoDark } from "../assets/shared/desktop/logo-dark.svg";
import { ReactComponent as Facebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Instagram } from "../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as Twitter } from "../assets/shared/desktop/icon-twitter.svg";

const StyledFooter = styled.footer`
  background: var(--dark-grey-blue);
  padding: 47px 85px;
  display: flex;
  justify-content: space-between;

  .inner-footer {
    display: flex;
    max-width: 622px;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 54px 0;
    align-items: center;

    .inner-footer {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 5px;

  ul {
    display: flex;
    gap: 32px;
  }

  a {
    color: var(--grey);
  }

  li:hover a {
    color: var(--white);
  }

  .small {
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    margin-top: 32px;
    margin-bottom: 65px;
  }

  @media (max-width: 640px) {
    margin-top: 48.5px;
    margin-bottom: 48.5px;

    ul {
      flex-direction: column;
      gap: 24px;
      text-align: center;
    }
  }
`;

const StyledShareIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: 50px;

  li:hover a {
    color: var(--dark-grey-blue);
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="inner-footer">
        <LogoDark />
        <StyledNav>
          <ul>
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
              {" "}
              <Link to="/create-your-plan">
                <p className="small">create your plan</p>
              </Link>
            </li>
          </ul>
        </StyledNav>
      </div>
      <StyledShareIcons>
        <a href="/">
          <Facebook />
        </a>
        <a href="/">
          <Twitter />
        </a>
        <a href="/">
          <Instagram />
        </a>
      </StyledShareIcons>
    </StyledFooter>
  );
};
