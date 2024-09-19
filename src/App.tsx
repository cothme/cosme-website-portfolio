import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { Hero } from "./components/intro/Hero";

function App() {
	useEffect(() => {
		document.title = "Dencel Cosme";
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
							element={<Hero />}
						></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
