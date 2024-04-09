import React from "react";

export const Home = () => {
	return (
		<div className="wrapper">
			<h1 className="welcome glass">
				Welcome to the <span className="retro-span">Retro </span>
				<span className="future-span">Future </span>
				<span className="aram-span">Aram </span> website
			</h1>

			<div className="description-container glass">
				<p className="description">
					This website is for all things{" "}
					<span className="aram-span">Aram</span>. We got our own
					ranked leaderboard and tier list with more features to come.
					Stay tuned.
				</p>
			</div>
		</div>
	);
};
