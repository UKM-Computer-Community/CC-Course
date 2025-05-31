import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function FooterComponent() {
	return (
		<div className="footer py-5">
			<Container>
				<Row className="d-flex justify-content-between">
					<Col lg="5">
						<h3 className="fw-bold">CC Course.</h3>
						<p className="desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
							iure inventore quis quasi harum quo, ipsa accusantium blanditiis
							dolorum atque!
						</p>
						<div className="no mb-1 mt-4">
							<Link className="text-decoration-none">
								<i className="fa-brands fa-whatsapp"></i>
								<p className="m-0">+62 882-9137-5357</p>
							</Link>
						</div>
						<div className="email">
							<Link className="text-decoration-none">
								<i className="fa-regular fa-envelope"></i>
								<p className="m-0">ccunbaja2010@gmail.com</p>
							</Link>
						</div>
					</Col>
					<Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
						<h5 className="fw-bold">Menu</h5>
						<Link to="">Home</Link>
						<Link to="class">Class</Link>
						<Link to="testi">Testimonial</Link>
						<Link to="faq">FAQ</Link>
						<Link to="syarat">Syarat & Ketentuan</Link>
					</Col>
					<Col lg="4" className="mt-lg-0 mt-5">
						<h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
						<div className="subscribe">
							<input type="text" placeholder="Subscribe..." />
							<button className="btn btn-danger rounded-end rounded-0">
								Subscribe
							</button>
						</div>
						<div className="social mt-3">
							<i className="fa-brands fa-github"></i>
							<i className="fa-brands fa-linkedin"></i>
							<i className="fa-brands fa-instagram"></i>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className="text-center px-md-0 px-3">
							&copy; Copyright {new Date().getFullYear()} by{" "}
							<span className="fw-bold">annezetya</span>, All Right Reserve
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
