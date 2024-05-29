import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const TierListLayout = () => {
	const navigate = useNavigate();

	const handleNavigation = (event) => {
		const selectedPage = event.target.value;
		if (selectedPage) {
			navigate(selectedPage);
		}
	};
	return (
		<div className="wrapper">
			<h3 className="tier-list-title glass">
				<span className="retro-span">Retro </span>
				<span className="future-span">Future </span>
				Tier List
			</h3>
			<div className="select-container">
				<select className="styled-select" onChange={handleNavigation}>
					<option value="season_1">Season 1</option>
					<option value="season_2">Season 2</option>
				</select>
			</div>
			<Outlet />
		</div>
	);
};
