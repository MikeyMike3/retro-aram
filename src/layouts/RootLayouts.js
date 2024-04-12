import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import gif from "../imgs/retro-future.gif";

export const RootLayouts = () => {
	return (
		<>
			<header className="glass">
				<div className="wrapper">
					<nav>
						<ul className="nav-flex">
							<li>
								<Link to="/">
									<img
										className="nav-gif"
										src={gif}
										alt="Description of the GIF"
									/>
								</Link>
							</li>
							<div className="nav-flex-2">
								<li>
									<NavLink to="/">Home</NavLink>
								</li>
								<li>
									<NavLink to="rankings">Rankings</NavLink>
								</li>
								<li>
									<NavLink to="tier-list">Tier List</NavLink>
								</li>
								<li>
									<NavLink to="team-maker">
										Team Maker
									</NavLink>
								</li>
							</div>
						</ul>
					</nav>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};
