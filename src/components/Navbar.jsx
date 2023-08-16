import { useState } from "react";

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="flex items-center justify-end  border-b-2 border-black bg-manilla-500 py-6 px-6">
			{/* <a href="/">
				<img src="https://designbygio.it/images/logo.png" alt="logo" />
			</a> */}
			<nav>
				<section className="MOBILE-MENU flex lg:hidden">
					<div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
					</div>

					<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
						<div className="absolute top-0 right-0 px-8 py-2" onClick={() => setIsNavOpen(false)}>
							<svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>
						<ul className="flex flex-col  ">
							<li className="border-b border-gray-400 my-4 uppercase">
								<a href="/about">Test1</a>
							</li>
							<li className="border-b border-gray-400 my-4 uppercase">
								<a href="/portfolio">Test2</a>
							</li>
							<li className="border-b border-gray-400 my-4 uppercase">
								<a href="/contact">Test3</a>
							</li>
						</ul>
					</div>
				</section>

				<ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/portfolio">Portfolio</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
			<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: white;
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
