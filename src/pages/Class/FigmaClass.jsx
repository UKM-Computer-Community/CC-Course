import { Container, Row, Col } from "react-bootstrap";

export default function FigmaClass() {
	return (
		<div className="allClass min-vh-100">
			<Container className="pt-5 px-5 rounded-3">
				<Row>
					<Col>
						<h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
							Waiting List Learn Editing With Figma for Beginner
						</h1>
						<p className="text-center fs-1 fw-bolder mt-5 text-danger animate__animated animate__fadeInUp animate__delay-1s">
							Coming Soon... <br />
							Materi ini akan di up <br />
							Sesuai Mood Yang Mulia Ratu 😌
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
