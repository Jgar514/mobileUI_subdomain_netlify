import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";

function Top() {
	return (
		<div className=" h-2/6  ">
			{/* Nav */}
			<div className="h-1/3   text-4xl ">
				<Navbar />
			</div>

			{/* intro */}
			<Profile />
		</div>
	);
}

export default Top;
