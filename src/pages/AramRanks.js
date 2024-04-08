import React, { useEffect, useState } from "react";
import { Player } from "../components/Player";

const mmr = 100;

// new player template, make sure to include the {} brackets
// {
//     name: "",
//     history: [],
//     wins: 0,
//     losses: 0,
//     totalGamesPlayed: 0,
//     winRate: 0,
//     mmr: mmr,
// },

const ranks = [
	{
		name: "Siren",
		history: ["w", "l", "w", "w", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "You",
		history: ["w", "l", "w", "w", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Plexo",
		history: ["w", "l", "w", "w", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Drango",
		history: ["w", "l", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Fries",
		history: ["w", "l", "w", "l", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Ethiks",
		history: ["l", "w", "l", "l", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Kane",
		history: ["l", "w", "l", "w", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Amp",
		history: ["l", "w", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Money",
		history: ["l", "w", "l", "l", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Loli",
		history: ["l", "w", "l", "l", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
];

const mmrWin = 25;
const mmrLoss = 15;
let wCount = 0;
let lCount = 0;

// loops through all players and sets appropriate data for each player
for (let i = 0; i < ranks.length; i++) {
	for (let j = 0; j < ranks[i].history.length; j++) {
		if ((ranks[i].history[j] === "W") | (ranks[i].history[j] === "w")) {
			wCount++;
		} else if (
			(ranks[i].history[j] === "L") |
			(ranks[i].history[j] === "l")
		) {
			lCount++;
		}
	}

	if (ranks[i].totalGamesPlayed === 0) {
		ranks[i].totalGamesPlayed = ranks[i].history.length;
	}

	// set data within the ranks array's objects
	ranks[i].wins = wCount;
	ranks[i].losses = lCount;
	ranks[i].winRate = (wCount / ranks[i].totalGamesPlayed) * 100;

	ranks[i].mmr =
		ranks[i].wins * mmrWin - ranks[i].losses * mmrLoss + ranks[i].mmr;

	// set mmr to 0 if mr is negative
	if (ranks[i].mmr < 0) {
		ranks[i].mmr = 0;
	}

	wCount = 0;
	lCount = 0;
}

export const AramRanks = () => {
	const [displayRanks, setDisplayRanks] = useState([]);

	useEffect(() => {
		if (Array.isArray(ranks)) {
			// Filter out any undefined elements or elements that don't have the mmr property
			const validRanks = ranks.filter(
				(rank) =>
					rank &&
					typeof rank === "object" &&
					rank.hasOwnProperty("mmr")
			);

			// Check if the filtered array is not empty
			if (validRanks.length > 0) {
				// Sort the valid ranks array based on mmr
				const sortedRanks = validRanks.sort((a, b) => b.mmr - a.mmr);

				// Call setDisplayRanks with the sorted array
				setDisplayRanks(sortedRanks);
			} else {
				console.error(
					"All elements in ranks are undefined or do not have 'mmr' property"
				);
			}
		} else {
			console.error("ranks is not an array or is undefined");
		}
	}, []);

	return (
		<div className="wrapper">
			<h1 className="aram-rankings-title glass">
				<span className="retro-span">Retro </span>
				<span className="future-span">Future </span>
				<span className="aram-span">Aram </span>
				<span className="rankings-span">Rankings</span>
			</h1>
			<div className="hero-container">
				{/* <video src="video/retro-aram-video-1.mp4" autoPlay loop muted /> */}

				<div className="ranks-container glass">
					<div className="player-grid grid-key">
						<h4>Name</h4>
						<h4 className="end">Wins</h4>
						<h4 className="end">Losses</h4>
						<h4 className="end">Games Played</h4>
						<h4 className="end">Win Rate</h4>
						<h4 className="end">MMR</h4>
					</div>
					{displayRanks.map((item) => (
						<Player
							key={item.name}
							name={item.name}
							wins={item.wins}
							losses={item.losses}
							totalGamesPlayed={item.totalGamesPlayed}
							winRate={item.winRate}
							mmr={item.mmr}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
