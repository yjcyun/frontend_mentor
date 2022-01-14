import { BrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>Hello</Layout>
    </BrowserRouter>
  );
};

export default App;
