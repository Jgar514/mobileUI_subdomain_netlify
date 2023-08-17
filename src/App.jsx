import { useState } from "react";
import Tabbox from "./components/Tabbox";

// import reactLogo from "./assets/react.svg";

import Navbar from "./components/Navbar";

import Bottom from "./components/Bottom";

import Top from "./components/Top";
import Middle from "./components/Middle";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineSend, AiOutlineMenu, AiOutlineInstagram } from "react-icons/ai";

function App() {
	return (
		<>
			{/*  */}
			<div className="flex justify-center lg:h-screen">
				<div className="lg:w-96 lg:absolute lg:bottom-0  border-black border-2 rounded-2xl overflow-hidden">
					<div className="h-full bg-izzy-400">
						<Top />

						<Middle />

						<Bottom />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
