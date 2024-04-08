import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const RootLayouts = () => {
	return (
		<>
			<header className="glass">
				<div className="wrapper">
					<nav>
						<ul className="nav-flex">
							<li>
								<NavLink>
									<img
										className="nav-gif"
										src="https://i.gifer.com/1kt1.gif"
										alt="Description of the GIF"
									/>
								</NavLink>
							</li>
							<div className="nav-flex-2">
								<li>
									<NavLink>Home</NavLink>
								</li>
								<li>
									<NavLink>Rankings</NavLink>
								</li>
								<li>
									<NavLink>Tier List</NavLink>
								</li>
								<li>
									<NavLink>Ultimate ARAM</NavLink>
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
