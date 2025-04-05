import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Header1/>
      <Header2/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
};

export default App;
