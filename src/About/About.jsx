import React, { useState } from "react";

function About() {
	let [num, setNum] = useState(0);
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 border-2 border-gray-800 rounded-lg p-6">
			<h1 className="text-6xl font-bold mb-6">{num}</h1>
			<button
				onClick={() => setNum(num + 1)}
				className="bg-zinc-900 text-white p-4 rounded-lg text-2xl hover:bg-zinc-800"
			>
				Click to Increment
			</button>
		</div>
	);
}

export default About;
