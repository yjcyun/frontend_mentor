import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Button from '../components/Button';
import Divider from '../components/Divider';
import Layout from '../components/Layout';

import img from '../assets/detail/desktop/image-manage-hero@2x.jpg';
import preview from '../assets/detail/desktop/image-manage-preview-1@2x.jpg';
import preview2 from '../assets/detail/desktop/image-manage-preview-2@2x.jpg';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import ContactBanner from '../components/ContactBanner';

const HeroWrapper = styled.section`
  img {
    width: 100%;
  }
`;

const Grid = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 115px;
  gap: 4.8rem;

  @media (max-width: 996px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

const SummaryWrapper = styled.div`
  width: 350px;

  @media (max-width: 996px) {
    flex-direction: column;
    width: 100%;
  }
`;

const DetailsWrapper = styled.div`
  width: 635px;

  @media (max-width: 996px) {
    width: 100%;
  }
`;

const DetailsContent = styled.div`
  margin-bottom: 40px;
`;

const Subtitle = styled.h3`
  margin-bottom: 28px;
`;

const SummaryContent = styled.div`
  padding: 48px 0;

  .body2 {
    padding: 29px 0 23px;

    &.tablet {
      display: none;
    }
  }

  ul {
    list-style: none;

    li:not(:last-child) {
      margin-bottom: 16px;
    }
    p {
      color: var(--cyan);
      font-weight: 700;
    }
  }

  button {
    margin-top: 32px;
  }

  @media (max-width: 996px) {
    padding: 32px 0;
  }

  @media (max-width: 680px) {
    padding: 25px 0;
  }

  @media (min-width: 680px) and (max-width: 996px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .body2 {
      padding: 0;

      &.mobile {
        display: none;
      }

      &.tablet {
        display: block;
      }
    }

    ul {
      margin: 16px 0;

      p {
        font-size: 1.3rem;
      }
    }

    button {
      margin-top: 0;
    }
  }
`;

const PreviewContent = styled.div`
  img {
    width: 100%;

    &:first-of-type {
      margin-bottom: 32px;
    }
  }
`;
const PortfolioDetailPage = () => {
  const { portfolioId } = useParams();
  const { width } = useWindowDimensions();

  return (
    <Layout>
      <HeroWrapper>
        <img src={img} alt='' />
      </HeroWrapper>
      <Grid>
        <SummaryWrapper>
          <Divider />
          <SummaryContent>
            <div>
              <h2>Manage</h2>

              <p className='body2 mobile'>
                This project required me to build a fully responsive landing
                page to the designs provided. I used HTML5, along with CSS Grid
                and JavaScript for the areas that required interactivity, such
                as the testimonial slider.
              </p>

              <ul>
                <li>
                  <p>Interaction Design / Front End Development</p>
                </li>
                <li>
                  <p>HTML / CSS / JS</p>
                </li>
              </ul>
              <Button variant='secondary'>visit website</Button>
            </div>

            <p className='body2 tablet'>
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </p>
          </SummaryContent>
          <Divider />
        </SummaryWrapper>
        <DetailsWrapper>
          <DetailsContent>
            <Subtitle>Project Background</Subtitle>
            <p className='body2'>
              This project was a front-end challenge from Frontend Mentor. It’s
              a platform that enables you to practice building websites to a
              design and project brief. Each challenge includes mobile and
              desktop designs to show how the website should look at different
              screen sizes. Creating these projects has helped me refine my
              workflow and solve real-world coding problems. I’ve learned
              something new with each project, helping me to improve and adapt
              my style.
            </p>
          </DetailsContent>
          <PreviewContent>
            <Subtitle>Static Previews</Subtitle>
            <img src={preview} alt='' />
            <img src={preview2} alt='' />
          </PreviewContent>
        </DetailsWrapper>
      </Grid>
      <ContactBanner />
    </Layout>
  );
};

export default PortfolioDetailPage;
