import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineSend, AiOutlineMenu, AiOutlineInstagram } from "react-icons/ai";

function Bottom() {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noreferrer");
	};
	return (
		<div className="bg-izzy-500 h-1/6 flex flex-row border-black border-t-2 border-b-2 flex-wrap items-center justify-center p-2  ">
			<div className="bg-manilla-100 border-2 border-black w-full rounded-3xl items-center  overflow-hidden    flex h-full px-0 z-50">
				<div className="text-6xl w-full flex gap-8 py-0 px-4 ">
					<a href="https://github.com/Jgar514">
						<AiFillGithub />
					</a>
					<button role="link" onClick={() => openInNewTab("https://www.linkedin.com/in/josh-garvey-05944825a/")}>
						<AiFillLinkedin />
					</button>

					<a href="https://www.instagram.com/joshgarvey/">
						<AiOutlineInstagram />
					</a>
					<a href="">
						<AiOutlineSend />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Bottom;
