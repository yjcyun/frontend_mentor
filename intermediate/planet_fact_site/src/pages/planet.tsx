import { useParams } from "react-router-dom";
import data from "../data.json";

import { ButtonGroup } from "../components/button-group";
import { useState } from "react";

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
    console.log(text);
    setActiveButton(text);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{}</p>
      <ButtonGroup
        bg="var(--blue)"
        onChange={buttonHandler}
        activeButton={activeButton}
      />
    </div>
  );
};
