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
