import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Form,
	Route,
	RouterProvider,
} from "react-router-dom";
import { AramRanks } from "./pages/AramRanks";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route index element={<AramRanks />}></Route>
		</Route>
	)
);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
