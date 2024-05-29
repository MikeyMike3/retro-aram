import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const RankingsLayout = () => {
  return (
    <div className="wrapper">
			<h3 className="aram-rankings-title glass">
				<span className="retro-span">Retro </span>
				<span className="future-span">Future </span>
				<span className="aram-span">Aram </span>
				<span className="rankings-span">Rankings</span>
			</h3>

			<div className="filter-key-container glass">
				<h3>
					<span className="rankings-span">Rankings</span> Filter Key
				</h3>
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

        {/* <NavLink to="season_1">Season 1</NavLink> */}
        <select>
          <option><Link to="season_1">Season 1</Link></option>
          <option><Link to="season_2">Season 2</Link></option>
        </select>
				<p>Click the stat labels below to sort.</p>
			</div>

      <Outlet />
    </div>
  )
}
