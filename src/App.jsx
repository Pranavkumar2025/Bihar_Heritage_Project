import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Publication from "./components/Publication";
import Footer1 from "./components/Footer/Footer1";
import Event from "./components/Event";
import Contact from "./components/Contact";
import Footer2 from "./components/Footer/Footer2";
import Footer1old from "./components/Footer/Footer1old";
import VideoGalleryPage from "./components/VideoGalleryPage";
import GalleryPage from "./components/GalleryPage";

const App = () => {
  return (
			<Router>
				{/* <Header /> */}
				{/* <Header1 /> */}
				<Header2 />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/publication" element={<Publication />} />
					<Route path="/events/*" element={<Event />} /> {/* Changed to handle sub-routes */}
					<Route path="/contact" element={<Contact />} />
					{/* <Route path="/excavation" element={<Event />} /> */}
					<Route path="/VideoGalleryPage" element={<VideoGalleryPage />} />
					<Route path="/GalleryPage" element={<GalleryPage />} />

					{/* Add other routes */}
				</Routes>
				<Footer1 />
				{/* <Footer1old /> */}
			</Router>
		);
};

export default App;
