import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	Navigate,
} from "react-router-dom";

import { RootLayouts } from "./layouts/RootLayouts";
import { Home } from "./pages/Home";
import { TeamMaker } from "./pages/TeamMaker";
import { UltimateAram } from "./pages/UltimateAram";
import { RankingsLayout } from "./layouts/RankingsLayout";
import { Season1 } from "./pages/seasonRankings/season1";
import { Season2 } from "./pages/seasonRankings/season2";
import { Season1Tier } from "./pages/seasonTierList/Season1Tier";
import { Season2Tier } from "./pages/seasonTierList/Season2Tier";
import { TierListLayout } from "./layouts/TierListLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayouts />}>
			<Route index element={<Home />}></Route>
			{/* <Route path="tier-list" element={<TierList />}></Route> */}
			<Route path="tier-list" element={<TierListLayout />}>
				<Route index element={<Navigate to="season_1" replace />} />
				<Route path="season_1" element={<Season1Tier />}></Route>
				<Route path="season_2" element={<Season2Tier />}></Route>
			</Route>

			<Route path="rankings" element={<RankingsLayout />}>
				<Route index element={<Navigate to="season_1" replace />} />
				<Route path="season_1" element={<Season1 />}></Route>
				<Route path="season_2" element={<Season2 />}></Route>
			</Route>
			<Route path="team-maker" element={<TeamMaker />}></Route>
			<Route path="ultimate-aram" element={<UltimateAram />}></Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
