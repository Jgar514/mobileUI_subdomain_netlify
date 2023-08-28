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
					<div className=" z-50 h-full overflow-hidden pt-2 bg-white justify-center items-center flex overflow-x-hidden fixed inset-0  outline-none focus:outline-none">
						<div className="bg-white relative w-full my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
								{/*header*/}
								<div className="bg-gray-100 flex items-start w-full justify-between px-6 border-b border-solid border-slate-200 rounded-t h-fit mt-0 py-0 pt-2">
									<h3 className="border-t-2 border-l-2 border-r-2 border-black px-2 text-3xl font-semibold bg-white pt-2">Contact</h3>
									<button className="rounded-full bg-white px-2  text-black h-fit w-fit text-3xl leading-none font-semibold outline-none border-red-400 border-2 focus:outline-none" onClick={() => setShowModal(false)}>
										<span className=" text-black   text-4xl  outline-none focus:outline-none">X</span>
									</button>
								</div>
								{/*body*/}
								<div className="bg-white h-5/6 mt-2 px-6 pb-2 object-contain">
									<Contact />
								</div>
								{/*footer*/}
								<div className="absolute h-fit w-full bottom-0 flex items-center bg-transparent justify-center p-2 border-slate-200 rounded-b">
									<button className="text-red-500 h-fit bg-white font-bold uppercase px-6 py-3 text-sm border-black border-2 focus:outline-none mr-1 mb-4 shadow-xl shadow-primary ease-linear transition-all duration-150 flex" type="button" onClick={() => setShowModal(false)}>
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
