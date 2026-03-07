import React from "react";
import Navbar from "./components/layout/Navbar";
import hero from "./components/sections/hero";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <hero />
      </main>
    </div>
  );
};

export default App;
