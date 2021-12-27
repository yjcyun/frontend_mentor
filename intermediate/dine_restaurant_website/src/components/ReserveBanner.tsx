import styled from 'styled-components';

import { Button } from './Button';

import hero from '../assets/homepage/ready-bg-desktop@2x.jpg';
import heroTablet from '../assets/homepage/ready-bg-tablet@2x.jpg';
import heroMobile from '../assets/homepage/ready-bg-mobile@2x.jpg';

const StyledReserveBanner = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  color: var(--white);
  padding: 92px 0;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  @media (max-width: 996px) {
    background-image: url(${heroMobile});
    padding: 65px 0;

    .content {
      flex-direction: column;
      gap: 23px;
      text-align: center;
    }
  }

  @media (max-width: 680px) {
    background-image: url(${heroTablet});
    padding: 80px 0;
  }
`;

export const ReserveBanner: React.FC = () => {
  return (
    <StyledReserveBanner>
      <div className='content gutter'>
        <h2>Ready to make a reservation?</h2>
        <Button to='/'>Book a table</Button>
      </div>
    </StyledReserveBanner>
  );
};
