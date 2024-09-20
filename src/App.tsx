import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { Hero } from "./components/Hero";
import MainBody from "./components/MainBody";

function App() {
	useEffect(() => {
		document.title = "Dencel Cosme | Developer";
	}, []);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<MainLayout />}
					>
						{/* Add Routes Here */}
						<Route
							path="/"
							element={<MainBody />}
						></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
