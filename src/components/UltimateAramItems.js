import React from "react";

export const UltimateAramItems = (props) => {
	return (
		<div className="ultimate-aram-item-card">
			<div className="ultimate-aram-item-img-container">
				<img src={props.img} alt="League Item"></img>
				<h3 className="glass">{props.itemGroup}</h3>
			</div>
			<h3 className="ultimate-aram-item-name">{props.itemName}</h3>
		</div>
	);
};
