import styled from "styled-components";
import { Link } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { colours } from "../data/colour-data";

const StyledHeader = styled.header`
  height: 8.5rem;
  padding: 0 40px 0 32px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--white-20);

  .logo {
    font-family: var(--headingFF);
    font-size: 2.8rem;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    padding-top: 22px;
  }

  .desktop-nav {
    display: flex;
    gap: 33px;
  }

  @media (max-width: 996px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
    padding: 0 51px;

    .logo {
      padding-top: 32px;
    }

    .desktop-nav {
      padding-top: 39px;
      padding-bottom: 27px;
    }
  }

  @media (max-width: 767px) {
    height: 6.8rem;
    flex-direction: row;
    padding: 16px 24px;

    .logo {
      padding-top: 0;
    }

    .desktop-nav {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)<{ bg: string }>`
  color: var(--white);
  position: relative;
  padding-top: 29px;

  &:before {
    content: "";
    height: 4px;
    width: 100%;
    background: ${(props) => props.bg};
    position: absolute;
    top: 0;
    opacity: 0;
    transition: var(--transition);
  }

  &:hover:before {
    opacity: 1;
  }
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="logo">the planets</div>
      <div>
        <Sidebar />
        <nav className="desktop-nav">
          {colours.map((m) => (
            <StyledLink key={m.planet} to={m.planet} bg={m.colour}>
              <h4>{m.planet}</h4>
            </StyledLink>
          ))}
        </nav>
      </div>
    </StyledHeader>
  );
};
