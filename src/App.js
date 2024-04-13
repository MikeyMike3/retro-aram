import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import { AramRanks } from "./pages/AramRanks";
import { RootLayouts } from "./layouts/RootLayouts";
import { Home } from "./pages/Home";
import { TierList } from "./pages/TierList";
import { TeamMaker } from "./pages/TeamMaker";
import { UltimateAram } from "./pages/UltimateAram";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayouts />}>
			<Route index element={<Home />}></Route>
			<Route path="rankings" element={<AramRanks />}></Route>
			<Route path="tier-list" element={<TierList />}></Route>
			<Route path="team-maker" element={<TeamMaker />}></Route>
			<Route path="ultimate-aram" element={<UltimateAram />}></Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
