import styled, { css } from 'styled-components';

import Layout from '../components/Layout';
import Button from '../components/Button';
import DisplayGrid from '../components/DisplayGrid';
import ContactBanner from '../components/ContactBanner';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

import hero from '../assets/homepage/desktop/image-homepage-hero@2x.jpg';
import heroTablet from '../assets/homepage/tablet/image-homepage-hero@2x.jpg';
import heroMobile from '../assets/homepage/mobile/image-homepage-hero@2x.jpg';

import profile from '../assets/homepage/desktop/image-homepage-profile@2x.jpg';
import profileTablet from '../assets/homepage/tablet/image-homepage-profile@2x.jpg';
import profileMobile from '../assets/homepage/mobile/image-homepage-profile@2x.jpg';

const HeroSection = styled.section`
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  position: relative;

  @media (max-width: 996px) {
    background-image: url(${heroTablet});
  }

  @media (max-width: 680px) {
    display: none;
  }
`;

const MobileHero = styled.section`
  display: none;

  img {
    width: 100%;
  }

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
  }
`;

const HeroContent = styled.div<{ isMobile: boolean }>`
  width: 445px;
  position: absolute;
  bottom: 0;
  background: var(--white);

  ${(props) =>
    props.isMobile &&
    css`
      position: static;
    `}

  h1 {
    padding: 56px 55px 53px 0;
  }

  @media (max-width: 996px) {
    width: 514px;

    h1 {
      font-size: 4rem;
      line-height: 4.2rem;
    }
  }

  @media (max-width: 680px) {
    width: fit-content;

    h1 {
      padding: 0;
      margin: 24px auto 32px;
    }
  }
`;

const ProfileSection = styled.section`
  margin: 150px 0;

  @media (max-width: 996px) {
    margin: 96px 0;
  }
`;

const HomePage = () => {
  const { width } = useWindowDimensions();

  const getImage = () => {
    if (width > 996) {
      return profile;
    } else if (width > 680) {
      return profileTablet;
    } else {
      return profileMobile;
    }
  };

  const renderHeroContent = () => (
    <HeroContent isMobile={width <= 680}>
      <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
      <Button adornment>about me</Button>
    </HeroContent>
  );

  return (
    <Layout>
      <MobileHero>
        <div>
          <img src={heroMobile} alt='' />
        </div>
        {renderHeroContent()}
      </MobileHero>

      <HeroSection>{renderHeroContent()}</HeroSection>
      <ProfileSection>
        <DisplayGrid
          alt='A sideview photo of Alex Spencer'
          description='I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.'
          img={getImage()}
          isHome
          label='go to portfolio'
          title='About Me'
          to='portfolio'
        />
      </ProfileSection>
      <ContactBanner />
    </Layout>
  );
};

export default HomePage;
