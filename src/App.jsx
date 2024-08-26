import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Help from "./Help/Help";

function App() {
	return (
		<>
			<header className="bg-green-500 font-semibold text-white px-8 py-6 flex items-center justify-between gap-y-2 flex-wrap">
				<button className="bg-zinc-900 p-2 rounded">LOGO</button>
				<nav className="text-xl flex list-none gap-x-10 gap-y-3 flex-wrap">
					<li>
						<Link
							to="/"
							className="hover:text-zinc-900 transition ease-in duration-700"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/About"
							className="hover:text-zinc-900 transition ease-in duration-700"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/Contact"
							className="hover:text-zinc-900 transition ease-in duration-700"
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							to="/Help"
							className="hover:text-zinc-900 transition ease-in duration-700"
						>
							Help
						</Link>
					</li>
				</nav>
			</header>

			{/* Define your routes here */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/Help" element={<Help />} />
			</Routes>
		</>
	);
}

// Placeholder Home component
function Home() {
	return <h1>Home Page</h1>;
}

export default App;
