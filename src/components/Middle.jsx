import React from "react";
import Tabbox from "./Tabbox";

function Middle() {
	return (
		<div className="h-3/6 flex flex-row items-center bg-white">
			{/* Project Window */}
			<div className="   h-5/6  w-full ">
				<Tabbox />
			</div>
		</div>
	);
}

export default Middle;
