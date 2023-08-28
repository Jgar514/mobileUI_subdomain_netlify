import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Projects from "./Projects";
import Copiable from "./Copiable";
import Info from "./Info";
import Quote from "./Quotes";

function Tabbox() {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	const handleTabChange = (e, tabIndex) => {
		console.log(tabIndex);
		setCurrentTabIndex(tabIndex);
	};
	return (
		<React.Fragment>
			<div className=" border-t-2 border-b-2 border-gray-400 h-full overflow-hidden  text-ol drop-shadow bg-white">
				<Tabs className="text-red-600 h-1/6 border-b-2 border-black" value={currentTabIndex} onChange={handleTabChange}>
					<Tab label="< Projects />" />
					<Tab label="< Timeline />" />
					<Tab label="< Info />" />
					<Tab label="< Info />" />
				</Tabs>
				<div className="bg-izzy-600  ">
					{/* TAB 1 Contents */}
					{currentTabIndex === 0 && (
						<Box className="h-full bg-white " sx={{ p: 0 }}>
							<Projects />
						</Box>
					)}

					{/* TAB 2 Contents */}
					{currentTabIndex === 1 && (
						<Box sx={{ p: 3 }}>
							<Typography variant="h5">
								<Quote />
							</Typography>
						</Box>
					)}

					{/* TAB 3 Contents */}
					{currentTabIndex === 2 && (
						<Box sx={{ p: 1 }}>
							<Typography variant="h5">
								<Info />
							</Typography>
						</Box>
					)}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Tabbox;
