import styled from 'styled-components';

import { FeatureContent } from './FeatureContent';
import { MenuListItem } from './MenuListItem';

import salmon from '../assets/homepage/salmon-desktop-tablet@2x.jpg';
import beef from '../assets/homepage/beef-desktop-tablet@2x.jpg';
import chocolate from '../assets/homepage/chocolate-desktop-tablet@2x.jpg';

const menu = [
  {
    title: 'Seared Salmon Fillet',
    description:
      'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
    img: salmon,
  },
  {
    title: 'Rosemary Filet Mignon',
    description:
      'Our prime beef served to your taste with a delicious choice of seasonal sides.',
    img: beef,
  },
  {
    title: 'Summer Fruit Chocolate Mousse',
    description:
      'Creamy mousse combined with summer fruits and dark chocolate shavings.',
    img: chocolate,
  },
];

const StyledMenuHighlights = styled.div`
  background: var(--cod-gray);
  padding: 200px 0 120px;

  .gutter {
    display: flex;
    gap: 125px;
  }

  ul {
    width: 540px;
    padding-top: 50px;
  }

  @media (max-width: 1024px) {
    padding: 96px 0;

    .gutter {
      flex-direction: column;
      gap: 56px;
      align-items: center;
    }

    ul {
      padding-top: 0px;
    }
  }

  @media (max-width: 680px) {
    padding: 72px 0;

    ul {
      width: 100%;
    }
  }
`;

export const MenuHighlights: React.FC = () => {
  return (
    <StyledMenuHighlights>
      <div className='gutter'>
        <FeatureContent
          title='A few highlights from our menu'
          description='We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.'
          dark
        />
        <ul>
          {menu.map((m) => (
            <MenuListItem key={m.title} {...m} />
          ))}
        </ul>
      </div>
    </StyledMenuHighlights>
  );
};
