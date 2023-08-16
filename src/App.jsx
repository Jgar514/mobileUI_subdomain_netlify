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
			<div className="h-full bg-izzy-400">
				<Top />

				<Middle />

				<Bottom />
			</div>
		</>
	);
}

export default App;
