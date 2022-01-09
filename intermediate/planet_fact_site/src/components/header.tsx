import styled from "styled-components";

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

  ul {
    display: flex;
    gap: 33px;
    padding-top: 33px;
  }

  @media (max-width: 996px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
    padding: 0 51px;

    .logo {
      padding-top: 32px;
    }

    ul {
      padding-top: 39px;
      padding-bottom: 27px;
    }
  }
`;

const menu = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="logo">the planets</div>
      <ul>
        {menu.map((m) => (
          <li key={m}>
            <h4>{m}</h4>
          </li>
        ))}
      </ul>
    </StyledHeader>
  );
};
