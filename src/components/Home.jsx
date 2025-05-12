import React from "react";
import Hero from "./Hero";
import SS_Site from "./SS_Site";
import Excavations from "./Excavations";
import ExploreJoin from "./ExploreJoin";
import Conservation from "./Conservation";
import Awareness from "./Awareness";
import Gallery from "./Gallery";
import CallToAction from "./CallToAction";


const Home = () => {
	return (
		<div>
			<Hero />
			<Excavations />
			{/* <ExploreJoin/> */}
			<Conservation/>
			<Gallery/>
			<SS_Site />
			<Awareness/>
			<CallToAction/>
		</div>
	);
};

export default Home;
