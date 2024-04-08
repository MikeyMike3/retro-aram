import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { AramRanks } from "./pages/AramRanks";
import { RootLayouts } from "./layouts/RootLayouts";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayouts />}>
			<Route index element={<AramRanks />}></Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
