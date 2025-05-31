import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratPage from "./pages/SyaratPage";
import FaqPage from "./pages/FaqPage";
import HTMLClass from "./pages/Class/HTMLClass";
import CSSClass from "./pages/Class/CSSClass";
import FigmaClass from "./pages/Class/FigmaClass";
import FigmaWClass from "./pages/Class/FigmaWClass";
import IOTClass from "./pages/Class/IOTClass";
import JSClass from "./pages/Class/JSClass";
import OfficeClass from "./pages/Class/OfficeClass";
import ReactClass from "./pages/Class/ReactClass";
import RouterClass from "./pages/Class/RouterClass";

export default function App() {
	return (
		<div>
			<NavbarComponent />

			<Routes>
				<Route path="/" Component={HomePage} />
				<Route path="/class" Component={ClassPage} />
				<Route path="/testi" Component={TestimonialPage} />
				<Route path="/syarat" Component={SyaratPage} />
				<Route path="/faq" Component={FaqPage} />
				<Route path="/class/html" Component={HTMLClass} />
				<Route path="/class/css" Component={CSSClass} />
				<Route path="/class/figma" Component={FigmaClass} />
				<Route path="/class/figma-w" Component={FigmaWClass} />
				<Route path="/class/iot" Component={IOTClass} />
				<Route path="/class/js" Component={JSClass} />
				<Route path="/class/office" Component={OfficeClass} />
				<Route path="/class/react" Component={ReactClass} />
				<Route path="/class/router" Component={RouterClass} />
			</Routes>

			<FooterComponent />
		</div>
	);
}
