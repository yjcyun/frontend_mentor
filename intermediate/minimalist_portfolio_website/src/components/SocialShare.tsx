import styled from 'styled-components';

import { ReactComponent as Github } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';

const socialMenu = [
  { label: <Github />, to: 'https://github.com' },
  { label: <Twitter />, to: 'https://twitter.com' },
  { label: <LinkedIn />, to: 'https://linkedin.com' },
];

interface SocialShareProps {
  dark?: boolean;
}

const StyledSocialShare = styled.div<{ isDark: boolean }>`
  a:not(:first-child) {
    margin-left: 15px;
  }

  svg path {
    fill: ${(props) => (props.isDark ? 'var(--white)' : 'var(--light-black)')};
  }
`;

export const SocialShare: React.FC<SocialShareProps> = ({ dark = false }) => {
  return (
    <StyledSocialShare isDark={dark}>
      {socialMenu.map((m) => (
        <a
          href={m.to}
          key={m.to}
          target='_blank'
          rel='noreferrer'
          aria-label={`Navigate to ${m.to} in a new tab`}
        >
          {m.label}
        </a>
      ))}
    </StyledSocialShare>
  );
};
