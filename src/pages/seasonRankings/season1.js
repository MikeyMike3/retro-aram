import React, { useEffect, useState } from "react";
import { Player } from "../../components/Player";
import { leaderboard } from "../../functions/leaderboard";
import { sortAscending } from "../../functions/sortAscending";
import { sortReverseAscending } from "../../functions/sortReverseAscending";

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

export const ranks = [
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
			"w",
			"w",
			"w",
			"l",
			"l",
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
			"w",
			"w",
			"l",
			"l",
			"w",
			"l",
			"l",
			"l",
			"l",
			"w",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/siren-disc.PNG"),
		rank: null,
		id: "Siren",
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
			"l",
			"w",
			"w",
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
			"l",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/you-disc.gif"),
		rank: null,
		id: "You",
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
			"l",
			"l",
			"l",
			"w",
			"w",
			"l",
			"w",
			"w",
			"l",
			"w",
			"w",
			"l",
			"l",
			"w",
			"w",
			"w",
			"w",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/plexo-disc.gif"),
		rank: null,
		id: "Plexo",
	},
	{
		name: "Drango",
		history: [
			"w",
			"l",
			"w",
			"w",
			"w",
			"l",
			"l",
			"l",
			"w",
			"w",
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
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/drango-disc.png"),
		rank: null,
		id: "Drango",
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
			"l",
			"w",
			"w",
			"l",
			"l",
			"w",
			"w",
			"l",
			"w",
			"w",
			"l",
			"w",
			"w",
			"l",
			"w",
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
			"l",
			"w",
			"w",
			"w",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/fries.png"),
		rank: "B",
		id: "Fries",
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
			"l",
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
			"l",
			"w",
			"w",
			"l",
			"l",
			"l",
			"w",
			"l",
			"l",
			"w",
			"w",
			"l",
			"l",
			"l",
			"w",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/ethiks-disc.png"),
		rank: null,
		id: "Ethiks",
	},
	{
		name: "Kane",
		history: ["l", "w", "l", "w", "w", "w", "w", "w", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/kane-disc.PNG"),
		rank: null,
		id: "Kane",
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
			"w",
			"l",
			"l",
			"l",
			"l",
			"l",
			"l",
			"l",
			"w",
			"w",
			"w",
			"w",
			"w",
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
			"l",
			"l",
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
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/amp-disc.png"),
		rank: null,
		id: "Amp",
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
			"w",
			"l",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/money-disc.png"),
		rank: null,
		id: "Money",
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
			"w",
			"w",
			"w",
			"l",
			"l",
			"l",
			"w",
			"w",
			"w",
			"l",
			"l",
			"l",
			"l",
			"w",
			"l",
			"l",
			"w",
			"w",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/loli-disc.gif"),
		rank: null,
		id: "Loli",
	},
	{
		name: "Argo",
		history: ["l", "l", "l", "l", "w", "w", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 1,
		mmr: mmr,
		img: require("../../imgs/argo-disc.png"),
		rank: null,
		id: "Argo",
	},
	{
		name: "Gucci",
		history: ["w", "l", "l", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/gucci-disc.PNG"),
		rank: null,
		id: "Gucci",
	},
	{
		name: "Ronin",
		history: ["l", "l", "w", "w", "w", "l", "l", "w", "l", "l"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/ronin-disc.png"),
		rank: null,
		id: "Ronin",
	},
	{
		name: "Shady",
		history: ["l", "w", "w"],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/shady-disc.png"),
		rank: null,
		id: "Shady",
	},
	{
		name: "Rose",
		history: [
			"w",
			"w",
			"l",
			"l",
			"w",
			"l",
			"l",
			"l",
			"w",
			"l",
			"w",
			"w",
			"l",
			"l",
			"w",
			"l",
			"l",
			"w",
			"w",
			"l",
		],
		wins: 0,
		losses: 0,
		totalGamesPlayed: 0,
		winRate: 0,
		seriesLeft: 0,
		mmr: mmr,
		img: require("../../imgs/dark-rose-disc.PNG"),
		rank: null,
		id: "Rose",
	},
];

leaderboard(ranks);

export const Season1 = () => {
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

	const gridBtnClassNames = "grid-btn";

	return (

			<div className="hero-container">
        
				<div className="ranks-container glass">
          Season 1
					<div className="table-info">
						<p>
							<strong>
								Scroll to the side to see more table data.
							</strong>
						</p>
					</div>

					<div className="table-container">
						<table>
							<tr>
								<th>Name</th>
								<th>
									<button
										className={`${gridBtnClassNames} ${
											winsClickCounter === 1
												? "reverse-ascending"
												: ""
										} ${
											winsClickCounter === 2
												? "ascending"
												: ""
										}`}
										onClick={handleClickWins}>
										Wins
									</button>
								</th>
								<th>
									<button
										className={`${gridBtnClassNames} ${
											lossesClickCounter === 1
												? "reverse-ascending"
												: ""
										} ${
											lossesClickCounter === 2
												? "ascending"
												: ""
										}`}
										onClick={handleClickLosses}>
										Losses
									</button>
								</th>
								<th>
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
										onClick={handleClickTotalGamesPlayed}>
										Games Played
									</button>
								</th>
								<th>
									<button
										className={`${gridBtnClassNames} ${
											winRateClickCounter === 1
												? "reverse-ascending"
												: ""
										} ${
											winRateClickCounter === 2
												? "ascending"
												: ""
										}`}
										onClick={handleClickWinRate}>
										Win Rate
									</button>
								</th>
								<th>
									<button
										className={`${gridBtnClassNames} ${
											mmrClickCounter === 1
												? "reverse-ascending"
												: ""
										} ${
											mmrClickCounter === 2
												? "ascending"
												: ""
										}`}
										onClick={handleClickMmr}>
										MMR
									</button>
								</th>
							</tr>
							{displayRanks.map((item) => (
								<tr>
									<Player
										key={item.name}
										name={item.name}
										wins={item.wins}
										losses={item.losses}
										totalGamesPlayed={item.totalGamesPlayed}
										winRate={item.winRate}
										mmr={item.mmr}
									/>
								</tr>
							))}
						</table>
					</div>
				</div>
			</div>
	);
};
