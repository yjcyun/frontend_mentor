import styled from 'styled-components';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Button } from './Button';
import { Divider } from './Divider';

const StyledContactBanner = styled.div`
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

export const ContactBanner: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <StyledContactBanner role='banner'>
      <h2>Interested in doing a project together?</h2>
      {width > 680 && <Divider />}
      <Button variant='secondary' to='/contact-me'>
        contact me
      </Button>
    </StyledContactBanner>
  );
};
