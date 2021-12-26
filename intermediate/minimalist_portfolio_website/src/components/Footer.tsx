import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MenuList from './MenuList';
import SocialShare from './SocialShare';

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
  max-width: 1190px;
  margin: auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 680px) {
    padding: 0 32px;
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

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <InnerFooter>
        <Left>
          <Link to='/'>
            <Logo />
          </Link>
          <StyledNav>
            <MenuList />
          </StyledNav>
        </Left>
        <SocialShare dark />
      </InnerFooter>
    </StyledFooter>
  );
};

export default Footer;
