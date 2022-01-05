import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from './Button';

import family from '../assets/homepage/family-gathering-desktop@2x.jpg';
import familyTablet from '../assets/homepage/family-gathering-tablet@2x.jpg';
import familyMobile from '../assets/homepage/family-gathering-mobile@2x.jpg';

import specialEvents from '../assets/homepage/special-events-desktop@2x.jpg';
import specialEventsTablet from '../assets/homepage/special-events-tablet@2x.jpg';
import specialEventsMobile from '../assets/homepage/special-events-mobile@2x.jpg';

import socialEvents from '../assets/homepage/social-events-desktop@2x.jpg';
import socialEventsTablet from '../assets/homepage/social-events-tablet@2x.jpg';
import socialEventsMobile from '../assets/homepage/social-events-mobile@2x.jpg';

import curveTopRight from '../assets/patterns/pattern-curve-top-right.svg';
import lines from '../assets/patterns/pattern-lines.svg';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const getImage = (width: number, img: 'family' | 'social' | 'special') => {
  if (width > 1024) {
    switch (img) {
      case 'family':
        return family;
      case 'social':
        return socialEvents;
      case 'special':
        return specialEvents;
    }
  } else if (width > 680) {
    switch (img) {
      case 'family':
        return familyTablet;
      case 'social':
        return socialEventsTablet;
      case 'special':
        return specialEventsTablet;
    }
  } else {
    switch (img) {
      case 'family':
        return familyMobile;
      case 'social':
        return socialEventsMobile;
      case 'special':
        return specialEventsMobile;
    }
  }
};

const slides = (width: number) => [
  {
    title: 'Family Gathering',
    description:
      'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    img: getImage(width, 'family'),
  },
  {
    title: 'Special Events',
    description:
      'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    img: getImage(width, 'special'),
  },
  {
    title: 'Social Events',
    description:
      'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    img: getImage(width, 'social'),
  },
];

const StyledSlide = styled.div`
  padding: 160px 0;
  position: relative;
  overflow: hidden;

  &:before {
    content: url(${curveTopRight});
    position: absolute;
    top: 0;
    left: -20%;
    z-index: -1;
  }

  &:after {
    content: url(${lines});
    position: absolute;
    top: 13%;
    left: 12rem;
  }

  @media (max-width: 1024px) {
    padding: 120px 0;

    &:before {
      left: -65%;
    }

    &:after {
      top: 11%;
      left: 5rem;
    }
  }

  @media (max-width: 680px) {
    &:after {
      display: none;
    }
  }
`;

const InnerSlide = styled.div`
  display: flex;
  gap: 125px;
  align-items: center;

  img {
    width: 540px;
  }

  .slide-content {
    display: flex;
    flex-direction: column;

    p {
      padding: 16px 0 32px;
    }
  }

  .options {
    padding-top: 78px;
    display: flex;
    flex-direction: column;

    h3 {
      position: relative;
      cursor: pointer;
      color: #4c4c4c;
      opacity: 0.5;

      &:nth-child(2) {
        padding: 12px 0;
      }

      &:before {
        content: '';
        position: absolute;
        width: 95px;
        height: 1px;
        background: var(--beaver);
        left: -125px;
        top: 50%;
        display: none;
      }

      &.active {
        opacity: 1;

        &:before {
          display: block;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 56px;

    h2 {
      padding-top: 40px;
    }

    .options {
      order: -1;
      padding-top: 0;
      flex-direction: row;
      justify-content: space-between;

      h3 {
        &:nth-child(2) {
          padding: 0;
        }

        &:before {
          width: 48px;
          left: 50%;
          top: 130%;
          transform: translateX(-50%);
        }
      }
    }

    button {
      margin: auto;
    }

    img {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    gap: 48px;

    .options {
      flex-direction: column;
      gap: 16px;
    }
  }
`;

export const Slide: React.FC = () => {
  const { width } = useWindowDimensions();
  const [activeSlide, setActiveSlide] = useState(slides(1440)[0]);

  useEffect(() => {
    setActiveSlide(slides(width)[0]);
  }, [width]);

  const { img, title, description } = activeSlide;

  return (
    <StyledSlide>
      <InnerSlide className='gutter'>
        <img src={img} alt={title} />
        <div className='slide-content'>
          <h2>{title}</h2>
          <p>{description}</p>
          <Button variant='light'>Book a table</Button>

          <div className='options'>
            {slides(width).map((t) => (
              <h3
                className={`small ${
                  t.title === activeSlide.title ? 'active' : ''
                }`}
                key={t.title}
                onClick={() => setActiveSlide(t)}
              >
                {t.title}
              </h3>
            ))}
          </div>
        </div>
      </InnerSlide>
    </StyledSlide>
  );
};
