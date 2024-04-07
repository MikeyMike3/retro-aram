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
			<div className="player-grid">
				<h4 className="left">{props.name}</h4>
				<p className="end">{props.wins}</p>
				<p className="end">{props.losses}</p>
				<p className="end">{props.totalGamesPlayed}</p>
				<p className="end">{formatWinRate(props.winRate)}%</p>
				<p className="end">{props.mmr}</p>
			</div>
			<hr></hr>
		</>
	);
};
