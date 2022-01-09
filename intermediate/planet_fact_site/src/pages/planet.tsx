import { useParams } from "react-router-dom";
import data from "../data.json";

import { ButtonGroup } from "../components/button-group";
import { useState } from "react";

export const PlanetPage = () => {
  const { planetId } = useParams();
  const [activeIndex, setaActiveIndex] = useState(0);

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

  const buttonHandler = (index: number) => {
    setaActiveIndex(index);
  };

  return (
    <div>
      <h1>{name}</h1>
      <ButtonGroup
        bg="var(--blue)"
        onChange={buttonHandler}
        activeIndex={activeIndex}
      />
    </div>
  );
};
