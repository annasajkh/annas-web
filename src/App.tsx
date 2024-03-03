import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Something from "./pages/Something";

export default function App() {
	return (
		<>
			<HashRouter>
				<Navbar />
				
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/something" element={<Something />} />
				</Routes>
			</HashRouter>
		</>
	);
}
