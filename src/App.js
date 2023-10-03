import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import SuperHero from "./components/SuperHero";
import RqSuperHero from "./components/RqSuperHero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/superhero" element={<SuperHero />} />
          <Route path="/rqsuperhero" element={<RqSuperHero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
