import React, { useState, useEffect } from "react";
import Tabbox from "./components/Tabbox";

import ResumeNew from "./components/Pdf";

// import "bootstrap/dist/css/bootstrap.min.css";
// import reactLogo from "./assets/react.svg";

import Navbar from "./components/Navbar";

import Bottom from "./components/Bottom";

import Top from "./components/Top";
import Middle from "./components/Middle";
import Measure from "./components/Measure";
import Outline from "./components/Outline";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineSend, AiOutlineMenu, AiOutlineInstagram } from "react-icons/ai";
import Modal from "./components/Modal";

function App() {
	const [showMeasure, setShowMeasure] = useState(false);
	const toggleMeasure = () => {
		setShowMeasure(!showMeasure);
	};

	return (
		<>
			{/*  */}

			<button type="button" className="measure-button invisible md:visible rounded bg-red-600 border-2 border-black p-2 h-fit absolute w-fit top-8   left-20" onClick={toggleMeasure}>
				<p className="invisible text-white md:visible">Show Measurements</p>
			</button>

			{showMeasure ? (
				<div className="bg-white flex flex-row justify-center items-center md:gap-4  overflow-hidden md:p-8 w-full h-full">
					{/* //first window */}

					<Measure />
					<div
						className="
			lg:w-96 lg:h-680
			md:w-96 md:h-680
			sm:w-96 sm:h-680
				w-96 h-680
			border-black border-2 rounded-lg overflow-hidden flex-shrink-0  "
					>
						<Top />

						<Middle />

						<Bottom />
					</div>
					<Outline />
				</div>
			) : (
				<div className="bg-white md:flex md:flex-row md:justify-center md:items-center  md:overflow-hidden md:p-8 md:w-full md:h-full">
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

				border-black border-2 rounded-xl overflow-hidden  "
						>
							<div className="h-full bg-izzy-400">
								<Top />

								<Middle />

								<Bottom />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

// function App() {
// 	const [showMeasure, setShowMeasure] = useState(false);
// 	const toggleMeasure = () => {
// 		setShowMeasure(!showMeasure);
// 	};
// 	return (
// 		<div className="flex flex-row flex-wrap items-center justify-center w-full h-full">
// 			<button type="button" className="measure-button rounded bg-gray-dark h-fit absolute  left-8" onClick={toggleMeasure}>
// 				Show Measurements
// 			</button>
// 			{showMeasure ? (
// 				<div className="bg-white flex flex-row justify items-center md:gap-4  overflow-hidden md:p-8 w-full h-full">
// 					{/* //first window */}

// 					<Measure />
// 					<div
// 						className="
// 				lg:w-96 lg:h-680
// 				md:w-96 md:h-680
// 				sm:w-96 sm:h-680
// 				  w-96 h-680
// 				border-black border-2 rounded-lg overflow-hidden flex-shrink-0  "
// 					>
// 						<Top />

// 						<Middle />

// 						<Bottom />
// 					</div>
// 					<Outline />
// 				</div>
// 			) : (
// 				<div className="bg-white flex flex-row justify-center items-center gap-4 h-100vh overflow-hidden">
// 					<div
// 						className="
// 				lg:w-96 lg:h-680
// 				md:w-96 md:h-680
// 				sm:w-96 sm:h-680

// 				border-black border-2 rounded-lg overflow-hidden flex-shrink-0  "
// 					>
// 						<Top />

// 						<Middle />

// 						<Bottom />
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

export default App;
