import styled from "styled-components";
import { Link } from "react-router-dom";
import { Sidebar } from "./sidebar";

export const menu = [
  { label: "mercury", color: "#DEF4FC" },
  { label: "venus", color: "#F7CC7F" },
  { label: "earth", color: "#545BFE" },
  { label: "mars", color: "#FF6A45" },
  { label: "jupiter", color: "#ECAD7A" },
  { label: "saturn", color: "#FCCB6B" },
  { label: "uranus", color: "#65F0D5" },
  { label: "neptune", color: "#497EFA" },
];

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
    padding-top: 33px;
  }

  a {
    color: var(--white);
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

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="logo">the planets</div>
      <div>
        <Sidebar />
        <nav className="desktop-nav">
          {menu.map((m) => (
            <Link key={m.label} to={m.label}>
              <h4>{m.label}</h4>
            </Link>
          ))}
        </nav>
      </div>
    </StyledHeader>
  );
};
