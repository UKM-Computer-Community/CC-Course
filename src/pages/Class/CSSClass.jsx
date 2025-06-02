import { Container, Row, Col } from "react-bootstrap";

export default function CSSClass() {
	return (
		<div className="allClass min-vh-100">
			<Container className="rounded-4 shadow p-4">
				<Row className="mb-4">
					<Col>
						<h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
							Basic CSS for Beginner
						</h1>
						<p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
							Kelas ini dirancang untuk pemula yang ingin memulai perjalanan
							mereka di dunia pengembangan web dengan mempelajari dasar-dasar
							CSS (Cascading Style Sheets).
						</p>
					</Col>
				</Row>

				{/* Penjelasan Umum */}
				<Row className="mb-5">
					<Col md={6}>
						<h2 className="fw-bold mb-2">💡 Apa Itu CSS?</h2>
						<p>
							CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk
							mendesain dan mengatur tampilan halaman web. CSS memungkinkan kamu
							untuk mengubah warna, font, layout, dan banyak aspek visual
							lainnya dari elemen HTML.
						</p>
					</Col>
					<Col md={6}>
						<h2 className="fw-bold mb-2">🎨 CSS = Gaya Rumah</h2>
						<p>
							Bayangkan CSS seperti cat dan dekorasi rumah. Ia memberikan gaya
							dan keindahan pada struktur dasar yang telah dibuat oleh HTML,
							seperti warna dinding, jenis furnitur, dan penataan ruangan.
						</p>
					</Col>
				</Row>

				{/* Tabel Analogi */}
				<Row className="mb-5">
					<Col>
						<h3 className="text-center fw-bold">
							🔧 Elemen-Elemen CSS = Gaya Rumah
						</h3>
						<div className="table-responsive">
							<table className="table text-center shadow-sm align-middle">
								<thead>
									<tr>
										<th>Elemen CSS</th>
										<th>Analogi Rumah</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Selector</td>
										<td>Alamat rumah (menentukan elemen yang akan diubah)</td>
									</tr>
									<tr>
										<td>Property</td>
										<td>Jenis cat (warna, ukuran, jenis font)</td>
									</tr>
									<tr>
										<td>Value</td>
										<td>Warna cat (merah, biru, hijau)</td>
									</tr>
									<tr>
										<td>Class</td>
										<td>Jenis ruangan (ruang tamu, kamar tidur)</td>
									</tr>
									<tr>
										<td>ID</td>
										<td>Nama unik untuk setiap ruangan</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Col>
				</Row>

				{/* Struktur Dasar CSS */}
				<Row className="mb-5">
					<Col lg={6}>
						{/* Struktur Dasar CSS */}
						<h2 className="fw-bold mb-3">📦 Struktur Dasar CSS</h2>
						<pre className="bg-dark text-light p-3 rounded overflow-auto">
							<code>
								<span className="text-primary">body</span> &#123;{"\n"}
								&nbsp;&nbsp;color: <span className="text-success">blue</span>
								;&#10; &nbsp;&nbsp;background-color:{" "}
								<span className="text-success">lightgray</span>;&#10; &#125;
								{"\n"}
								<span className="text-primary">h1</span> &#123;{"\n"}
								&nbsp;&nbsp;font-size: <span className="text-success">2em</span>
								;&#10; &nbsp;&nbsp;color:{" "}
								<span className="text-success">darkblue</span>;&#10; &#125;
							</code>
						</pre>
					</Col>
					<Col lg={6}>
						{/* Penjelasan Struktur */}
						<h3 className="mt-lg-5">Penjelasan:</h3>
						<ul className="text-muted">
							<li>
								<span className="text-primary">Selector</span> → Menentukan
								elemen yang akan diubah
							</li>
							<li>
								<span className="text-primary">Property</span> → Aspek yang
								ingin diubah (misal: color, background-color)
							</li>
							<li>
								<span className="text-primary">Value</span> → Nilai dari
								property (misal: red, 20px)
							</li>
						</ul>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col className="border">
						<h2 className="fw-bold mb-3">
							📚 Strategi Belajar CSS yang Efektif
						</h2>
						<ol className="text-justify">
							<li>
								<strong>Pelajari dari Proyek Nyata:</strong> Cobalah untuk
								membuat proyek kecil seperti halaman profil atau portofolio. Ini
								akan membantu kamu menerapkan apa yang telah dipelajari.
							</li>
							<li>
								<strong>Ikuti Tutorial Video:</strong> Banyak platform seperti
								YouTube, Udemy, dan Coursera menawarkan tutorial video yang
								dapat membantumu memahami konsep CSS dengan lebih baik.
							</li>
							<li>
								<strong>Bergabung dengan Komunitas:</strong> Bergabunglah dengan
								forum atau grup belajar seperti Stack Overflow atau Discord
								untuk bertanya dan berbagi pengalaman dengan sesama pembelajar.
							</li>
							<li>
								<strong>Praktikkan Responsif Design:</strong> Pelajari cara
								membuat desain yang responsif agar tampilan website kamu baik di
								perangkat mobile maupun desktop.
							</li>
						</ol>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col>
						<h2 className="fw-bold mb-3">
							🛠 Sumber Daya Belajar CSS yang Berguna
						</h2>
						<p>
							Untuk memperdalam pemahaman tentang CSS, berikut adalah beberapa
							sumber daya yang bisa kamu gunakan:
						</p>
						<ul>
							<li>
								<a
									href="https://www.w3schools.com/css/"
									target="_blank"
									rel="noopener noreferrer"
								>
									W3Schools CSS Tutorial
								</a>{" "}
								- Sumber yang sangat baik untuk belajar dasar-dasar CSS dengan
								contoh langsung.
							</li>
							<li>
								<a
									href="https://css-tricks.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									CSS-Tricks
								</a>{" "}
								- Blog yang menawarkan berbagai artikel, tutorial, dan tips
								tentang CSS.
							</li>
							<li>
								<a
									href="https://developer.mozilla.org/en-US/docs/Web/CSS"
									target="_blank"
									rel="noopener noreferrer"
								>
									MDN Web Docs
								</a>{" "}
								- Dokumentasi resmi dari Mozilla yang sangat lengkap dan
								mendetail tentang CSS.
							</li>
							<li>
								<a
									href="https://www.freecodecamp.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									FreeCodeCamp
								</a>{" "}
								- Platform belajar interaktif yang menawarkan kursus CSS dan
								proyek praktis.
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
