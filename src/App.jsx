// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import ImgDetails from "./components/ImgDetails/ImgDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery-image/:id" element={<ImgDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
