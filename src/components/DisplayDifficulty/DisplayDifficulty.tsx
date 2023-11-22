import React, { FC } from "react";
interface DisplayDifficultyProps {
	dificulty: string;
}
const DisplayDifficulty: FC<DisplayDifficultyProps> = ({ dificulty }) => {
	const dificultyContent = dificulty ? `Difficulty set to ${dificulty}` : "No dificulty Set";

	return <div className="difficulty">{dificultyContent}</div>;
};

export default DisplayDifficulty;
