import styled from 'styled-components';
import Layout from '../components/Layout';
import hero from '../assets/homepage/desktop/image-homepage-hero@2x.jpg';
import { Button } from '../components/Button';

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
    </Layout>
  );
};

export default HomePage;
