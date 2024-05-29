import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const RankingsLayout = () => {
	const navigate = useNavigate();

	const handleNavigation = (event) => {
		const selectedPage = event.target.value;
		if (selectedPage) {
			navigate(selectedPage);
		}
	};
	return (
		<div className="wrapper">
			<h3 className="aram-rankings-title glass">
				<span className="retro-span">Retro </span>
				<span className="future-span">Future </span>
				<span className="aram-span">Aram </span>
				<span className="rankings-span">Rankings</span>
			</h3>

			<div className="filter-key-container glass">
				<div className="rankings-filter-flex">
					<h3>
						<span className="rankings-span">Rankings</span> Filter
						Key
					</h3>
					<div className="select-container">
						<select
							className="styled-select"
							onChange={handleNavigation}>
							<option value="season_1">Season 1</option>
							<option value="season_2">Season 2</option>
						</select>
					</div>
				</div>
				<p className="ascending-key">
					<span>Ascending</span> order(Lowest to Highest).
				</p>
				<p className="reverse-ascending-key">
					<span>Descending</span> order(Highest to Lowest).
				</p>
				<p className="reverse-ascending-key">
					1 click for <span>descending</span> order.
				</p>
				<p className="ascending-key">
					2 clicks for <span>ascending</span> order.
				</p>

				<p>Click the stat labels below to sort.</p>
			</div>

			<Outlet />
		</div>
	);
};
