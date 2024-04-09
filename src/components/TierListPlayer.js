import React from "react";

export const TierListPlayer = (props) => {
	return (
		<div className="tier-list-grid-item">
			<div className="tier-list-img-container">
				<img src={props.img} alt="player tier list pic"></img>
				<p className="tier-list-player-name glass">{props.name}</p>
			</div>
		</div>
	);
};
