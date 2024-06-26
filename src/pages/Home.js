import React from "react";

export const Home = () => {
	return (
		<div className="wrapper">
			<h3 className="welcome glass">
				Welcome to the <span className="retro-span">Retro </span>
				<span className="future-span">Future </span>
				<span className="aram-span">Aram </span> website
			</h3>

			<div className="description-container glass">
				<p className="description">
					This website is for all things{" "}
					<span className="aram-span">Aram</span>. We have our own
					Ranked Leaderboard, Tier List, Team Maker and Ultimate{" "}
					<span className="aram-span">Aram</span> mode with more
					features to come. Stay tuned.
				</p>
			</div>
		</div>
	);
};
