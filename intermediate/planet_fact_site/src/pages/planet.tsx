import { useParams } from "react-router-dom";
import data from "../data.json";

import { ButtonGroup } from "../components/button-group";
import { useState } from "react";
import { Information } from "../components/information";
import { Card } from "../components/card";
import { CardGroup } from "../components/card-group";
import { CardType } from "../types";

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

  const cardData: CardType[] = [
    { label: "rotation", content: rotation },
    { label: "revolution", content: revolution },
    { label: "radius", content: radius },
    { label: "temperature", content: temperature },
  ];

  return (
    <div>
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
      <CardGroup data={cardData} />
    </div>
  );
};
