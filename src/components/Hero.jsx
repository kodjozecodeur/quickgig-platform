import React from "react";

const Hero = () => {
	return (
		<div className="container 2xl:px-20 mx-auto my-10">
			<div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
				<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
					Find or Post Quick Gigs for Junior Devs & Designers
				</h2>
				<p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
					Perfect for fast missions, one-off tasks, and early career experience.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<div className="flex gap-4 max-sm:text-xs">
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button className="text-gray-700 bg-white outline-gray-900 rounded-full px-6 sm:px-9 py-2">
							Browse Gigs
						</button>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">
							Post a Gig
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
