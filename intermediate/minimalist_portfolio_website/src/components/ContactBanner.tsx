import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { Button } from './Button';
import Divider from './Divider';

const StyledContactBanner = styled.section`
  display: flex;
  align-items: center;

  h2 {
    min-width: 350px;
    margin-right: 32px;
  }

  button {
    margin-left: 32px;
  }

  @media (max-width: 680px) {
    flex-direction: column;

    h2 {
      min-width: fit-content;
      text-align: center;
      margin-right: 0;
      margin-bottom: 40px;
    }

    button {
      margin-left: 0;
    }
  }
`;

const ContactBanner = () => {
  const { width } = useWindowDimensions();

  return (
    <StyledContactBanner>
      <h2>Interested in doing a project together?</h2>
      {width > 680 && <Divider />}
      <Link to='/contact-me'>
        <Button variant='secondary'>contact me</Button>
      </Link>
    </StyledContactBanner>
  );
};

export default ContactBanner;
