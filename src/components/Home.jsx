import React, { useRef, useEffect } from "react";
import Hero from "./Hero";
import SS_Site from "./SS_Site";
import Excavations from "./Excavations";
import ExploreJoin from "./ExploreJoin";
import Conservation from "./Conservation";
import Awareness from "./Awareness";
import Gallery from "./Gallery";
import CallToAction from "./CallToAction";
import News from "./News";
import UniqueBihar from "./UniqueBihar";
import { useLocation } from "react-router-dom";
import GoverningComponents from "./GoverningComponents";


const Home = () => {
  const excavationRef = useRef(null);
  const exploreJoinRef = useRef(null);
  const conservationRef = useRef(null);
  const location = useLocation();

  // Scroll to specific section when URL has a matching hash
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const sectionRefs = {
      excavation: excavationRef,
      explorejoin: exploreJoinRef,
	  conservation: conservationRef,
    };

    const targetRef = sectionRefs[hash];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <section ref={excavationRef} id="excavation">
        <Excavations />
      </section>
      <UniqueBihar />
	  {/* <section ref={conservationRef} id="conservation">
        <Conservation />
      </section> */}
      <Gallery />
      {/* <SS_Site /> */}
      <section ref={exploreJoinRef} id="explorejoin">
        <ExploreJoin />
      </section>
      <News />
      <Awareness />
      <GoverningComponents/>
    
      {/* <CallToAction /> */}
    </main>
  );
};

export default Home;
