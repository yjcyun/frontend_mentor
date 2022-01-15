import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";
import { HomePage } from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
