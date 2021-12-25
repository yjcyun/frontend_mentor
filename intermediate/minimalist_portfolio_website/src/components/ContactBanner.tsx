import styled from 'styled-components';
import Button from './Button';
import Divider from './Divider';

const StyledContactBanner = styled.section`
  display: flex;
  align-items: center;

  h2 {
    max-width: 350px;
    margin-right: 32px;
  }

  button {
    margin-left: 32px;
  }
`;

const ContactBanner = () => {
  return (
    <StyledContactBanner>
      <h2>Interested in doing a project together?</h2>

      <Divider />
      <Button variant='secondary'>contact me</Button>
    </StyledContactBanner>
  );
};

export default ContactBanner;
