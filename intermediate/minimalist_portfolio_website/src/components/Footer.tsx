import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Github } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';

import MenuList from './MenuList';

const socialMenu = [
  { label: <Github />, to: 'https://github.com' },
  { label: <Twitter />, to: 'https://twitter.com' },
  { label: <LinkedIn />, to: 'https://linkedin.com' },
];

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

  svg path {
    fill: var(--white);
  }

  @media (max-width: 680px) {
    padding: 0 32px;
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;

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

const SocialMediaCont = styled.div`
  a:not(:first-child) {
    margin-left: 15px;
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
        <SocialMediaCont>
          {socialMenu.map((m) => (
            <a href={m.to} key={m.to}>
              {m.label}
            </a>
          ))}
        </SocialMediaCont>
      </InnerFooter>
    </StyledFooter>
  );
};

export default Footer;
