import React from "react";
import { TierListPlayer } from "../../components/TierListPlayer";
import { season_2Ranks } from "../seasonRankings/season2";
import { tierListMaker } from "../../functions/tierListMaker";

const { sTier, aTier, bTier, cTier, dTier, fTier } =
	tierListMaker(season_2Ranks);

export { sTier, aTier, bTier, cTier, dTier, fTier };

export const Season2Tier = () => {
	return (
		<div className="tier-list-grid-container ">
			<div className="letter-rank-tier rank-tier-list-top glass">S</div>
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
	);
};
