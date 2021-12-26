import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/logo.svg';

import { MenuList } from './MenuList';
import { Sidebar } from './Sidebar';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 32px;
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

  @media (max-width: 680px) {
    display: none;
  }
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Link to='/' aria-label='Navigate to homepage'>
        <Logo />
      </Link>

      <div>
        <Sidebar />
        <StyledNav aria-label='header-nav'>
          <MenuList />
        </StyledNav>
      </div>
    </StyledHeader>
  );
};
