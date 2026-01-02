import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import SS_Site from "./SS_Site";
import Excavation2 from "./Excavation2";
import ExploreJoin from "./ExploreJoin";
import Conservation from "./Conservation";
import Awareness from "./Awareness";
import Gallery from "./Gallery";
import CallToAction from "./CallToAction";
import News from "./News";
import UniqueBihar from "./UniqueBihar";
import { useLocation } from "react-router-dom";
import GoverningComponents from "./GoverningComponents";
import VideoGalleryPage from "./VideoGalleryPage";

import { ReactLenis, useLenis } from "lenis/react";

// Choose one high-quality background image (Nalanda Mahavihara - same as before or better alternatives)
const backgroundImage = "https://whc.unesco.org/uploads/thumbs/site_1502_0010-1200-630-20160616154106.jpg"; 
// Alternatives for variety:
// "https://assets.cntraveller.in/photos/60ba0656b1ba4c108d187534/16:9/w_1600,h_900,c_limit/Nalanda2.jpg"
// "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/06/18131552/nalanda-2-1600x900.jpg"
// "https://cdn.prod.website-files.com/6364d88dd010ce5c6f8aa8fc/6711e7f810308c8ebf316363_Vikramashila_University%20(2).webp" // Vikramshila ruins

const Home = () => {
  const excavationRef = useRef(null);
  const exploreJoinRef = useRef(null);
  const conservationRef = useRef(null);
  const location = useLocation();

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const hash = location.hash.replace("#", "");
    const sectionRefs = {
      excavation: excavationRef,
      explorejoin: exploreJoinRef,
      conservation: conservationRef,
    };

    const targetRef = sectionRefs[hash];

    if (targetRef?.current) {
      lenis.scrollTo(targetRef.current, {
        offset: -80, // Adjust if you have a fixed navbar (e.g., -80px)
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  }, [location, lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      {/* Full-page background container */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Neutral dark overlay - changed to avoid bluish tint */}
        <div className="absolute inset-0 bg-black/60" />

        {/* All your content - sits on top of background */}
        <main className="relative z-10 overflow-x-hidden">
          <Hero />
          <section ref={excavationRef} id="excavation">
            <Excavation2 />
          </section>
          <UniqueBihar />
          <Gallery />
          <section ref={exploreJoinRef} id="explorejoin">
            <ExploreJoin />
          </section>
          <Awareness />
          <GoverningComponents />
        </main>
      </div>
    </ReactLenis>
  );
};

export default Home;