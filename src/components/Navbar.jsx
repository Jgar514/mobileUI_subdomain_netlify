import { useState } from "react";

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="flex items-center justify-end  border-b-2 border-black bg-green1 lg:bg-green1 py-6 px-6 w-full">
			{/* <a href="/">
				<img src="https://designbygio.it/images/logo.png" alt="logo" />
			</a> */}
			<nav>
				<section className="MOBILE-MENU flex ">
					<div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
						<span className="block h-0.5 w-8 animate-pulse bg-black"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-black"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-black"></span>
					</div>

					<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
						<div
							className=" p-2	bg-white border-black border-2 rounded-xl 			 md:w-96 lg:w-96 lg:h-680 mx-auto my-auto  
 z-50 h-full  overflow-hidden   justify-center items-center flex overflow-x-hidden fixed inset-0  outline-none focus:outline-none py-8"
						>
							<div className="absolute top-2 right-0 px-8 py-2" onClick={() => setIsNavOpen(false)}>
								<svg className="h-8 w-8 text-gray-600 border-2 border-red1 rounded-2xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</div>
							<ul className="flex flex-col  ">
								<li className="border-b-2 border-manilla-100 my-4 mx-auto uppercase">
									<a href="https://joshuagarvey.com/" target="_blank" rel="noopener noreferrer">
										3D Website
									</a>
									<div className="flex gap-6 flex-row justify-center my-4">
										<a className="text-sm px-4 py-2 h-10 border-2 border-black" href="https://github.com/Jgar514/JoshandEllie/blob/main/README.md" target="_blank" rel="noopener noreferrer">
											About
										</a>
										<a className="text-sm px-4 py-2 h-10 border-2 border-black bg-green-400" href="https://joshuagarvey.com/" target="_blank" rel="noopener noreferrer">
											Live Demo
										</a>
									</div>
								</li>
								<li className="border-b-2 border-manilla-100 mx-auto my-4 uppercase">
									<a href="https://popup.joshuagarvey.com/" target="_blank" rel="noopener noreferrer">
										Poker Pop-up
									</a>
									<div className="flex flex-row justify-center my-4 gap-6">
										<a className="text-sm px-4 py-2 h-10 border-2 border-black" href="https://github.com/Jgar514/subdomain_popup/blob/main/README.md" target="_blank" rel="noopener noreferrer">
											About
										</a>
										<a className="text-sm px-4 py-2 h-10 border-2 border-black bg-green-400   " href="https://popup.joshuagarvey.com/" target="_blank" rel="noopener noreferrer">
											Live Demo
										</a>
									</div>
								</li>
								<li className="border-b-2 border-manilla-100 my-4 uppercase mx-auto">
									<a href="https://github.com/Jgar514/removeSnow/blob/main/README.md">Snow Remove</a>
									<div className="flex flex-row justify-center my-4 gap-6">
										<a className="text-sm px-3 py-2 h-10 border-2 border-black" href="https://github.com/Jgar514/removeSnow/blob/main/README.md" target="_blank" rel="noopener noreferrer">
											about
										</a>
										<a className="text-sm px-3 py-2 h-10 border-2 border-black bg-green-400" href="https://youtu.be/mOTKgQKJZSM?si=pmf8c8Z6IJRjq6Nz&t=170" target="_blank" rel="noopener noreferrer">
											Video Demo
										</a>
									</div>
								</li>
								<li className="border-b border-gray-400 my-4 uppercase">
									<a href="https://github.com/Jgar514/ContactHub/blob/main/README.md">Contact Hub</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</nav>
			<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: transparent;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
				padding-bottom: 20%;
				padding-top: 10%;
				opacity: 95%;
      }
    `}</style>
		</div>
	);
}
