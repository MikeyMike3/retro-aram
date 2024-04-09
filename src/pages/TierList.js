import React from "react";
import { TierListPlayer } from "../components/TierListPlayer";

const sTier = [
	{
		name: "Plexo",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
	{
		name: "Siren",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
	{
		name: "Ethiks",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
	{
		name: "Loli",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
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
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
	{
		name: "Amp",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
];

const cTier = [
	{
		name: "Ronin",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
	{
		name: "Drango",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
	{
		name: "Argo",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
];

const dTier = [
	{
		name: "Money",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
	{
		name: "Tyler",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
];

const fTier = [
	{
		name: "Sarah",
		img: require("../imgs/tier-list-img-placeholder.jpeg"),
	},
];

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
						<TierListPlayer name={item.name} img={item.img} />
					))}
				</div>
				<div className="letter-rank-tier glass">A</div>
				<div className="tier-list-column-two-grid glass">
					{aTier.map((item) => (
						<TierListPlayer name={item.name} img={item.img} />
					))}
				</div>
				<div className="letter-rank-tier glass">B</div>
				<div className="tier-list-column-two-grid glass">
					{bTier.map((item) => (
						<TierListPlayer name={item.name} img={item.img} />
					))}
				</div>
				<div className="letter-rank-tier glass">C</div>
				<div className="tier-list-column-two-grid glass">
					{cTier.map((item) => (
						<TierListPlayer name={item.name} img={item.img} />
					))}
				</div>
				<div className="letter-rank-tier glass">D</div>
				<div className="tier-list-column-two-grid glass">
					{dTier.map((item) => (
						<TierListPlayer name={item.name} img={item.img} />
					))}
				</div>
				<div className="letter-rank-tier glass">F</div>
				<div className="tier-list-column-two-grid glass">
					{fTier.map((item) => (
						<TierListPlayer name={item.name} img={item.img} />
					))}
				</div>
			</div>
		</div>
	);
};