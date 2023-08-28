import React from "react";
import ResumeNew from "./Pdf";

export default function Modal() {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<button className="bg-button text-type border-ol border-2 px-2 py-2 border-black rounded" type="button" onClick={() => setShowModal(true)}>
				Resume
			</button>
			{showModal ? (
				<>
					<div className=" z-50 h-full bg-transparent justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none py-2">
						<div className="bg-transparent relative w-full my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-2  rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
								{/*header*/}
								<div className="bg-gray-800 opacity-80 flex items-start w-full justify-between px-6 pt-2 border-b-2 border-black border-solid  rounded-t h-fit pb-0 ">
									<h3 className="bg-gray-100 px-3 text-3xl font-semibold h-full pt-1 border-red-500 border-2 border-b-0">Resume</h3>
									<button className=" bg-white pb-1 pt-1 h-fit  border-2 px-3 border-red-400 text-black rounded-full  opacity-100 text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
										<span className=" text-black  h-fit w-6 text-3xl  outline-none focus:outline-none">X</span>
									</button>
								</div>
								{/*body*/}
								<div className="bg-gray-400 h-5/6 mt-0 justify-center items-center pt-4 ">
									<ResumeNew />
								</div>
								{/*footer*/}
								<div className="absolute h-fit w-full bottom-0 flex items-center bg-white justify-center p-2 border-t border-b-2 border-black border-solid  rounded-b">
									<button className="text-red-500 h-fit background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-black border-2" type="button" onClick={() => setShowModal(false)}>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
