import styled from "styled-components";

const StyledH1 = styled.h1`
  color: white;
  letter-spacing: 15px;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const Header = () => {
  return <StyledH1>TODO</StyledH1>;
};

export default Header;
