import React from "react";

export const UltimateAramItems = (props) => {
	return (
		<div>
			<h3>{props.itemName}</h3>
			<h3>{props.itemGroup}</h3>
			<img src={props.img} alt="League Item"></img>
		</div>
	);
};
