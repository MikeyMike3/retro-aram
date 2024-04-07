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
		name: "DrangoTheDude",
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
		name: "IGotCaughtWackin",
		history: ["l", "w", "l", "l", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
];

export const AramRanks = () => {
	const [displayRanks, setDisplayRanks] = useState([]);

	useEffect(() => {
		const mmrWin = 25;
		const mmrLoss = 15;
		let wCount = 0;
		let lCount = 0;

		// loops through all players and sets appropriate data for each player
		for (let i = 0; i < ranks.length; i++) {
			for (let j = 0; j < ranks[i].history.length; j++) {
				if (
					(ranks[i].history[j] === "W") |
					(ranks[i].history[j] === "w")
				) {
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
				ranks[i].wins * mmrWin -
				ranks[i].losses * mmrLoss +
				ranks[i].mmr;

			// set mmr to 0 if mr is negative
			if (ranks[i].mmr < 0) {
				ranks[i].mmr = 0;
			}

			wCount = 0;
			lCount = 0;
		}

		setDisplayRanks(ranks);
	}, []);

	return (
		<>
			<h1 className="aram-rankings-title ">
				<span className="retro-span">Retro </span>
				<span className="future-span">Future </span>
				<span className="aram-span">Aram </span>
				<span className="rankings-span">Rankings</span>
			</h1>
			<div className="hero-container">
				<video src="video/retro-aram-video-1.mp4" autoPlay loop muted />

				<div className="ranks-container glass">
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
		</>
	);
};
