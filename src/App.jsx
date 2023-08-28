import React, { useState, useEffect } from "react";
import Tabbox from "./components/Tabbox";
import Preloader from "./components/Pre";
import ResumeNew from "./components/Pdf";

// import "bootstrap/dist/css/bootstrap.min.css";
// import reactLogo from "./assets/react.svg";

import Navbar from "./components/Navbar";

import Bottom from "./components/Bottom";

import Top from "./components/Top";
import Middle from "./components/Middle";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineSend, AiOutlineMenu, AiOutlineInstagram } from "react-icons/ai";
import Modal from "./components/Modal";

function App() {
	return (
		<>
			{/*  */}

			<div
				className="flex justify-center items-center
			sm:p-8 
			md:p-8
			lg:p-8
			"
			>
				<div
					className="
				lg:w-96 lg:h-680 lg:absolute   
				md:w-96 md:h-680 md:absolute     
				sm:w-96 sm:h-680 sm:absolute 
				  
				border-black border-4 rounded-lg overflow-hidden  "
				>
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
