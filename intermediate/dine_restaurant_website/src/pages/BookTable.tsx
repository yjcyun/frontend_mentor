import styled from "styled-components";

import { ReactComponent as Logo } from "../assets/logo.svg";
import hero from "../assets/booking/hero-bg-desktop@2x.jpg";
import { HeroText } from "../components/HeroText";
import { Form } from "../components/Form";

const StyledBookTable = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--white);
  height: 600px;

  .hero {
    padding-top: 65px;
  }

  .hero-content {
    display: flex;
  }
`;

const BookTablePage = () => {
  return (
    <StyledBookTable>
      <div className="hero gutter">
        <Logo />
        <div className="hero-content">
          <HeroText
            title="Reservations"
            description="We can’t wait to host you. If you have any special requirements
          please feel free to call on the phone number below. We’ll be happy
          to accommodate you."
          />
          <Form />
        </div>
      </div>
    </StyledBookTable>
  );
};

export default BookTablePage;
