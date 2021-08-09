import React from "react";
import Header from "./header-icons/header";
import Button from "./buttons/buttons";
import Heading from "./Heading/Heading"
import Price from "./price/price";
import Chart from "./chart/chart";
import LastSection from "./last-section/last-section";
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <Button />
      <Header />
      <h2>Best Price to Trade</h2>
      <Price />
      <Chart />
      <LastSection />
    </div>
  );
}

export default App;
