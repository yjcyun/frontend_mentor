import { BrowserRouter } from "react-router-dom";
import { Button } from "./components/button";

const App = () => {
  return (
    <BrowserRouter>
      <Button text="Button" />
      <Button text="Button" disabled />
    </BrowserRouter>
  );
};

export default App;
