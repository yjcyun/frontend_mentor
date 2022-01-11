import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

import data from "./data.json";
import { colours } from "./colour-data";

import { useWindowDimensions } from "../hooks/useWindowDimensions";

import { ButtonGroup } from "../components/button-group";
import { Information } from "../components/information";
import { CardGroup } from "../components/card-group";

import { CardType } from "../types";

import bgStars from "../assets/background-stars.svg";

const StyledPlanet = styled.div`
  background: url(${bgStars});
  min-height: calc(100vh - 85px);
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 1190px;
  margin: auto;
  padding: 0 40px 56px;
  height: calc(1024px - 85px);

  @media (max-width: 996px) {
    height: fit-content;
  }

  @media (max-width: 767px) {
    padding: 0 24px 56px;
  }
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 87px;
  gap: 10rem;

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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  @media (max-width: 996px) {
    flex-direction: column;
    margin-bottom: 27px;
    gap: 0;

    .img-cont {
      min-height: 460px;
      max-width: 369px;
      margin: auto;
    }

    img {
      width: 63%;
    }

    .content-cont {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 767px) {
    .img-cont {
      min-height: 304px;
      padding: 0;
    }

    img {
      width: 40%;
    }

    .geology-img {
      width: 20%;
      bottom: 10%;
    }
  }
`;

export const PlanetPage = () => {
  const { planetId } = useParams();
  const [activeButton, setActiveButton] = useState("overview");
  const { width } = useWindowDimensions();

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

  const getPlanetColour = () => {
    return colours.filter((c) => c.planet === planetId)[0];
  };

  const cardData: CardType[] = [
    { label: "rotation", content: rotation },
    { label: "revolution", content: revolution },
    { label: "radius", content: radius },
    { label: "temperature", content: temperature },
  ];

  return (
    <StyledPlanet>
      {width <= 767 && (
        <ButtonGroup
          bg={getPlanetColour().colour}
          onChange={buttonHandler}
          activeButton={activeButton}
        />
      )}
      <InnerDiv>
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
            {width > 767 && (
              <ButtonGroup
                bg={getPlanetColour().colour}
                onChange={buttonHandler}
                activeButton={activeButton}
              />
            )}
          </div>
        </TopDiv>
        <CardGroup data={cardData} />
      </InnerDiv>
    </StyledPlanet>
  );
};
