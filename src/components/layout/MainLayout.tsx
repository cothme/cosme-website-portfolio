import { Outlet } from "react-router-dom";
import { Navbar } from "./wrappers/Navbar";
import { Footer } from "./wrappers/Footer";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
