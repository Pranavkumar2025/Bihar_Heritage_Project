import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer1 = () => {
	return (
		<div id="footer-section">
			<div className="bg-gray-100 py-8 px-10 ">
				<div className="flex justify-between max-w-6xl mx-auto w-full space-x-12">
					{/* Legal Information */}
					<div className="w-2/3 transiton  ">
						<ul className="text-gray-800 ">
							<li className="font-bold  text-2xl mb-2">About</li>
							<li className=" py-2 mt-4 font-bold  transition-colors duration-300">
								The Bihar Heritage Development Society (BHDS) is an initiative under the Department of Art, Culture & Youth, Government of Bihar. Established to preserve, promote, and revitalize the rich cultural heritage of Bihar, BHDS works as a nodal body to plan, implement, and coordinate heritage-related projects across the state.
							</li>
						</ul>
					</div>

					{/* More Pages */}
					<div className="w-1/3">
						<ul className="text-gray-700">
							<li className="font-bold mb-2">Important Links</li>
							<li className="border-b border-gray-400 py-2 font-semibold hover:text-red-500 transition-colors duration-300">
								Publication
							</li>
							<li className="border-b border-gray-400 py-2 font-semibold hover:text-red-500 transition-colors duration-300">
								Photo Gallery
							</li>
						
							<li className="border-b border-gray-400 py-2 font-semibold hover:text-red-500 transition-colors duration-300">
								News
							</li>
							<li className="border-b border-gray-400 py-2 font-semibold hover:text-red-500 transition-colors duration-300">
								{" "}
								Tender
							</li>
							<li className="border-b border-gray-400 py-2 font-semibold hover:text-red-500 transition-colors duration-300">
								{" "}
								Contact Us
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="w-1/3 ">
						<ul className="text-gray-700">
							<li className=" font-bold mb-2">Contact</li>
							<li className="border-b border-gray-400 py-2 font-semibold hover:text-red-500 transition-colors duration-300">
								North of Patna Museum, Off Buddha Marg, Patna – 800001
							</li>
							<li className="border-b border-gray-400 py-2 font-semibold hover:text-red-500 transition-colors duration-300">
								0612-2508445
							</li>
							<li className="border-b border-gray-400 py-2 font-semibold hover:text-red-500 transition-colors duration-300">
								heritageofbihar@gmail.com
							</li>
							<li className="border-b border-gray-400 py-2 font-semibold hover:text-red-500 transition-colors duration-300">
								Get Location
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bg-gray-100 py-8 px-10">
				<div className="flex justify-between max-w-6xl mx-auto w-full space-x-12">
					{/* Newsletter Section */}
				
					{/* Follow Us Section */}
					<div className="w-2/3">
						<h2 className="text-lg font-semibold mb-4">Follow us</h2>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-500 hover:text-blue-600 text-2xl transition"
							>
								<FaFacebook />
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-pink-500 text-2xl transition"
							>
								<FaInstagram />
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-blue-400 text-2xl transition"
							>
								<FaTwitter />
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-red-500 text-2xl transition"
							>
								<FaYoutube />
							</a>
						</div>
					</div>
				</div>
				<div className=" border-t-2 border-gray-500 mt-6"></div>
			</div>
			</div>
	);
};

export default Footer1;
