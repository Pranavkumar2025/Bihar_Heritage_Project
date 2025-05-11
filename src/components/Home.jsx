import React from "react";
import Hero from "./Hero";
import SS_Site from "./SS_Site";
import Excavations from "./Excavations";
import ExploreJoin from "./ExploreJoin";
import Conservation from "./Conservation";


const Home = () => {
	return (
		<div>
			<Hero />
			<Excavations />
			{/* <ExploreJoin/> */}
			<Conservation/>
			<SS_Site />
		</div>
	);
};

export default Home;
