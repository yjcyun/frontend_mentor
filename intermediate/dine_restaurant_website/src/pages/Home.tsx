import styled from 'styled-components';

import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { ReserveBanner } from '../components/ReserveBanner';

import { ReactComponent as Logo } from '../assets/logo.svg';
import hero from '../assets/homepage/hero-bg-desktop@2x.jpg';
import heroTablet from '../assets/homepage/hero-bg-tablet@2x.jpg';
import heroMobile from '../assets/homepage/hero-bg-mobile@2x.jpg';

const HeroWrapper = styled.div`
  width: 100%;
  height: 820px;
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  color: var(--white);

  .overlay-whole {
    position: absolute;
    width: 62.5vw;
    right: 0;
    height: 100%;
    background: #181818;
    opacity: 0.2;
    z-index: 1;
  }

  .overlay-left {
    position: absolute;
    width: 37.5vw;
    height: 100%;
    background: var(--cod-gray);
    z-index: -1;
  }

  .hero-content {
    padding-top: 65px;
  }

  .hero-text {
    margin-top: 153px;

    h1 {
      width: 523px;
    }

    p {
      width: 445px;
      margin: 24px 0 42px;
    }
  }

  @media (max-width: 1024px) {
    background-image: url(${heroTablet});
    min-height: 992px;

    .overlay-whole {
      width: 100%;
      height: 43vh;
    }

    .hero-content {
      padding-top: 394px;
      text-align: center;
    }

    .hero-text {
      margin-top: 32px;

      h1 {
        width: auto;
        font-size: 4.8rem;
        line-height: 6.4rem;
        letter-spacing: -0.6px;
      }

      p {
        width: 573px;
        margin: 24px auto;
      }
    }
  }

  @media (max-width: 680px) {
    background-image: url(${heroMobile});
    min-height: 748px;

    .overlay-whole {
      height: 30vh;
    }

    .hero-content {
      padding-top: 270px;
    }

    .hero-text {
      h1 {
        width: auto;
        font-size: 3.2rem;
        line-height: 4rem;
        letter-spacing: -0.4px;
      }

      p {
        width: auto;
      }
    }
  }
`;

const HomePage = () => {
  return (
    <div>
      <HeroWrapper>
        <div className='overlay-left' />
        <div className='overlay-whole' />
        <div className='hero-content gutter'>
          <Logo />
          <div className='hero-text'>
            <h1>
              Exquisite dining
              <br /> since 1989
            </h1>
            <p>
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Button>book a table</Button>
          </div>
        </div>
      </HeroWrapper>
      <ReserveBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
