import React, { useState } from "react";

function App() {
	const [name, setName] = useState("Anirudha");
	return (
		<>
			<div>{name}</div>
			<button onClick={() => setName("Anirudha Bele")}>Update</button>
		</>
	);
}

export default App;
