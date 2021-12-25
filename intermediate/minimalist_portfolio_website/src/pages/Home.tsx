import styled from 'styled-components';

import Layout from '../components/Layout';
import Button from '../components/Button';
import DisplayGrid from '../components/DisplayGrid';

import hero from '../assets/homepage/desktop/image-homepage-hero@2x.jpg';
import profile from '../assets/homepage/desktop/image-homepage-profile@2x.jpg';

const Hero = styled.section`
  background-image: url(${hero});
  background-size: cover;
  height: 600px;
  position: relative;
`;

const HeroContent = styled.div`
  width: 445px;
  position: absolute;
  bottom: 0;
  background: var(--white);

  h1 {
    padding: 56px 55px 53px 0;
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <Hero>
        <HeroContent>
          <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
          <Button adornment>about me</Button>
        </HeroContent>
      </Hero>
      <DisplayGrid
        alt='A sideview photo of Alex Spencer'
        description='I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.'
        img={profile}
        label='go to portfolio'
        title='About Me'
      />
    </Layout>
  );
};

export default HomePage;
