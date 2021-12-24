import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/logo.svg';

import Sidebar from './Sidebar';
import MenuList from './MenuList';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const StyledNav = styled.nav`
  a {
    color: var(--light-black);
    margin-left: 42px;

    &:hover,
    &.active {
      color: var(--cyan);
    }
  }

  @media (max-width: 568px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <Logo />
      </Link>

      <div>
        <Sidebar />
        <StyledNav>
          <MenuList />
        </StyledNav>
      </div>
    </StyledHeader>
  );
};

export default Header;
