import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import Contact from "./Contact";

export default function Modal2() {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<button className=" " type="button" onClick={() => setShowModal(true)}>
				<AiOutlineSend />
			</button>
			{showModal ? (
				<>
					<div
						className="				lg:w-96 lg:h-680 mx-auto my-auto  
 z-50 h-full  overflow-hidden pt-0 bg-red-800 justify-center items-center flex overflow-x-hidden fixed inset-0  outline-none focus:outline-none"
					>
						<div className="relative w-full mx-auto max-w-3xl bg-white">
							{/*content*/}
							<div className=" rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none border-2  ">
								{/*header*/}
								<div className="bg-green1  flex items-start w-full justify-between px-6 border-b border-solid border-slate-200 rounded-t h-fit mt-0 py-0 pt-2">
									<h3 className="border-t-2 border-l-2 border-r-2 border-black px-2 text-3xl font-semibold bg-white pt-2 pb-2">Contact</h3>
									<button className="rounded-full bg-white px-2  text-black h-fit w-fit text-3xl leading-none font-semibold outline-none border-red-400 border-2 focus:outline-none" onClick={() => setShowModal(false)}>
										<span className=" text-black   text-4xl  outline-none focus:outline-none">X</span>
									</button>
								</div>
								{/*body*/}
								<div className="bg-black  h-5/6   pb-2 object-contain">
									<Contact />
								</div>
								{/*footer*/}
								<div className="absolute h-fit w-full bottom-0 flex items-center bg-white justify-center p-2  border-2 border-black border-solid  ">
									<button className="text-red-500 h-fit background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-black border-2" type="button" onClick={() => setShowModal(false)}>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
}
