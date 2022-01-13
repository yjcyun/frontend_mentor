import { BrowserRouter } from "react-router-dom";
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
    </BrowserRouter>
  );
};

export default App;
