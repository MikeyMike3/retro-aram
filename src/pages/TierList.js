import React from "react";
import { TierListPlayer } from "../components/TierListPlayer";
import { ranks } from "./AramRanks";

console.log(ranks);

export const sTier = [];
export const aTier = [];
export const bTier = [];
export const cTier = [];
export const dTier = [];
export const fTier = [];

const sTierMmr = 400;
const aTierMmr = 300;
const bTierMmr = 200;
const cTierMmr = 150;
const dTierMmr = 100;
const fTierMmr = 75;

for (let i = 0; i < ranks.length; i++) {
	if (ranks[i].mmr > sTierMmr) {
		sTier.push(ranks[i]);
		ranks[i].rank = "S";
	} else if (ranks[i].mmr > aTierMmr) {
		aTier.push(ranks[i]);
		ranks[i].rank = "A";
	} else if (ranks[i].mmr > bTierMmr) {
		bTier.push(ranks[i]);
		ranks[i].rank = "B";
	} else if (ranks[i].mmr > cTierMmr) {
		cTier.push(ranks[i]);
		ranks[i].rank = "C";
	} else if (ranks[i].mmr > dTierMmr) {
		dTier.push(ranks[i]);
		ranks[i].rank = "D";
	} else if (ranks[i].mmr > fTierMmr) {
		fTier.push(ranks[i]);
		ranks[i].rank = "F";
	}
}

// export const sTier = [
// 	{
// 		name: "Plexo",
// 		img: require("../imgs/plexo-disc.gif"),
// 		rank: "S",
// 		id: "Plexo",
// 	},
// 	{
// 		name: "Siren",
// 		img: require("../imgs/siren-disc.PNG"),
// 		rank: "S",
// 		id: "Siren",
// 	},
// 	{
// 		name: "Ethiks",
// 		img: require("../imgs/ethiks-disc.png"),
// 		rank: "S",
// 		id: "Ethiks",
// 	},
// 	{
// 		name: "Loli",
// 		img: require("../imgs/loli-disc.gif"),
// 		rank: "S",
// 		id: "Loli",
// 	},
// 	{
// 		name: "Rose",
// 		img: require("../imgs/dark-rose-disc.PNG"),
// 		rank: "S",
// 		id: "Rose",
// 	},
// ];

// export const aTier = [
// 	{
// 		name: "Shady",
// 		img: require("../imgs/shady-disc.png"),
// 		rank: "A",
// 		id: "Shady",
// 	},
// ];

// export const bTier = [
// 	{
// 		name: "Fries",
// 		img: require("../imgs/fries.png"),
// 		rank: "B",
// 		id: "Fries",
// 	},
// 	{
// 		name: "You",
// 		img: require("../imgs/you-disc.gif"),
// 		rank: "B",
// 		id: "You",
// 	},
// 	{
// 		name: "Amp",
// 		img: require("../imgs/amp-disc.png"),
// 		rank: "B",
// 		id: "Amp",
// 	},
// ];

// export const cTier = [
// 	{
// 		name: "Ronin",
// 		img: require("../imgs/ronin-disc.png"),
// 		rank: "C",
// 		id: "Ronin",
// 	},
// 	{
// 		name: "Drango",
// 		img: require("../imgs/drango-disc.png"),
// 		rank: "C",
// 		id: "Drango",
// 	},
// 	{
// 		name: "Argo",
// 		img: require("../imgs/argo-disc.png"),
// 		rank: "C",
// 		id: "Argo",
// 	},
// ];

// export const dTier = [
// 	{
// 		name: "Money",
// 		img: require("../imgs/money-disc.png"),
// 		rank: "D",
// 		id: "Money",
// 	},
// 	{
// 		name: "Gucci",
// 		img: require("../imgs/gucci-disc.PNG"),
// 		rank: "D",
// 		id: "Gucci",
// 	},
// ];

// export const fTier = [
// 	{
// 		name: "Sarah",
// 		img: require("../imgs/sarah-disc.PNG"),
// 		rank: "F",
// 		id: "Sarah",
// 	},
// ];

export const TierList = () => {
	return (
		<div className="wrapper">
			<h3 className="tier-list-title glass">
				<span className="retro-span">Retro </span>
				<span className="future-span">Future </span>
				Tier List
			</h3>
			<div className="tier-list-grid-container ">
				<div className="letter-rank-tier rank-tier-list-top glass">
					S
				</div>
				<div className="tier-list-column-two-grid tier-list-column-two-grid-top glass">
					{sTier.map((item) => (
						<TierListPlayer
							key={item.name}
							name={item.name}
							img={item.img}
						/>
					))}
				</div>
				<div className="letter-rank-tier glass">A</div>
				<div className="tier-list-column-two-grid glass">
					{aTier.map((item) => (
						<TierListPlayer
							key={item.name}
							name={item.name}
							img={item.img}
						/>
					))}
				</div>
				<div className="letter-rank-tier glass">B</div>
				<div className="tier-list-column-two-grid glass">
					{bTier.map((item) => (
						<TierListPlayer
							key={item.name}
							name={item.name}
							img={item.img}
						/>
					))}
				</div>
				<div className="letter-rank-tier glass">C</div>
				<div className="tier-list-column-two-grid glass">
					{cTier.map((item) => (
						<TierListPlayer
							key={item.name}
							name={item.name}
							img={item.img}
						/>
					))}
				</div>
				<div className="letter-rank-tier glass">D</div>
				<div className="tier-list-column-two-grid glass">
					{dTier.map((item) => (
						<TierListPlayer
							key={item.name}
							name={item.name}
							img={item.img}
						/>
					))}
				</div>
				<div className="letter-rank-tier glass">F</div>
				<div className="tier-list-column-two-grid glass">
					{fTier.map((item) => (
						<TierListPlayer
							key={item.name}
							name={item.name}
							img={item.img}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
