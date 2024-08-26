import React, { useState } from "react";

function App() {
	return (
		<>
			<header className="bg-green-500 font-semibold text-white px-8 py-6 flex items-center justify-between gap-y-2 flex-wrap">
				<button className="bg-zinc-900 p-2 rounded">LOGO</button>
				<nav className="text-xl flex list-none gap-x-10 gap-y-3 flex-wrap hover:*:text-zinc-900 ">
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">About</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
					<li>
						<a href="">Help</a>
					</li>
				</nav>
			</header>
		</>
	);
}

export default App;
