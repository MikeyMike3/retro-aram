import React from "react";

export const Player = (props) => {
	return (
		<div>
			<h4>{props.name}</h4>
			<p>Wins: {props.wins}</p>
			<p>Losses: {props.losses}</p>
			<p>Games Played: {props.totalGamesPlayed}</p>
			<p>Win Rate: {props.winRate.toFixed(2)}%</p>
			<p>MMR: {props.mmr}</p>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};
