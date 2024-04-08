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
								<NavLink to="/">
									<img
										className="nav-gif"
										src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExam43N2prZnRmMmN2cGY3ZW8yZnh2c2d6Z2FnbmpnYXB4bXRhYWcweiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b0HYKHINjL32qEsoJt/giphy.gif"
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
