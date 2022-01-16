import React from "react";
import styled from "styled-components";

interface CollectionItemProps {
  img: string;
  title: string;
  desc: string;
}

const StyledCollectionItem = styled.div`
  text-align: center;
  max-width: 255px;
  z-index: 1;

  img {
    width: 100%;
  }

  .item-text {
    margin-top: 71.5px;

    h4 {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    height: 193px;
    max-width: 100%;
    text-align: left;

    img {
      width: 255px;
    }

    .item-text {
      margin-top: 0;
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 282px;
    height: 100%;
    text-align: center;
    align-items: center;

    img {
      width: 200px;
      margin-left: 2rem;
    }

    .item-text {
      margin-top: 24px;
    }
  }
`;

export const CollectionItem: React.FC<CollectionItemProps> = ({
  img,
  title,
  desc,
}) => {
  return (
    <StyledCollectionItem>
      <img src={img} alt={title} />
      <div className="item-text">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </StyledCollectionItem>
  );
};
