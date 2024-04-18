import React from "react";

export const Player = (props) => {
	const formatWinRate = (winRate) => {
		const decimalPlaces = winRate.toString().split(".")[1];
		return decimalPlaces && decimalPlaces.length > 2
			? parseFloat(winRate).toFixed(2)
			: winRate;
	};
	return (
		<>
			<td>{props.name}</td>
			<td>{props.wins}</td>
			<td>{props.losses}</td>
			<td>{props.totalGamesPlayed}</td>
			<td>{formatWinRate(props.winRate)}%</td>
			<td>{props.mmr}</td>
		</>
	);
};
