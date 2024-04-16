import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import gif from "../imgs/retro-future.gif";

export const RootLayouts = () => {
	const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	const mobileMenuOnClick = () => {
		setToggleMobileMenu((item) => !item);
		setIsExpanded((item) => !item);
	};

	useEffect(() => {
		console.log(toggleMobileMenu);
	}, [toggleMobileMenu]);

	let className = "primary-navigation";

	return (
		<>
			<header className="glass">
				<div className="wrapper">
					<div className=" primary-header">
						<Link to="/">
							<img
								className="nav-gif"
								src={gif}
								alt="Description of the GIF"
							/>
						</Link>
						<button
							onClick={mobileMenuOnClick}
							className="mobile-nav-toggle"
							aria-controls="primary-navigation"
							aria-expanded={isExpanded}
						>
							<span className="sr-only">Menu</span>
						</button>
						<nav>
							<ul
								id="primary-navigation"
								className={`${className} ${
									toggleMobileMenu ? "visible" : "hidden"
								}`}
							>
								<li>
									<NavLink to="/">Home</NavLink>
								</li>
								<li>
									<NavLink to="tier-list">Tier List</NavLink>
								</li>
								<li>
									<NavLink to="rankings">Rankings</NavLink>
								</li>
								<li>
									<NavLink to="team-maker">
										Team Maker
									</NavLink>
								</li>
								<li>
									<NavLink to="ultimate-aram">
										Ultimate Aram
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>

			<main>
				<video
					src="video/retro-aram-video-1.mp4"
					autoPlay
					loop
					muted
					id="bgVideo"
				></video>
				<Outlet />
			</main>
		</>
	);
};
