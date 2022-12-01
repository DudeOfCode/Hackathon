import React from "react";
import "animate.css";
import "./App.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Upload from "./components/Upload";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="total">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Sign in" />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Sign up" element={<Signup />} />
        </Routes>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
