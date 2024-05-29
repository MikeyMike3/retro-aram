export const tierListMaker = (ranks) => {
	const sTier = [];
	const aTier = [];
	const bTier = [];
	const cTier = [];
	const dTier = [];
	const fTier = [];

	const sTierMmr = 400;
	const aTierMmr = 300;
	const bTierMmr = 200;
	const cTierMmr = 150;
	const dTierMmr = 100;
	const fTierMmr = 75;
	for (let i = 0; i < ranks.length; i++) {
		if (ranks[i].mmr >= sTierMmr) {
			sTier.push(ranks[i]);
			ranks[i].rank = "S";
		} else if (ranks[i].mmr >= aTierMmr) {
			aTier.push(ranks[i]);
			ranks[i].rank = "A";
		} else if (ranks[i].mmr >= bTierMmr) {
			bTier.push(ranks[i]);
			ranks[i].rank = "B";
		} else if (ranks[i].mmr >= cTierMmr) {
			cTier.push(ranks[i]);
			ranks[i].rank = "C";
		} else if (ranks[i].mmr >= dTierMmr) {
			dTier.push(ranks[i]);
			ranks[i].rank = "D";
		} else if (ranks[i].mmr >= fTierMmr || ranks[i].mmr >= 0) {
			fTier.push(ranks[i]);
			ranks[i].rank = "F";
		}
	}
	return { sTier, aTier, bTier, cTier, dTier, fTier };
};
