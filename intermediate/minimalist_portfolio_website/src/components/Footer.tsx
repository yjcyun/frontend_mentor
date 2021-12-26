import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MenuList } from './MenuList';
import { SocialShare } from './SocialShare';

import { ReactComponent as Logo } from '../assets/logo.svg';

const StyledFooter = styled.footer`
  background: var(--light-black);
  padding: 24px 0;
  height: 82px;

  @media (max-width: 680px) {
    height: fit-content;
    padding: 56px 0;
  }
`;

const InnerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  svg path {
    fill: var(--white);
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const StyledNav = styled.nav`
  margin-left: 6px;

  a {
    color: var(--white);
    margin-left: 42px;
  }

  @media (max-width: 680px) {
    margin-left: 0;
    padding: 40px 0;

    a {
      display: block;
      margin-left: 0;
      text-align: center;

      &:not(:first-child) {
        margin-top: 32px;
      }
    }
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <InnerFooter className='gutter'>
        <Left>
          <Link to='/' aria-label='Navigate to homepage'>
            <Logo />
          </Link>
          <StyledNav aria-label='footer-nav'>
            <MenuList />
          </StyledNav>
        </Left>
        <SocialShare dark />
      </InnerFooter>
    </StyledFooter>
  );
};
