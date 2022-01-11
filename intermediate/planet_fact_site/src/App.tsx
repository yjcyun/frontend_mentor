import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { PlanetPage } from "./pages/planet";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/earth" />} />
        <Route path="/:planetId" element={<PlanetPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
