import granEspresso from "../assets/home/desktop/image-gran-espresso.png";
import planalto from "../assets/home/desktop/image-planalto.png";
import piccollo from "../assets/home/desktop/image-piccollo.png";
import danche from "../assets/home/desktop/image-danche.png";
import styled from "styled-components";
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
  margin-top: 262px;
  position: relative;
  display: flex;
  justify-content: center;

  .bg-text-overlay {
    position: absolute;
    top: -150px;
    height: 196px;
    width: 100%;
    background: linear-gradient(rgba(254, 252, 247, 0.01), rgb(254, 252, 247));
  }

  .bg-text {
    font-size: 15rem;
    font-family: var(--headingFF);
    line-height: 7.2rem;
    color: var(--grey);
    position: absolute;
    top: -55px;
    z-index: -1;
    opacity: 0.5;
  }

  .collection-list-wrapper {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

export const Collection = () => {
  return (
    <StyledCollection>
      <div className="bg-text-overlay"></div>
      <div className="bg-text">our collection</div>

      <div className="collection-list-wrapper">
        {collectionList.map((list) => (
          <CollectionItem key={list.title} {...list} />
        ))}
      </div>
    </StyledCollection>
  );
};
