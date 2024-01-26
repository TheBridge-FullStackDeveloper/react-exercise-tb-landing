import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Bootcamps from "./components/Bootcamps.jsx"

import "./App.css";

function App() {
  return (
    <>
    
      <Navbar />

      <div className="body2">

      <Header />

      <br />

      <Bootcamps />

      </div>
    </>
  );
}

export default App;
