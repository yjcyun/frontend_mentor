import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Button } from '../components/Button';
import Divider from '../components/Divider';
import Layout from '../components/Layout';

import ContactBanner from '../components/ContactBanner';
import Pagination from '../components/Pagination';
import { portfolio, PortfolioType } from '../data/portfolio';
import { useEffect, useState } from 'react';

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
  const [data, setData] = useState<PortfolioType>(portfolio[0]);

  useEffect(() => {
    portfolio.forEach((p) => {
      if (p.slug === portfolioId) {
        setData(p);
      }
    });
  }, [portfolioId]);

  const {
    id,
    hero_img,
    hero_img_alt,
    title,
    description,
    skills,
    project_background,
    preview1,
    preview2,
  } = data;

  const getIndex = (id: number, direction: 'prev' | 'next') => {
    const dataLength = portfolio.length;
    let index = id;

    if (id === 0) {
      index = direction === 'prev' ? dataLength - 1 : id + 1;
    } else if (id === dataLength - 1) {
      index = direction === 'prev' ? id - 1 : 0;
    } else {
      index = direction === 'prev' ? id - 1 : id + 1;
    }

    return index;
  };

  const prev = portfolio[getIndex(id, 'prev')];
  const next = portfolio[getIndex(id, 'next')];

  return (
    <Layout>
      <HeroWrapper>
        <img src={hero_img} alt={hero_img_alt} />
      </HeroWrapper>
      <Grid>
        <SummaryWrapper>
          <Divider />
          <SummaryContent>
            <div>
              <h2>{title}</h2>
              <p className='body2 mobile'>{description}</p>
              <ul>
                {skills.map((s, i) => (
                  <li key={i}>
                    <p>{s}</p>
                  </li>
                ))}
              </ul>
              <Button variant='secondary'>visit website</Button>
            </div>

            <p className='body2 tablet'>{description}</p>
          </SummaryContent>
          <Divider />
        </SummaryWrapper>
        <DetailsWrapper>
          <DetailsContent>
            <Subtitle>Project Background</Subtitle>
            <p className='body2'>{project_background}</p>
          </DetailsContent>
          <PreviewContent>
            <Subtitle>Static Previews</Subtitle>
            <img src={preview1} alt={hero_img_alt} />
            <img src={preview2} alt={hero_img_alt} />
          </PreviewContent>
        </DetailsWrapper>
      </Grid>
      <Pagination prev={prev} next={next} />
      <ContactBanner />
    </Layout>
  );
};

export default PortfolioDetailPage;
