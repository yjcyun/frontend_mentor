import styled from 'styled-components';

import DisplayGrid from '../components/DisplayGrid';
import Layout from '../components/Layout';

import manage from '../assets/portfolio/image-portfolio-manage@2x.jpg';
import bookmark from '../assets/portfolio/image-portfolio-bookmark@2x.jpg';
import insure from '../assets/portfolio/image-portfolio-insure@2x.jpg';
import fylo from '../assets/portfolio/image-portfolio-fylo@2x.jpg';
import ContactBanner from '../components/ContactBanner';
import { portfolio } from '../data/portfolio';

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
        {portfolio.map((p) => (
          <DisplayGrid
            key={p.id}
            alt={p.overviewImgAlt}
            description={p.description}
            img={p.overviewImg}
            label='view project'
            title={p.title}
            to={p.slug}
          />
        ))}
      </StyledPortfolio>
      <ContactBanner />
    </Layout>
  );
};

export default PortfolioPage;
