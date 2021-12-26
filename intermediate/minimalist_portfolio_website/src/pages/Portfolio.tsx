import styled from 'styled-components';

import { ContactBanner } from '../components/ContactBanner';
import { DisplayGrid } from '../components/DisplayGrid';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

import { portfolio } from '../data/portfolio';

const StyledPortfolio = styled.div`
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
  return (
    <>
      <SEO title='My Projects' />
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
    </>
  );
};

export default PortfolioPage;
