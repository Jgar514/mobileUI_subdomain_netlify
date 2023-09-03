import React, { useState } from "react";

function Measure() {
	return (
		<div
			className="
  lg:w-96 lg:h-680   
  md:w-96 md:h-680     
  sm:w-o sm:h-0
    w-0 h-0
    gap-2 pl-2 rounded-lg overflow-hidden justify-end items-center flex flex-wrap "
		>
			{/* //left 1 */}
			<div className="w-1/4 ">
				<div className="bg">
					{/* //left 1a */}
					<div className="h-2/6 border-green">
						<div className="h-1/3  border-0 border-red1"></div>
						<div className="h-2/3  border-0 border-red-400 border-r-0">
							<div className="h-1/2 border-green1 border-2 border-r-0 border-b-0 items-center justify-center flex">1/2</div>
							<div className="h-1/2 border-green1 border-2 border-r-0  items-center justify-center flex">1/2</div>
						</div>
					</div>
					{/* //left 1b */}

					<div className="h-3/6  border-0 border-red1 w-full bg flex  ">
						<div className="bg w-full flex items-center">
							<div className="border-green1 border-0 h-5/6 w-full">
								<div className="h-1/6 bg border-2 border-r-0 border-b-0 border-red1 items-center justify-center flex">1/6</div>
								<div className="h-5/6 border-2 border-red1 border-r-0 items-center justify-center flex">5/6</div>
							</div>
						</div>
					</div>

					{/* //left 1c */}
					<div className="h-1/6 bg border-blue1 border-0 border-r-0"></div>
				</div>
			</div>
			{/* //left2 */}
			<div className="w-1/4">
				<div className="">
					{/* //left2a */}

					<div className="h-2/6 border-0 border-yellow-800">
						<div className="h-1/3 bg border-2 border-green1 border-b-0 border-r-0 items-center justify-center flex">1/3</div>
						<div className="h-2/3 bg border-2 border-green1 border-t-2 border-r-0 items-center justify-center flex">2/3</div>
					</div>
					{/* //left2b */}
					<div className="h-3/6  border-0 border-red1 w-full bg flex  ">
						<div className="bg w-full flex items-center">
							<div className="border-red1 border-2 h-5/6 w-full border-r-0 items-center justify-center flex">5/6 Centered</div>
						</div>
					</div>
					{/* //left2c */}
					<div className="h-1/6 bg- border-0 border-r-0 p-2">
						<div className="h-full border-blue1 border-2 border-r-0"></div>
					</div>
				</div>
			</div>
			{/* //left3 */}
			<div className="h-full w-1/4 bg  ">
				{/* //left3a */}
				<div className="h-2/6 bg- flex-row border-2 border-green-800 border-r-0 items-center justify-center flex">2/6</div>
				{/* //left3b */}
				<div className="h-3/6 w-full border-2 border-b-4  border-r-0 border-red1 bg- items-center justify-center flex">3/6</div>
				{/* //left3c */}

				<div className="h-1/6 bg border-2 border-t-4 border-r-0  border-blue1 items-center justify-center flex ">
					1/6 <br />
					padding-2
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

export default Measure;
