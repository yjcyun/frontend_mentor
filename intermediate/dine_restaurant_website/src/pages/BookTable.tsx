import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/logo.svg';
import hero from '../assets/booking/hero-bg-desktop@2x.jpg';
import { HeroText } from '../components/HeroText';

const StyledBookTable = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--white);
  height: 600px;

  .hero-content {
    padding-top: 65px;
  }
`;

const BookTablePage = () => {
  return (
    <StyledBookTable>
      <div className='hero-content gutter'>
        <Logo />
        <HeroText
          title='Reservations'
          description='We can’t wait to host you. If you have any special requirements
          please feel free to call on the phone number below. We’ll be happy
          to accommodate you.'
        />
      </div>
    </StyledBookTable>
  );
};

export default BookTablePage;
