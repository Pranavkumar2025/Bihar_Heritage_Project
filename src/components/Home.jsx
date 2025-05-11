import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import SS_Site from "./SS_Site";
import Excavations from "./Excavations";
import ExploreJoin from "./ExploreJoin";
import Conservation from "./Conservation";


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <Excavations />
      <ExploreJoin/>
      <Conservation/>
      <SS_Site />
    </div>
  );
};

export default Home;
