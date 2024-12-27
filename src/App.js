import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OfferSection from "./components/OfferSection";
import HeroSection from "./components/HeroSection";
import OptionSelector from "./components/OptionSelector";
import AppleCare from "./components/AppleCare";
import Buy from "./components/Buy";
import Box from "./components/Box";

function App() {
  return (
    <Router>
      <Header />
      <OfferSection />
      <HeroSection />
      <OptionSelector />
      <AppleCare />
      <Buy />
      <Box />
      <Footer />
    </Router>
  );
}

export default App;
