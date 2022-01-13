import { BrowserRouter } from "react-router-dom";
import { AccordionMenu } from "./components/accordion-menu";
import { BigSelection } from "./components/big-selection";
import { Button } from "./components/button";

const App = () => {
  return (
    <BrowserRouter>
      <Button text="Button" />
      <Button text="Button" disabled />
      <BigSelection
        title="Option"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      />
      <BigSelection
        title="Option"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        active
      />
      <AccordionMenu title="Sample Menu" />
      <AccordionMenu title="Sample Menu" disabled />
    </BrowserRouter>
  );
};

export default App;
