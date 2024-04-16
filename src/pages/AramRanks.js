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
		history: [
			"w",
			"l",
			"w",
			"w",
			"w",
			"w",
			"w",
			"l",
			"l",
			"w",
			"w",
			"l",
			"w",
			"w",
			"w",
			"w",
			"l",
			"w",
			"w",
			"w",
			"l",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "You",
		history: [
			"w",
			"l",
			"w",
			"w",
			"w",
			"w",
			"w",
			"w",
			"w",
			"l",
			"l",
			"l",
			"w",
			"w",
			"w",
			"w",
			"l",
			"w",
			"w",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Plexo",
		history: [
			"w",
			"l",
			"w",
			"w",
			"w",
			"l",
			"l",
			"w",
			"l",
			"l",
			"w",
			"l",
			"l",
			"l",
			"w",
			"w",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Drango",
		history: ["w", "l", "w", "w", "w", "l", "l", "l", "w", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Fries",
		history: [
			"w",
			"l",
			"w",
			"l",
			"l",
			"l",
			"l",
			"w",
			"w",
			"w",
			"w",
			"l",
			"l",
			"w",
			"w",
			"w",
			"w",
			"w",
			"w",
			"w",
			"l",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Ethiks",
		history: [
			"l",
			"w",
			"l",
			"l",
			"l",
			"w",
			"w",
			"l",
			"l",
			"w",
			"w",
			"l",
			"l",
			"w",
			"l",
			"l",
			"w",
			"l",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Kane",
		history: ["l", "w", "l", "w", "w", "w", "w", "w", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Amp",
		history: [
			"l",
			"w",
			"l",
			"l",
			"l",
			"l",
			"l",
			"l",
			"l",
			"l",
			"l",
			"w",
			"l",
			"l",
			"w",
			"l",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Money",
		history: [
			"l",
			"w",
			"l",
			"l",
			"l",
			"w",
			"w",
			"l",
			"w",
			"w",
			"w",
			"l",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Loli",
		history: [
			"l",
			"w",
			"l",
			"l",
			"l",
			"l",
			"l",
			"w",
			"w",
			"l",
			"l",
			"l",
			"l",
			"w",
			"w",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Argo",
		history: ["l", "l", "l", "l", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Gucci",
		history: ["w", "l", "l", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Ronin",
		history: ["l", "l", "w", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		mmr: mmr,
	},
	{
		name: "Shady",
		history: ["l", "w", "w"],
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

function sortReverseAscending(ranksArray, propertyName, setter) {
	if (Array.isArray(ranksArray)) {
		// Filter out any undefined elements or elements that don't have the specified property
		const validRanks = ranksArray.filter(
			(rank) =>
				rank &&
				typeof rank === "object" &&
				rank.hasOwnProperty(propertyName)
		);

		// Check if the filtered array is not empty
		if (validRanks.length > 0) {
			// Sort the valid ranks array based on the specified property
			const sortedRanks = validRanks.sort(
				(a, b) => b[propertyName] - a[propertyName]
			);

			// Call setDisplayRanks with the sorted array
			setter(sortedRanks);
		} else {
			console.error(
				`All elements in ranks are undefined or do not have '${propertyName}' property`
			);
		}
	} else {
		console.error("ranks is not an array or is undefined");
	}
}

function sortAscending(ranksArray, propertyName, setter) {
	if (Array.isArray(ranksArray)) {
		// Filter out any undefined elements or elements that don't have the specified property
		const validRanks = ranksArray.filter(
			(rank) =>
				rank &&
				typeof rank === "object" &&
				rank.hasOwnProperty(propertyName)
		);

		// Check if the filtered array is not empty
		if (validRanks.length > 0) {
			// Sort the valid ranks array based on the specified property
			const sortedRanks = validRanks.sort(
				(a, b) => a[propertyName] - b[propertyName]
			);

			// Call setDisplayRanks with the sorted array
			setter(sortedRanks);
		} else {
			console.error(
				`All elements in ranks are undefined or do not have '${propertyName}' property`
			);
		}
	} else {
		console.error("ranks is not an array or is undefined");
	}
}

export const AramRanks = () => {
	const [displayRanks, setDisplayRanks] = useState([]);

	const [mmrClickCounter, setMmrClickCounter] = useState(1);
	const [winsClickCounter, setWinsClickCounter] = useState(0);
	const [lossesClickCounter, setLossesClickCounter] = useState(0);
	const [winRateClickCounter, setWinRateClickCounter] = useState(0);
	const [totalGamesPlayedClickCounter, setTotalGamesPlayedClickCounter] =
		useState(0);

	const handleClickWins = () => {
		setWinsClickCounter((clickCounter) => clickCounter + 1);
	};

	const handleClickLosses = () => {
		setLossesClickCounter((clickCounter) => clickCounter + 1);
	};

	const handleClickWinRate = () => {
		setWinRateClickCounter((clickCounter) => clickCounter + 1);
	};

	const handleClickTotalGamesPlayed = () => {
		setTotalGamesPlayedClickCounter((clickCounter) => clickCounter + 1);
	};

	const handleClickMmr = () => {
		setMmrClickCounter((clickCounter) => clickCounter + 1);
	};

	// wins filter
	useEffect(() => {
		if (winsClickCounter === 1) {
			setMmrClickCounter(0);
			setLossesClickCounter(0);
			setWinRateClickCounter(0);
			setTotalGamesPlayedClickCounter(0);
			sortReverseAscending(ranks, "wins", setDisplayRanks);
		} else if (winsClickCounter === 2) {
			sortAscending(ranks, "wins", setDisplayRanks);
		} else if (winsClickCounter === 3) {
			setWinsClickCounter(0);
			setMmrClickCounter(1);
		}
	}, [winsClickCounter]);

	// losses filter
	useEffect(() => {
		if (lossesClickCounter === 1) {
			setMmrClickCounter(0);
			setWinsClickCounter(0);
			setWinRateClickCounter(0);
			setTotalGamesPlayedClickCounter(0);
			sortReverseAscending(ranks, "losses", setDisplayRanks);
		} else if (lossesClickCounter === 2) {
			sortAscending(ranks, "losses", setDisplayRanks);
		} else if (lossesClickCounter === 3) {
			setLossesClickCounter(0);
			setMmrClickCounter(1);
		}
	}, [lossesClickCounter]);

	// winRate filter
	useEffect(() => {
		if (winRateClickCounter === 1) {
			setMmrClickCounter(0);
			setWinsClickCounter(0);
			setLossesClickCounter(0);
			setTotalGamesPlayedClickCounter(0);
			sortReverseAscending(ranks, "winRate", setDisplayRanks);
		} else if (winRateClickCounter === 2) {
			sortAscending(ranks, "winRate", setDisplayRanks);
		} else if (winRateClickCounter === 3) {
			setWinRateClickCounter(0);
			setMmrClickCounter(1);
		}
	}, [winRateClickCounter]);

	// totalGamesPlayed filter
	useEffect(() => {
		if (totalGamesPlayedClickCounter === 1) {
			setMmrClickCounter(0);
			setWinsClickCounter(0);
			setLossesClickCounter(0);
			setWinRateClickCounter(0);

			sortReverseAscending(ranks, "totalGamesPlayed", setDisplayRanks);
		} else if (totalGamesPlayedClickCounter === 2) {
			sortAscending(ranks, "totalGamesPlayed", setDisplayRanks);
		} else if (totalGamesPlayedClickCounter === 3) {
			setTotalGamesPlayedClickCounter(0);
			setMmrClickCounter(1);
		}
	}, [totalGamesPlayedClickCounter]);

	// mmr filter
	useEffect(() => {
		if (mmrClickCounter === 1) {
			setWinsClickCounter(0);
			setLossesClickCounter(0);
			setWinRateClickCounter(0);
			setTotalGamesPlayedClickCounter(0);
			sortReverseAscending(ranks, "mmr", setDisplayRanks);
		} else if (mmrClickCounter === 2) {
			sortAscending(ranks, "mmr", setDisplayRanks);
		} else if (mmrClickCounter === 3) {
			setMmrClickCounter(1);
		}
	}, [mmrClickCounter]);

	const gridBtnClassNames = "end grid-btn";

	return (
		<div className="wrapper">
			<h1 className="aram-rankings-title glass">
				<span className="retro-span">Retro </span>
				<span className="future-span">Future </span>
				<span className="aram-span">Aram </span>
				<span className="rankings-span">Rankings</span>
			</h1>

			<div className="filter-key-container glass">
				<h3>
					<span className="rankings-span">Rankings</span> Filter Key
				</h3>
				<p className="ascending-key">
					<span>Ascending</span> order(Lowest to Highest).
				</p>
				<p className="reverse-ascending-key">
					<span>Descending</span> order(Highest to Lowest).
				</p>
				<p className="reverse-ascending-key">
					1 click for <span>descending</span> order.
				</p>
				<p className="ascending-key">
					2 clicks for <span>ascending</span> order.
				</p>
				<p>Click the stat labels below to sort.</p>
			</div>

			<div className="hero-container">
				<div className="ranks-container glass">
					<div className="player-grid grid-key">
						<h4>Name</h4>
						<button
							className={`${gridBtnClassNames} ${
								winsClickCounter === 1
									? "reverse-ascending"
									: ""
							} ${winsClickCounter === 2 ? "ascending" : ""}`}
							onClick={handleClickWins}
						>
							Wins
						</button>
						<button
							className={`${gridBtnClassNames} ${
								lossesClickCounter === 1
									? "reverse-ascending"
									: ""
							} ${lossesClickCounter === 2 ? "ascending" : ""}`}
							onClick={handleClickLosses}
						>
							Losses
						</button>
						<button
							className={`${gridBtnClassNames} ${
								totalGamesPlayedClickCounter === 1
									? "reverse-ascending"
									: ""
							} ${
								totalGamesPlayedClickCounter === 2
									? "ascending"
									: ""
							}`}
							onClick={handleClickTotalGamesPlayed}
						>
							Games Played
						</button>
						<button
							className={`${gridBtnClassNames} ${
								winRateClickCounter === 1
									? "reverse-ascending"
									: ""
							} ${winRateClickCounter === 2 ? "ascending" : ""}`}
							onClick={handleClickWinRate}
						>
							Win Rate
						</button>
						<button
							className={`${gridBtnClassNames} ${
								mmrClickCounter === 1 ? "reverse-ascending" : ""
							} ${mmrClickCounter === 2 ? "ascending" : ""}`}
							onClick={handleClickMmr}
						>
							MMR
						</button>
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
