import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/logo.svg';

const StyledFooter = styled.footer`
  background: var(--cod-gray);
  padding: 78px 0;
  color: var(--white);

  @media (max-width: 996px) {
    padding: 64px 0;
  }

  @media (max-width: 680px) {
    padding: 80px 0;
  }
`;

const InnerFooter = styled.div`
  display: flex;
  justify-content: space-between;

  .footer-content {
    display: flex;
    gap: 124px;
  }

  @media (max-width: 996px) {
    .footer-content {
      flex-direction: column;
      gap: 32px;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <InnerFooter className='gutter'>
        <Logo />
        <div className='footer-content'>
          <div>
            <h3 className='small'>
              Marthwaite, Sedbergh
              <br /> Cumbria
              <br /> +00 44 123 4567
            </h3>
          </div>
          <div>
            <h3 className='small'>
              OPEN TIMES
              <br />
              MON - FRI: 09:00 AM - 10:00 PM
              <br />
              SAT - SUN: 09:00 AM - 11:30 PM
              <br />
            </h3>
          </div>
        </div>
      </InnerFooter>
    </StyledFooter>
  );
};
