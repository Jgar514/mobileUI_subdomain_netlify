import React from "react";

function Outline() {
	return (
		<div
			className="
				lg:w-96 lg:h-680   
				md:w-0 md:h-0    
				sm:w-0 sm:h-0
        h-0 w-0
				  
				border-black border-2  rounded-lg overflow-hidden flex flex-wrap  "
		>
			<div className="w-full h-2/6 border-green1 border-4 border-double flex">
				<div className="w-1/3 flex justify-center items-center border-green1 border border-r-2 ">
					<p className="font-bold h-fit">{"<Top/>"}</p>
				</div>
				<div className="w-1/3">
					<div className="h-1/3  border border-r-0 border-green1 flex items-center justify-center w-full">
						<p className="font-bold h-fit w-fit">{"<Nav/>"}</p>
					</div>
					<div className="h-2/3  border border-green1 flex justify-center items-center">
						<p className="font-bold h-fit w-fit">{"<Profile/>"}</p>
					</div>
				</div>
				<div className="w-1/3">
					<div className="h-1/3  border border-l-0 border-green1"></div>
					<div className="h-2/3 ">
						<div className="h-1/2 border  border-green1 flex items-center justify-center">
							<p className="font-bold h-fit w-fit ">{"<ProTop/>"}</p>
						</div>
						<div className="h-1/2 border  border-green1 flex items-center justify-center">
							<p className="font-bold h-fit w-fit">{"<About/>"}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-3/6 border-red1  border-4 border-double flex">
				<div className="w-1/3 border-red1 border border-r-2   flex justify-center items-center">
					<p className="font-bold h-fit w-fit">{"<About/>"}</p>
				</div>
				<div className="w-1/3  flex justify-center items-center">
					<div className="h-5/6 border-red1 border border-l-0 border-t-2 border-b-2  w-full flex items-center justify-center">
						<p className="font-bold h-fit w-fit">{"<Tabbox/>"}</p>
					</div>
				</div>
				<div className="w-1/3  flex items-center justify-center">
					<div className="h-5/6  w-full ">
						<div
							className="h-1/6 border-red1 border border-t-2
								  flex items-center justify-center "
						>
							<p className="font-bold h-fit w-fit">{"<Tabs/>"}</p>
						</div>
						<div className="h-5/6    border  border-solid border-red1 border-b-2 flex items-center justify-center">
							<p className="font-bold h-fit w-fit">{"<Box/>"}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="h-1/6 w-full border-4 border-blue1 border-double flex flex-wrap">
				<div className="w-1/3 border border-blue1 flex justify-center items-center ">
					<p className="font-bold h-fit w-fit">{"<Bottom/>"}</p>
				</div>
				<div className="border  border-blue1 w-2/3 p-2">
					<div className=" w-full h-full border-dashed border-blue1  rounded-xl  border-2 flex justify-center items-center">
						<p className="font-bold h-fit w-fit">{"react-icons/ai"}</p>
					</div>
				</div>
			</div>

			{/* <div className="h-2/6 bg-red-300 flex flex-row">
						<div className="w-1/3 bg-green-300"></div>
						<div className="w-1/3 bg-blue-300 border-2 border-r-0">
							<div className="h-1/3  border-black"></div>
							<div className="h-2/3 bg-violet-300 border-2 border-r-2 border-black"></div>
						</div>
						<div className="w-1/3 bg-indigo-300">
							<div className="h-1/3 bg-blue-300"></div>
							<div className="h-2/3 bg-violet-300">
								<div className="h-1/2 bg-white"></div>
							</div>
						</div>
					</div>
					<div className="h-3/6 w-full bg-orange-300 flex ">
						<div className="w-1/3 border-2"></div>
						<div className="w-1/3 border-2 flex items-center ">
							<div className="h-5/6 w-full border-2 border-white "></div>
						</div>
						<div className="w-1/3 border-2 flex items-center ">
							<div className="h-5/6 w-full border-2 border-white ">
								<div className="h-1/6 w-full border-2"></div>
							</div>
						</div>
					</div>
					<div className="h-1/6 bg-yellow-300"></div> */}
		</div>
	);
}

export default Outline;
