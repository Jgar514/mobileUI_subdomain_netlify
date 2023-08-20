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
			<div className="flex justify-center items-center ">
				<div className="lg:w-96   lg:h-680   md:w-96 md:absolute md:h-680 sm:h-680  sm:w-96 sm:absolute sm:bottom-0   border-black border-4 rounded-lg overflow-hidden lg:my-16 md:my-10">
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
