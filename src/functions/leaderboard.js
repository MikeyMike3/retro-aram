

export const leaderboard = (ranks) => {
const mmrWin = 25;
const mmrLoss = 15;

const leaverPenalty = 50;

let wCount = 0;
let lCount = 0;

// loops through all players and sets appropriate data for each player
for (let i = 0; i < ranks.length; i++) {
	for (let j = 0; j < ranks[i].history.length; j++) {
		if ((ranks[i].history[j] === "W") | (ranks[i].history[j] === "w")) {
			wCount++;
			ranks[i].mmr += mmrWin;
		} else if (
			(ranks[i].history[j] === "L") |
			(ranks[i].history[j] === "l")
		) {
			lCount++;
			ranks[i].mmr -= mmrLoss;
			if (ranks[i].mmr < 0) {
				ranks[i].mmr = 0;
			}
		}
	}

	if (ranks[i].seriesLeft > 0) {
		ranks[i].mmr -= leaverPenalty * ranks[i].seriesLeft;
	}

	ranks[i].totalGamesPlayed = wCount + lCount;

	// set data within the ranks array's objects
	ranks[i].wins = wCount;
	ranks[i].losses = lCount;
	ranks[i].winRate = (wCount / ranks[i].totalGamesPlayed) * 100;

	wCount = 0;
	lCount = 0;
}
}