import styled from "styled-components";

import granEspresso from "../assets/home/desktop/image-gran-espresso.png";
import planalto from "../assets/home/desktop/image-planalto.png";
import piccollo from "../assets/home/desktop/image-piccollo.png";
import danche from "../assets/home/desktop/image-danche.png";

import { CollectionItem } from "./collection-item";

const collectionList = [
  {
    img: granEspresso,
    title: "Gran Espresso",
    desc: "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    img: planalto,
    title: "Planalto",
    desc: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    img: piccollo,
    title: "Piccollo",
    desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    img: danche,
    title: "Danche",
    desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

const StyledCollection = styled.div`
  margin: 160px auto 200px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .collection-list-wrapper {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    margin: 144px auto;

    .collection-list-wrapper {
      flex-direction: column;
      width: 573px;
      margin: auto;
    }
  }

  @media (max-width: 767px) {
    margin: 120px auto;

    .collection-list-wrapper {
      align-items: center;
      gap: 48px;
      width: 100%;
    }
  }
`;

const CollectionText = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: -5rem;
  z-index: -1;

  .bg-text-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(254, 252, 247, 0.01), rgb(254, 252, 247));
    z-index: 2;
  }

  h1 {
    font-size: 15rem;
    font-family: var(--headingFF);
    line-height: 100%;
    color: var(--grey);
    z-index: -1;
    opacity: 0.5;
  }

  @media (max-width: 1230px) {
    margin-bottom: -3rem;

    h1 {
      font-size: 9.6rem;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 767px) {
    margin-bottom: 30px;

    h1 {
      font-size: 4rem;
    }
  }
`;

export const Collection = () => {
  return (
    <StyledCollection>
      <CollectionText>
        <div className="bg-text-overlay"></div>
        <h1>our collection</h1>
      </CollectionText>

      <div className="collection-list-wrapper">
        {collectionList.map((list) => (
          <CollectionItem key={list.title} {...list} />
        ))}
      </div>
    </StyledCollection>
  );
};
