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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayouts />}>
			<Route index element={<Home />}></Route>
			<Route path="rankings" element={<AramRanks />}></Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
