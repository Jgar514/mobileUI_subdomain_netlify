import React from "react";
import propic from "../assets/propic.jpeg";

function Profile() {
	return (
		<div className="bg-red-300 h-2/3 flex flex-col">
			{/* propic */}
			<div className="flex h-1/2">
				<div className="w-full">
					<div className="bg-white gap-2 w-full flex p-2 justify-start">
						<img src={propic} className=" rounded-full bg-white h-full w-auto mx-2 border-2  border-black " />
						<div className="flex flex-col">
							<h1 className="flex  text-2xl text-start  font-bold pt-1">Joshua Garvey</h1>
							<p className="text-lg">"Status"</p>
						</div>
						<div className="p-3 mt-3">
							<a className="bg-button text-type border-ol border-2 px-2 py-2 rounded" href="#">
								Resume
							</a>
						</div>
					</div>

					{/* nametag */}
					{/* <div className="bg-indigo-400 w-2/3 flex pt-2">
									<div className="bg-red-300 pt-4 h-1/2 flex flex-col ">
										<h1 className="flex  text-2xl text-start h-1/2 font-bold pt-1">Joshua Garvey</h1>
										<p className="text-lg">"Status"</p>
									</div>
									<div className="bg-yellow-100 h-1/4"></div>

									End Name and Staus
								</div> */}
				</div>
			</div>
			<div className="h-1/2 bg-blue-50 border-black border-b-2 px-2">
				<p className="text-m p-2 px-2 py-2 leading-normal font-burtons">I enjoy making web applications, challenging myself, and learning from others. </p>
			</div>
		</div>
	);
}

export default Profile;
