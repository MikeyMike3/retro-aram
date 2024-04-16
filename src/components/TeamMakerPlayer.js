import React from "react";

export const TeamMakerPlayer = (props) => {
	return (
		<div className="team-maker-player-flex">
			<div className="team-maker-player-img-container hide-img">
				<img
					className="hide-img"
					src={props.img}
					alt="profile pic"
				></img>
			</div>
			<h1 className="team-maker-player-rank">({props.rank})</h1>
			<h1>{props.name}</h1>
		</div>
	);
};
