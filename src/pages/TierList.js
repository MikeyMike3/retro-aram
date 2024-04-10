import React from "react";
import { TierListPlayer } from "../components/TierListPlayer";

const sTier = [
	{
		name: "Plexo",
		img: require("../imgs/chase-disc.PNG"),
	},
	{
		name: "Siren",
		img: require("../imgs/siren-disc.PNG"),
	},
	{
		name: "Ethiks",
		img: require("../imgs/ethiks-disc.png"),
	},
	{
		name: "Loli",
		img: require("../imgs/loli-disc.png"),
	},
];

const aTier = [
	{
		name: "Shady",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
];

const bTier = [
	{
		name: "Fries",
		img: require("../imgs/fries.png"),
	},
	{
		name: "You",
		img: require("../imgs/you-disc.gif"),
	},
	{
		name: "Amp",
		img: require("../imgs/amp-disc.png"),
	},
];

const cTier = [
	{
		name: "Ronin",
		img: require("../imgs/ronin-disc.png"),
	},
	{
		name: "Drango",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
	{
		name: "Argo",
		img: require("../imgs/argo-disc.png"),
	},
];

const dTier = [
	{
		name: "Money",
		img: require("../imgs/money-disc.png"),
	},
	{
		name: "Gucci",
		img: require("../imgs/gucci-disc.PNG"),
	},
];

const fTier = [
	{
		name: "Sarah",
		img: require("../imgs/sarah-disc.PNG"),
	},
];

// const combinedArrays = {
// 	dTierArray: dTier,
// 	fTierArray: fTier,
// };

// const arrayNames = Object.keys(combinedArrays);

// for (let i = 0; i < arrayNames.length; i++) {
// 	const currentArray = combinedArrays[arrayNames[i]];

// 	for (let j = 0; j < currentArray.length; j++) {
// 	}
// }

// for (let i = 0; i >= combinedArrays.length; i++) {
// 	for (let j = 0; j >= combinedArrays.dTierArray; j++) {
// 		console.log(combinedArrays[i].dTierArray.name[j]);
// 	}
// }

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
