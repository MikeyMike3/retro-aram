import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import gif from "../imgs/palm-tree.gif";

export const RootLayouts = () => {
	return (
		<>
			<header className="glass">
				<div className="wrapper">
					<nav>
						<ul className="nav-flex">
							<li>
								<NavLink to="/">
									<img
										className="nav-gif"
										src={gif}
										alt="Description of the GIF"
									/>
								</NavLink>
							</li>
							<div className="nav-flex-2">
								<li>
									<NavLink to="/">Home</NavLink>
								</li>
								<li>
									<NavLink to="rankings">Rankings</NavLink>
								</li>
								{/* <li>
									<NavLink>Tier List</NavLink>
								</li>
								<li>
									<NavLink>Ultimate ARAM</NavLink>
								</li> */}
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
