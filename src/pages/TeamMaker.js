import React, { useState } from "react";
import { sTier, aTier, bTier, cTier, dTier, fTier } from "./TierList";
import { TeamMakerPlayer } from "../components/TeamMakerPlayer";

export const TeamMaker = () => {
	const [sTierState, setSTierState] = useState([]);
	const [aTierState, setATierState] = useState([]);
	const [bTierState, setBTierState] = useState([]);
	const [cTierState, setCTierState] = useState([]);
	const [dTierState, setDTierState] = useState([]);
	const [fTierState, setFTierState] = useState([]);

	const handleSTierStateChange = (player) => {
		const playerIndex = sTierState.findIndex(
			(selectedPlayer) => selectedPlayer.id === player.id
		);

		if (playerIndex !== -1) {
			const updatedSTierState = [...sTierState];
			updatedSTierState.splice(playerIndex, 1);
			setSTierState(updatedSTierState);
		} else {
			setSTierState((prevPlayer) => [...prevPlayer, player]);
		}
	};

	const handleATierStateChange = (player) => {
		const playerIndex = aTierState.findIndex(
			(selectedPlayer) => selectedPlayer.id === player.id
		);

		if (playerIndex !== -1) {
			const updatedATierState = [...aTierState];
			updatedATierState.splice(playerIndex, 1);
			setATierState(updatedATierState);
		} else {
			setATierState((prevPlayer) => [...prevPlayer, player]);
		}
	};

	const handleBTierStateChange = (player) => {
		const playerIndex = bTierState.findIndex(
			(selectedPlayer) => selectedPlayer.id === player.id
		);

		if (playerIndex !== -1) {
			const updatedBTierState = [...bTierState];
			updatedBTierState.splice(playerIndex, 1);
			setBTierState(updatedBTierState);
		} else {
			setBTierState((prevPlayer) => [...prevPlayer, player]);
		}
	};

	const handleCTierStateChange = (player) => {
		const playerIndex = cTierState.findIndex(
			(selectedPlayer) => selectedPlayer.id === player.id
		);

		if (playerIndex !== -1) {
			const updatedCTierState = [...cTierState];
			updatedCTierState.splice(playerIndex, 1);
			setCTierState(updatedCTierState);
		} else {
			setCTierState((prevPlayer) => [...prevPlayer, player]);
		}
	};

	const handleDTierStateChange = (player) => {
		const playerIndex = dTierState.findIndex(
			(selectedPlayer) => selectedPlayer.id === player.id
		);

		if (playerIndex !== -1) {
			const updatedDTierState = [...dTierState];
			updatedDTierState.splice(playerIndex, 1);
			setDTierState(updatedDTierState);
		} else {
			setDTierState((prevPlayer) => [...prevPlayer, player]);
		}
	};

	const handleFTierStateChange = (player) => {
		const playerIndex = fTierState.findIndex(
			(selectedPlayer) => selectedPlayer.id === player.id
		);

		if (playerIndex !== -1) {
			const updatedFTierState = [...fTierState];
			updatedFTierState.splice(playerIndex, 1);
			setFTierState(updatedFTierState);
		} else {
			setFTierState((prevPlayer) => [...prevPlayer, player]);
		}
	};

	const shuffleArray = (array) => {
		const newArray = [...array]; // Create a copy of the original array
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
		}
		return newArray;
	};

	const randomizeState = (state, setter) => {
		const randomizedState = shuffleArray(state);
		setter(randomizedState);
	};

	const updateTeamOne = (existingData, newData) => {
		const updatedData = [...existingData, newData];
		return updatedData;
	};

	const updateTeamTwo = (existingData, newData) => {
		const updatedData = [...existingData, newData];
		return updatedData;
	};

	const updateTeamRating = (counter, teamRating, tier) => {
		teamRating += tier;
		return teamRating;
	};

	const [teamOne, setTeamOne] = useState([]);
	const [teamTwo, setTeamTwo] = useState([]);

	const [teamOneRating, setTeamOneRating] = useState(0);
	const [teamTwoRating, setTeamTwoRating] = useState(0);

	const handleGenerateClick = () => {
		setTeamOne([]);
		setTeamTwo([]);

		setTeamOneRating(0);
		setTeamTwoRating(0);

		let tempTeamOneArray = [];
		let tempTeamTwoArray = [];

		const sTierPoints = 10;
		const aTierPoints = 9;
		const bTierPoints = 8;
		const cTierPoints = 7;
		const dTierPoints = 6;
		const fTierPoints = 5;

		let teamOneSTierCounter = 0;
		let teamOneATierCounter = 0;
		let teamOneBTierCounter = 0;
		let teamOneCTierCounter = 0;
		let teamOneDTierCounter = 0;
		let teamOneFTierCounter = 0;

		let teamTwoSTierCounter = 0;
		let teamTwoATierCounter = 0;
		let teamTwoBTierCounter = 0;
		let teamTwoCTierCounter = 0;
		let teamTwoDTierCounter = 0;
		let teamTwoFTierCounter = 0;

		let teamOneRating = 0;
		let teamTwoRating = 0;

		randomizeState(sTierState, setSTierState);
		randomizeState(aTierState, setATierState);
		randomizeState(bTierState, setBTierState);
		randomizeState(cTierState, setCTierState);
		randomizeState(dTierState, setDTierState);
		randomizeState(fTierState, setFTierState);

		const combinedArrays = {
			sTierArray: sTierState,
			aTierArray: aTierState,
			bTierArray: bTierState,
			cTierArray: cTierState,
			dTierArray: dTierState,
			fTierArray: fTierState,
		};

		const arrayNames = Object.keys(combinedArrays);

		for (let i = 0; i < arrayNames.length; i++) {
			const currentArray = combinedArrays[arrayNames[i]];

			if (currentArray.length > 0) {
				for (let j = 0; j < currentArray.length; j++) {
					if (teamOneRating > teamTwoRating) {
						const player = currentArray[j];
						tempTeamTwoArray = updateTeamTwo(
							tempTeamTwoArray,
							player
						);

						if (arrayNames[i] === "sTierArray") {
							teamTwoSTierCounter++;
							teamTwoRating = updateTeamRating(
								teamTwoSTierCounter,
								teamTwoRating,
								sTierPoints
							);
						} else if (arrayNames[i] === "aTierArray") {
							teamTwoATierCounter++;
							teamTwoRating = updateTeamRating(
								teamTwoATierCounter,
								teamTwoRating,
								aTierPoints
							);
						} else if (arrayNames[i] === "bTierArray") {
							teamTwoBTierCounter++;
							teamTwoRating = updateTeamRating(
								teamTwoBTierCounter,
								teamTwoRating,
								bTierPoints
							);
						} else if (arrayNames[i] === "cTierArray") {
							teamTwoCTierCounter++;
							teamTwoRating = updateTeamRating(
								teamTwoCTierCounter,
								teamTwoRating,
								cTierPoints
							);
						} else if (arrayNames[i] === "dTierArray") {
							teamTwoDTierCounter++;
							teamTwoRating = updateTeamRating(
								teamTwoDTierCounter,
								teamTwoRating,
								dTierPoints
							);
						} else if (arrayNames[i] === "fTierArray") {
							teamTwoFTierCounter++;
							teamTwoRating = updateTeamRating(
								teamTwoFTierCounter,
								teamTwoRating,
								fTierPoints
							);
						}
					} else if (teamOneRating < teamTwoRating) {
						const player = currentArray[j];
						tempTeamOneArray = updateTeamOne(
							tempTeamOneArray,
							player
						);

						if (arrayNames[i] === "sTierArray") {
							teamOneSTierCounter++;
							teamOneRating = updateTeamRating(
								teamOneSTierCounter,
								teamOneRating,
								sTierPoints
							);
						} else if (arrayNames[i] === "aTierArray") {
							teamOneATierCounter++;
							teamOneRating = updateTeamRating(
								teamOneATierCounter,
								teamOneRating,
								aTierPoints
							);
						} else if (arrayNames[i] === "bTierArray") {
							teamOneBTierCounter++;
							teamOneRating = updateTeamRating(
								teamOneBTierCounter,
								teamOneRating,
								bTierPoints
							);
						} else if (arrayNames[i] === "cTierArray") {
							teamOneCTierCounter++;
							teamOneRating = updateTeamRating(
								teamOneCTierCounter,
								teamOneRating,
								cTierPoints
							);
						} else if (arrayNames[i] === "dTierArray") {
							teamOneDTierCounter++;
							teamOneRating = updateTeamRating(
								teamOneDTierCounter,
								teamOneRating,
								dTierPoints
							);
						} else if (arrayNames[i] === "fTierArray") {
							teamOneFTierCounter++;
							teamOneRating = updateTeamRating(
								teamOneFTierCounter,
								teamOneRating,
								fTierPoints
							);
						}
					} else if (teamOneRating === teamTwoRating) {
						const randomNumber = Math.floor(Math.random() * 2) + 1;

						if (tempTeamOneArray.length < tempTeamTwoArray.length) {
							const player = currentArray[j];
							tempTeamOneArray = updateTeamOne(
								tempTeamOneArray,
								player
							);

							if (arrayNames[i] === "sTierArray") {
								teamOneSTierCounter++;
								teamOneRating = updateTeamRating(
									teamOneSTierCounter,
									teamOneRating,
									sTierPoints
								);
							} else if (arrayNames[i] === "aTierArray") {
								teamOneATierCounter++;
								teamOneRating = updateTeamRating(
									teamOneATierCounter,
									teamOneRating,
									aTierPoints
								);
							} else if (arrayNames[i] === "bTierArray") {
								teamOneBTierCounter++;
								teamOneRating = updateTeamRating(
									teamOneBTierCounter,
									teamOneRating,
									bTierPoints
								);
							} else if (arrayNames[i] === "cTierArray") {
								teamOneCTierCounter++;
								teamOneRating = updateTeamRating(
									teamOneCTierCounter,
									teamOneRating,
									cTierPoints
								);
							} else if (arrayNames[i] === "dTierArray") {
								teamOneDTierCounter++;
								teamOneRating = updateTeamRating(
									teamOneDTierCounter,
									teamOneRating,
									dTierPoints
								);
							} else if (arrayNames[i] === "fTierArray") {
								teamOneFTierCounter++;
								teamOneRating = updateTeamRating(
									teamOneFTierCounter,
									teamOneRating,
									fTierPoints
								);
							}
						} else if (
							tempTeamOneArray.length > tempTeamTwoArray.length
						) {
							const player = currentArray[j];
							tempTeamTwoArray = updateTeamTwo(
								tempTeamTwoArray,
								player
							);

							if (arrayNames[i] === "sTierArray") {
								teamTwoSTierCounter++;
								teamTwoRating = updateTeamRating(
									teamTwoSTierCounter,
									teamTwoRating,
									sTierPoints
								);
							} else if (arrayNames[i] === "aTierArray") {
								teamTwoATierCounter++;
								teamTwoRating = updateTeamRating(
									teamTwoATierCounter,
									teamTwoRating,
									aTierPoints
								);
							} else if (arrayNames[i] === "bTierArray") {
								teamTwoBTierCounter++;
								teamTwoRating = updateTeamRating(
									teamTwoBTierCounter,
									teamTwoRating,
									bTierPoints
								);
							} else if (arrayNames[i] === "cTierArray") {
								teamTwoCTierCounter++;
								teamTwoRating = updateTeamRating(
									teamTwoCTierCounter,
									teamTwoRating,
									cTierPoints
								);
							} else if (arrayNames[i] === "dTierArray") {
								teamTwoDTierCounter++;
								teamTwoRating = updateTeamRating(
									teamTwoDTierCounter,
									teamTwoRating,
									dTierPoints
								);
							} else if (arrayNames[i] === "fTierArray") {
								teamTwoFTierCounter++;
								teamTwoRating = updateTeamRating(
									teamTwoFTierCounter,
									teamTwoRating,
									fTierPoints
								);
							}
						} else if (
							tempTeamOneArray.length === tempTeamTwoArray.length
						) {
							if (randomNumber === 1) {
								const player = currentArray[j];
								tempTeamOneArray = updateTeamOne(
									tempTeamOneArray,
									player
								);

								if (arrayNames[i] === "sTierArray") {
									teamOneSTierCounter++;
									teamOneRating = updateTeamRating(
										teamOneSTierCounter,
										teamOneRating,
										sTierPoints
									);
								} else if (arrayNames[i] === "aTierArray") {
									teamOneATierCounter++;
									teamOneRating = updateTeamRating(
										teamOneATierCounter,
										teamOneRating,
										aTierPoints
									);
								} else if (arrayNames[i] === "bTierArray") {
									teamOneBTierCounter++;
									teamOneRating = updateTeamRating(
										teamOneBTierCounter,
										teamOneRating,
										bTierPoints
									);
								} else if (arrayNames[i] === "cTierArray") {
									teamOneCTierCounter++;
									teamOneRating = updateTeamRating(
										teamOneCTierCounter,
										teamOneRating,
										cTierPoints
									);
								} else if (arrayNames[i] === "dTierArray") {
									teamOneDTierCounter++;
									teamOneRating = updateTeamRating(
										teamOneDTierCounter,
										teamOneRating,
										dTierPoints
									);
								} else if (arrayNames[i] === "fTierArray") {
									teamOneFTierCounter++;
									teamOneRating = updateTeamRating(
										teamOneFTierCounter,
										teamOneRating,
										fTierPoints
									);
								}
							} else if (randomNumber === 2) {
								const player = currentArray[j];
								tempTeamTwoArray = updateTeamTwo(
									tempTeamTwoArray,
									player
								);

								if (arrayNames[i] === "sTierArray") {
									teamTwoSTierCounter++;
									teamTwoRating = updateTeamRating(
										teamTwoSTierCounter,
										teamTwoRating,
										sTierPoints
									);
								} else if (arrayNames[i] === "aTierArray") {
									teamTwoATierCounter++;
									teamTwoRating = updateTeamRating(
										teamTwoATierCounter,
										teamTwoRating,
										aTierPoints
									);
								} else if (arrayNames[i] === "bTierArray") {
									teamTwoBTierCounter++;
									teamTwoRating = updateTeamRating(
										teamTwoBTierCounter,
										teamTwoRating,
										bTierPoints
									);
								} else if (arrayNames[i] === "cTierArray") {
									teamTwoCTierCounter++;
									teamTwoRating = updateTeamRating(
										teamTwoCTierCounter,
										teamTwoRating,
										cTierPoints
									);
								} else if (arrayNames[i] === "dTierArray") {
									teamTwoDTierCounter++;
									teamTwoRating = updateTeamRating(
										teamTwoDTierCounter,
										teamTwoRating,
										dTierPoints
									);
								} else if (arrayNames[i] === "fTierArray") {
									teamTwoFTierCounter++;
									teamTwoRating = updateTeamRating(
										teamTwoFTierCounter,
										teamTwoRating,
										fTierPoints
									);
								}
							}
						}
					}

					setTeamOneRating(teamOneRating);
					setTeamTwoRating(teamTwoRating);

					setTeamOne(tempTeamOneArray);
					setTeamTwo(tempTeamTwoArray);
				}
			}
		}
	};

	// useEffect(() => {
	// 	console.log("Team 1: ", teamOne);
	// }, [teamOne]);

	// useEffect(() => {
	// 	console.log("Team 2: ", teamTwo);
	// }, [teamTwo]);

	return (
		<div className="wrapper">
			<div className="team-maker-title glass">
				<h3>
					<span className="retro-span">Retro </span>
					<span className="future-span">Future</span> Team Maker
				</h3>
			</div>

			<div className="team-maker-description glass">
				<p>
					The <span className="team-maker-span">Team Maker</span> will
					make the teams as balanced as possible.
				</p>
				<p>
					Select the people who are playing then click "Make Teams".
				</p>
				<p>
					The <span className="team-rating-span">Team Rating</span>{" "}
					for each team determines how balanced the teams are.
				</p>
				<p>
					The closer the{" "}
					<span className="team-rating-span">Team Rating</span>{" "}
					numbers are to each other the more balanced the teams are.
				</p>
			</div>

			<div className="team-maker-grid">
				<div className="team-maker-container team-maker-checkboxes-container glass">
					<h3>S Tier</h3>
					{sTier.map((item) => {
						return (
							<div key={item.id} className="checkbox-wrapper">
								<input
									type="checkbox"
									id={`checkbox_${item.id}`}
									checked={sTierState.some(
										(selectedSTierPlayer) =>
											selectedSTierPlayer.id === item.id
									)}
									onChange={() =>
										handleSTierStateChange(item)
									}
								/>
								<label htmlFor={`checkbox_${item.id}`}>
									{item.name}
								</label>
							</div>
						);
					})}

					<h3>A Tier</h3>
					{aTier.map((item) => {
						return (
							<div key={item.id} className="checkbox-wrapper">
								<input
									type="checkbox"
									id={`checkbox_${item.id}`}
									checked={aTierState.some(
										(selectedATierPlayer) =>
											selectedATierPlayer.id === item.id
									)}
									onChange={() =>
										handleATierStateChange(item)
									}
								/>
								<label htmlFor={`checkbox_${item.id}`}>
									{item.name}
								</label>
							</div>
						);
					})}
					<h3>B Tier</h3>
					{bTier.map((item) => {
						return (
							<div key={item.id} className="checkbox-wrapper">
								<input
									type="checkbox"
									id={`checkbox_${item.id}`}
									checked={bTierState.some(
										(selectedBTierPlayer) =>
											selectedBTierPlayer.id === item.id
									)}
									onChange={() =>
										handleBTierStateChange(item)
									}
								/>
								<label htmlFor={`checkbox_${item.id}`}>
									{item.name}
								</label>
							</div>
						);
					})}
					<h3>C Tier</h3>
					{cTier.map((item) => {
						return (
							<div key={item.id} className="checkbox-wrapper">
								<input
									type="checkbox"
									id={`checkbox_${item.id}`}
									checked={cTierState.some(
										(selectedCTierPlayer) =>
											selectedCTierPlayer.id === item.id
									)}
									onChange={() =>
										handleCTierStateChange(item)
									}
								/>
								<label htmlFor={`checkbox_${item.id}`}>
									{item.name}
								</label>
							</div>
						);
					})}
					<h3>D Tier</h3>
					{dTier.map((item) => {
						return (
							<div key={item.id} className="checkbox-wrapper">
								<input
									type="checkbox"
									id={`checkbox_${item.id}`}
									checked={dTierState.some(
										(selectedDTierPlayer) =>
											selectedDTierPlayer.id === item.id
									)}
									onChange={() =>
										handleDTierStateChange(item)
									}
								/>
								<label htmlFor={`checkbox_${item.id}`}>
									{item.name}
								</label>
							</div>
						);
					})}
					<h3>F Tier</h3>
					{fTier.map((item) => {
						return (
							<div key={item.id} className="checkbox-wrapper">
								<input
									type="checkbox"
									id={`checkbox_${item.id}`}
									checked={fTierState.some(
										(selectedFTierPlayer) =>
											selectedFTierPlayer.id === item.id
									)}
									onChange={() =>
										handleFTierStateChange(item)
									}
								/>
								<label htmlFor={`checkbox_${item.id}`}>
									{item.name}
								</label>
							</div>
						);
					})}

					<div className="make-teams-btn-flex">
						<button
							className="make-teams-btn"
							onClick={handleGenerateClick}
						>
							Make Teams
						</button>
					</div>
				</div>

				<div className="team-maker-container glass">
					<div className="teams-grid">
						<div className="team-one">
							<h3>Team 1</h3>
							<h4>Team Rating: {teamOneRating}</h4>
							{teamOne.map((item) => (
								<TeamMakerPlayer
									key={item.id}
									name={item.name}
									img={item.img}
									rank={item.rank}
								/>
							))}
						</div>
						<div className="team-two">
							<h3>Team 2</h3>
							<h4>Team rating: {teamTwoRating}</h4>
							{teamTwo.map((item) => (
								<TeamMakerPlayer
									key={item.id}
									name={item.name}
									img={item.img}
									rank={item.rank}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
