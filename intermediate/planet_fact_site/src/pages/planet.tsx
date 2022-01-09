import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

import data from "./data.json";

import { ButtonGroup } from "../components/button-group";
import { Information } from "../components/information";
import { CardGroup } from "../components/card-group";
import { CardType } from "../types";

import bgStars from "../assets/background-stars.svg";

const StyledPlanet = styled.div`
  background: url(${bgStars});
  padding: 126px 165px 56px;
  min-height: calc(100vh - 85px);
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;

  .img-cont {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .geology-img {
    position: absolute;
    width: 163px;
    bottom: 0;
  }

  .content-cont {
    width: 350px;
  }
`;

export const PlanetPage = () => {
  const { planetId } = useParams();
  const [activeButton, setActiveButton] = useState("overview");

  const planet = data.filter((d) => d.name.toLowerCase() === planetId)[0];

  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images,
  } = planet;

  const buttonHandler = (text: string) => {
    setActiveButton(text);
  };

  const getActiveInformation = () => {
    switch (activeButton) {
      case "overview":
        return overview;
      case "structure":
        return structure;
      case "geology":
        return geology;
    }
  };

  const getActiveImage = () => {
    switch (activeButton) {
      case "overview":
        return images["planet"];
      case "structure":
        return images["internal"];
      case "geology":
        return images["geology"];
    }
  };

  const cardData: CardType[] = [
    { label: "rotation", content: rotation },
    { label: "revolution", content: revolution },
    { label: "radius", content: radius },
    { label: "temperature", content: temperature },
  ];

  console.log("." + getActiveImage());

  return (
    <StyledPlanet>
      <TopDiv>
        <div className="img-cont">
          {activeButton === "geology" ? (
            <>
              <img src={images["planet"]} alt={activeButton} />
              <img
                src={getActiveImage()}
                alt={activeButton}
                className="geology-img"
              />
            </>
          ) : (
            <img src={getActiveImage()} alt={activeButton} />
          )}
        </div>
        <div className="content-cont">
          <Information
            name={name}
            content={getActiveInformation()!.content}
            source={getActiveInformation()!.source}
          />
          <ButtonGroup
            bg="var(--blue)"
            onChange={buttonHandler}
            activeButton={activeButton}
          />
        </div>
      </TopDiv>
      <CardGroup data={cardData} />
    </StyledPlanet>
  );
};
