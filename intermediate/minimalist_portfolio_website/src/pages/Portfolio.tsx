import styled from 'styled-components';

import DisplayGrid from '../components/DisplayGrid';
import Layout from '../components/Layout';

import manage from '../assets/portfolio/desktop/image-portfolio-manage@2x.jpg';
import bookmark from '../assets/portfolio/desktop/image-portfolio-bookmark@2x.jpg';
import insure from '../assets/portfolio/desktop/image-portfolio-insure@2x.jpg';
import fylo from '../assets/portfolio/desktop/image-portfolio-fylo@2x.jpg';
import ContactBanner from '../components/ContactBanner';

const StyledPortfolio = styled.section`
  margin-bottom: 150px;

  @media (max-width: 996px) {
    margin-bottom: 96px;
  }

  @media (max-width: 680px) {
    margin-bottom: 80px;
  }

  & > :not(:last-child) {
    margin-bottom: 80px;

    @media (max-width: 680px) {
      margin-bottom: 72px;
    }
  }
`;

const PortfolioPage = () => {
  const getImage = (project: 'manage' | 'bookmark' | 'insure' | 'fylo') => {
    switch (project) {
      case 'manage':
        return manage;
      case 'bookmark':
        return bookmark;
      case 'insure':
        return insure;
      case 'fylo':
        return fylo;
    }
  };

  return (
    <Layout>
      <StyledPortfolio>
        <DisplayGrid
          alt='A mockup of Manage site'
          description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.'
          img={getImage('manage')}
          label='view project'
          title='Manage'
        />
        <DisplayGrid
          alt='A mockup of Bookmark site'
          description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.'
          img={getImage('bookmark')}
          label='view project'
          title='Bookmark'
        />
        <DisplayGrid
          alt='A mockup of Insure site'
          description='This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.'
          img={getImage('insure')}
          label='view project'
          title='Insure'
        />
        <DisplayGrid
          alt='A mockup of Fylo site'
          description='This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.'
          img={getImage('fylo')}
          label='view project'
          title='Fylo'
        />
      </StyledPortfolio>
      <ContactBanner />
    </Layout>
  );
};

export default PortfolioPage;
