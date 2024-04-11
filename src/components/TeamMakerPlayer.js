import React from "react";

export const TeamMakerPlayer = (props) => {
	return (
		<div>
			<img src={props.img} alt="profile pic"></img>
			<h1>({props.rank})</h1>
			<h1>{props.name}</h1>
		</div>
	);
};
