import React from "react";

const sTier = [
	{
		name: "Plexo",
		img: "",
	},
	{
		name: "Siren",
		img: "",
	},
	{
		name: "Ethiks",
		img: "",
	},
	{
		name: "Loli",
		img: "",
	},
];

const aTier = [
	{
		name: "Shady",
		img: "",
	},
];

const bTier = [
	{
		name: "Fries",
		img: "",
	},
	{
		name: "You",
		img: "",
	},
	{
		name: "Amp",
		img: "",
	},
];

const cTier = [
	{
		name: "Ronin",
		img: "",
	},
	{
		name: "Drango",
		img: "",
	},
	{
		name: "Argo",
		img: "",
	},
];

const dTier = [
	{
		name: "Money",
		img: "",
	},
	{
		name: "Tyler",
		img: "",
	},
];

const fTier = [
	{
		name: "Sarah",
		img: "",
	},
];

export const TierList = () => {
	return (
		<div className="wrapper">
			<div className="grid-container">
				<div className="grid-item">Column 1 (400px)</div>
				<div className="grid-item column-two-grid">
					<div className="grid-item a">Column 2.1</div>
					<div className="grid-item a">Column 2.2</div>
					<div className="grid-item a">Column 2.3</div>
					<div className="grid-item a">Column 2.4</div>
				</div>
			</div>
		</div>
	);
};
