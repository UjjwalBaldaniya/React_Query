import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import SuperHero from "./components/SuperHero";
import RqSuperHero from "./components/RqSuperHero";
import Navbar from "./components/Navbar";
import RqIndividualData from "./components/RqIndividualData";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallelQueries from "./components/DynamicParallelQueries";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-hero" element={<SuperHero />} />
          <Route path="/rq-super-hero" element={<RqSuperHero />} />
          <Route path="/rq-super-hero/:id" element={<RqIndividualData />} />
          <Route path="/parallel-queries" element={<ParallelQueries />} />
          <Route path="/dynamic-parallel-queries" element={<DynamicParallelQueries heroId={[1,3]}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
