import React, { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";

export const lists = ["low", "Medium", "Hard", "Insane"] as string[];

function App() {
	const [dificulty, setDificulty] = useState<string>("");

	const handleMenuItemClick = (list: string) => {
		setDificulty(list);
	};
	return (
		<>
			<h1 style={{ textAlign: "center" }}>Choose your React course difficulty</h1>
			<div className="App">
				<MenuList
					dificulty={dificulty}
					handleMenuItemClick={handleMenuItemClick}
				/>
				<DisplayDifficulty dificulty={dificulty} />
			</div>
		</>
	);
}

export default App;
