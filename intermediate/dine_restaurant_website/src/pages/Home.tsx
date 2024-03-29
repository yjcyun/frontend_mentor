import styled from 'styled-components';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Button } from '../components/Button';
import { FeatureContent } from '../components/FeatureContent';
import { Footer } from '../components/Footer';
import { ReserveBanner } from '../components/ReserveBanner';
import { MenuHighlights } from '../components/MenuHighlights';
import { Slide } from '../components/Slide';

import { ReactComponent as Logo } from '../assets/logo.svg';
import hero from '../assets/homepage/hero-bg-desktop@2x.jpg';
import heroTablet from '../assets/homepage/hero-bg-tablet@2x.jpg';
import heroMobile from '../assets/homepage/hero-bg-mobile@2x.jpg';

import enjoyable from '../assets/homepage/enjoyable-place-desktop@2x.jpg';
import enjoyableTablet from '../assets/homepage/enjoyable-place-tablet@2x.jpg';
import enjoyableMobile from '../assets/homepage/enjoyable-place-mobile@2x.jpg';

import locally from '../assets/homepage/locally-sourced-desktop@2x.jpg';
import locallyTablet from '../assets/homepage/locally-sourced-tablet@2x.jpg';
import locallyMobile from '../assets/homepage/locally-sourced-mobile@2x.jpg';

import CurveTopRight from '../assets/patterns/pattern-curve-top-right.svg';
import CurveTopLeft from '../assets/patterns/pattern-curve-top-left.svg';
import Lines from '../assets/patterns/pattern-lines.svg';
import { HeroText } from '../components/HeroText';

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

  @media (max-width: 1024px) {
    background-image: url(${heroTablet});
    min-height: 992px;

    .overlay-whole {
      width: 100%;
      height: 43vh;
    }

    .overlay-left {
      width: auto;
    }

    .hero-content {
      padding-top: 394px;
      text-align: center;
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
  }
`;

const FeaturesWrapper = styled.div<{ reverse: boolean }>`
  z-index: 1;
  margin-top: -6rem !important;
  margin-bottom: -6rem !important;
  position: relative;
  overflow: hidden;

  .feature-img {
    width: 100%;
    max-width: 540px;
  }

  .grid {
    display: flex;
    align-items: center;
    gap: 125px;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    padding-bottom: ${(props) => (props.reverse ? '0' : '181px')};
  }

  .pattern {
    position: absolute;
    left: ${(props) => (props.reverse ? 'undefined' : '0')};
    right: ${(props) => (props.reverse ? '0' : 'undefined')};
    bottom: ${(props) => (props.reverse ? '6rem' : 'undefined')};
    top: ${(props) => (props.reverse ? 'undefined' : '33%')};
  }

  .pattern-lines {
    position: absolute;
    right: 4%;
    top: 40%;
  }

  @media (max-width: 1024px) {
    margin-bottom: 0 !important;

    .grid {
      flex-direction: column;
      gap: 56px;
      padding-bottom: ${(props) => (props.reverse ? '120px' : '180px')};
      text-align: center;
    }

    .pattern {
      left: ${(props) => (props.reverse ? 'undefined' : '-50rem')};
      right: ${(props) => (props.reverse ? '-50rem' : 'undefined')};
      bottom: ${(props) => (props.reverse ? '0rem' : 'undefined')};
      top: ${(props) => (props.reverse ? 'undefined' : '22%')};
    }

    .pattern-lines {
      right: 9%;
      top: 25%;
    }
  }

  @media (max-width: 680px) {
    margin-top: -9rem !important;

    .grid {
      gap: 48px;
      padding-bottom: ${(props) => (props.reverse ? '80px' : '140px')};
    }

    .pattern,
    .pattern-lines {
      display: none;
    }
  }
`;

const HomePage = () => {
  const { width } = useWindowDimensions();

  const getImage = (img: 'enjoyable' | 'locally') => {
    if (width > 1024) {
      switch (img) {
        case 'enjoyable':
          return enjoyable;
        case 'locally':
          return locally;
      }
    } else if (width > 680) {
      switch (img) {
        case 'enjoyable':
          return enjoyableTablet;
        case 'locally':
          return locallyTablet;
      }
    } else {
      switch (img) {
        case 'enjoyable':
          return enjoyableMobile;
        case 'locally':
          return locallyMobile;
      }
    }
  };

  return (
    <div>
      <HeroWrapper>
        <div className='overlay-left' />
        <div className='overlay-whole' />
        <div className='hero-content gutter'>
          <Logo />
          <HeroText
            title={
              <>
                Exquisite dining
                <br /> since 1989
              </>
            }
            description='Experience our seasonal menu in beautiful country surroundings.
            Eat the freshest produce from the comfort of our farmhouse.'
            btnLabel='book a table'
            btnTo='/book-a-table'
          />
        </div>
      </HeroWrapper>
      <FeaturesWrapper className='' reverse={false}>
        <div className='grid gutter'>
          <img src={getImage('enjoyable')} alt='' className='feature-img' />
          <FeatureContent
            title='Enjoyable place
for all the family'
            description='Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.'
          />
        </div>
        <img src={CurveTopRight} alt='' className='pattern' />
      </FeaturesWrapper>
      <FeaturesWrapper reverse>
        <div className='grid gutter'>
          <img src={getImage('locally')} alt='' className='feature-img' />
          <FeatureContent
            title='The most locally sourced food'
            description='All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.'
          />
        </div>
        <img src={CurveTopLeft} alt='' className='pattern' />
        <img src={Lines} alt='' className='pattern-lines' />
      </FeaturesWrapper>
      <MenuHighlights />
      <Slide />
      <ReserveBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
