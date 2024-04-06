import React from "react";

export const Player = (props) => {
	const formatWinRate = (winRate) => {
		const decimalPlaces = winRate.toString().split(".")[1];
		return decimalPlaces && decimalPlaces.length > 2
			? parseFloat(winRate).toFixed(2)
			: winRate;
	};
	return (
		<div>
			<h4>{props.name}</h4>
			<p>Wins: {props.wins}</p>
			<p>Losses: {props.losses}</p>
			<p>Games Played: {props.totalGamesPlayed}</p>
			<p>Win Rate: {formatWinRate(props.winRate)}%</p>
			<p>MMR: {props.mmr}</p>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};
