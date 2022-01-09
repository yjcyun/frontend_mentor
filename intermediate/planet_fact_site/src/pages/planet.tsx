import { useParams } from "react-router-dom";
import data from "../data.json";

import { ButtonGroup } from "../components/button-group";
import { useState } from "react";
import { Information } from "../components/information";

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
    </div>
  );
};
