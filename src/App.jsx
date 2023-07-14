import React from "react";
import Master from "./layouts/Master";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-br from-teal-900 to-cyan-950 min-h-screen">
        <Master>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<DetailPage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/characters" element={<Characters />} />{" "}
            <Route path="/characters/:id" element={<DetailPage />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episodes/:id" element={<DetailPage />} />
          </Routes>
        </Master>
      </div>
    </BrowserRouter>
  );
};

export default App;
