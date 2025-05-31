import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../public/Logo VIT S.png";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
export default function NavbarComponent() {
	const [changeColor, setChangeColor] = useState(false);
	const changeBgColor = () => {
		if (window.scrollY > 10) {
			setChangeColor(true);
		} else {
			setChangeColor(false);
		}
	};
	useEffect(() => {
		changeBgColor();
		window.addEventListener("scroll", changeBgColor);
	});
	return (
		<Navbar expand="lg" className={changeColor ? "color-active" : ""}>
			<Container>
				<Navbar.Brand href="#home" className="fs-3 fw-bold">
					CC Course.
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto text-center">
						{navLinks.map((link) => {
							return (
								<div className="nav-link" key={link.id}>
									<NavLink
										to={link.path}
										className={({ isActive, isPending }) =>
											isPending ? "pending" : isActive ? "active" : ""
										}
										end
									>
										{link.text}
									</NavLink>
								</div>
							);
						})}
					</Nav>
					<div className="text-center">
						<a href="https://hasil-lomba-website-fit-2025.vercel.app/" target="_blank">
							<button className="btn btn-outline-cc rounded-1">
								<img src={Logo} alt=""/>
							</button>
						</a>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
