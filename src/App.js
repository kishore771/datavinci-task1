// App.js
import React from "react";
import Header from "./components/Header/Header"; 
import ManukaHoneyProduct from "./components/ManukaHoneyProduct/ManukaHoneyProduct"; 
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Your existing header */}
      <Header />
      <ManukaHoneyProduct />
    </div>
  );
}

export default App;
