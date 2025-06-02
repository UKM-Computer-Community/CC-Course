import { Container, Row, Col } from "react-bootstrap";

export default function HTMLClass() {
	return (
		<div className="allClass min-vh-100">
			<Container className="rounded-4 hadow p-4">
				<Row className="mb-4">
					<Col>
						<h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
							Basic HTML for Beginner
						</h1>
						<p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
							Kelas ini dirancang untuk pemula yang ingin memulai perjalanan
							mereka di dunia pengembangan web dengan mempelajari dasar-dasar
							HTML (HyperText Markup Language).
						</p>
					</Col>
				</Row>

				{/* Penjelasan Umum */}
				<Row className="mb-5">
					<Col md={6}>
						<h2 className="fw-bold mb-2">💡 Apa Itu HTML?</h2>
						<p>
							HTML (HyperText Markup Language) adalah bahasa standar untuk
							membuat dan menyusun halaman web. HTML menandai konten seperti
							teks, gambar, dan tautan untuk membentuk struktur halaman.
						</p>
					</Col>
					<Col md={6}>
						<h2 className="fw-bold mb-2">🏠 HTML = Kerangka Rumah</h2>
						<p>
							Bayangkan HTML seperti kerangka dasar rumah. Ia menyusun bagian
							dasar dari halaman web sebelum ditambahkan gaya atau
							fungsionalitas lainnya, seperti cat dan perabot.
						</p>
					</Col>
				</Row>

				{/* Tabel Analogi */}
				<Row className="mb-5">
					<Col>
						<h3 className="text-center fw-bold">
							🔧 Elemen-Elemen HTML = Bagian Rumah
						</h3>
						<div className="table-responsive">
							<table className="table text-center shadow-sm align-middle">
								<thead>
									<tr>
										<th>Elemen HTML</th>
										<th>Analogi Rumah</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>&lt;html&gt;</td>
										<td>Pondasi rumah (semua ada di dalamnya)</td>
									</tr>
									<tr>
										<td>&lt;head&gt;</td>
										<td>Gudang informasi rumah (tidak terlihat langsung)</td>
									</tr>
									<tr>
										<td>&lt;title&gt;</td>
										<td>Nama rumah di papan depan</td>
									</tr>
									<tr>
										<td>&lt;body&gt;</td>
										<td>Ruangan dalam rumah (yang bisa dilihat tamu)</td>
									</tr>
									<tr>
										<td>&lt;h1&gt; – &lt;h6&gt;</td>
										<td>Judul di dinding (besar ke kecil)</td>
									</tr>
									<tr>
										<td>&lt;p&gt;</td>
										<td>Paragraf tulisan di poster rumah</td>
									</tr>
									<tr>
										<td>&lt;a&gt;</td>
										<td>Pintu atau jalan ke rumah lain</td>
									</tr>
									<tr>
										<td>&lt;img&gt;</td>
										<td>Foto yang digantung di dinding</td>
									</tr>
									<tr>
										<td>&lt;div&gt;</td>
										<td>Sekat ruang, membagi ruangan</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Col>
				</Row>

				{/* Struktur Dasar HTML */}
				<Row className="mb-5">
					<Col lg={6}>
						{/* Struktur Dasar HTML */}
						<h2 className="fw-bold mb-3">📦 Struktur Dasar HTML</h2>
						<pre className="bg-dark text-light p-3 rounded overflow-auto">
							<code>
								&lt;<span className="text-info">!DOCTYPE</span>{" "}
								<span className="text-warning">html</span>&gt;{"\n"}
								&lt;<span className="text-primary">html</span>&gt;{"\n"}
								&nbsp;&nbsp;&lt;<span className="text-primary">head</span>&gt;
								{"\n"}
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								<span className="text-primary">title</span>&gt;
								<span className="text-success">Judul Halaman</span>
								&lt;/<span className="text-danger">title</span>&gt;{"\n"}
								&nbsp;&nbsp;&lt;/<span className="text-danger">head</span>&gt;
								{"\n"}
								&nbsp;&nbsp;&lt;<span className="text-primary">body</span>&gt;
								{"\n"}
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								<span className="text-primary">h1</span>&gt;
								<span className="text-success">Halo, Dunia!</span>
								&lt;/<span className="text-danger">h1</span>&gt;{"\n"}
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								<span className="text-primary">p</span>
								&gt;
								<span className="text-success">
									Ini adalah paragraf pertama saya.
								</span>
								&lt;/<span className="text-danger">p</span>&gt;{"\n"}
								&nbsp;&nbsp;&lt;/<span className="text-danger">body</span>&gt;
								{"\n"}
								&lt;/<span className="text-danger">html</span>&gt;
							</code>
						</pre>
					</Col>
					<Col lg={6}>
						{/* Penjelasan Struktur */}
						<h3 className="mt-lg-5">Penjelasan:</h3>
						<ul className="text-muted">
							<li>
								<span className="text-primary">&lt;Tag Pembuka&gt;</span> &amp;{" "}
								<span className="text-danger">&lt;/Tag Penutup&gt;</span>
							</li>
							<li>&lt;!DOCTYPE html&gt; → Deklarasi HTML5</li>
							<li>&lt;html&gt; → Elemen root halaman</li>
							<li>&lt;head&gt; → Metadata halaman</li>
							<li>&lt;title&gt; → Judul tab browser</li>
							<li>&lt;body&gt; → Konten yang ditampilkan</li>
						</ul>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col className="border">
						<h2 className="fw-bold mb-3">📚 Tips Belajar HTML untuk Pemula</h2>
						<ol className="text-justify">
							<li>
								Latihan dengan kode langsung: Gunakan platform seperti{" "}
								<a className="a" href="https://codepen.io/" target="_blank">
									CodePen
								</a>
								,{" "}
								<a className="a" href="https://jsfiddle.net/" target="_blank">
									JSFiddle
								</a>
								, atau editor lokal seperti Visual Studio Code.
							</li>
							<li>
								Coba dan lihat hasilnya: Setelah menulis tag HTML, buka file
								.html di browser dan lihat hasilnya.
							</li>
							<li>
								Gunakan komentar untuk memberi catatan: <br />
								<pre className="bg-dark text-white p-2 mb-0 rounded d-inline-block">
									&lt;!-- Ini adalah komentar --&gt;
								</pre>
							</li>
							<li>
								Ikuti urutan penulisan struktur yang benar agar browser tidak
								bingung membaca halamanmu.
							</li>
						</ol>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col>
						<h2 className="fw-bold mb-3">
							🛠 Alat yang Dibutuhkan untuk Belajar HTML
						</h2>
						<p>
							Untuk mulai menulis dan menjalankan kode HTML, kamu hanya butuh:
						</p>

						<ol>
							<li className="fw-bold">Teks Editor</li>
							Gunakan aplikasi seperti:
							<ul>
								<li>
									<a href="#">Notepad</a> (sederhana, bawaan Windows)
								</li>
								<li>
									<a
										href="https://code.visualstudio.com/download"
										target="_blank"
										rel="noopener noreferrer"
									>
										Visual Studio Code
									</a>{" "}
									(VS Code) (gratis, lengkap, dan sangat populer)
								</li>
								<li>
									<a
										href="https://www.sublimetext.com/download"
										target="_blank"
										rel="noopener noreferrer"
									>
										Sublime Text
									</a>{" "}
									atau{" "}
									<a
										href="https://atom-editor.cc/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Atom
									</a>
								</li>
							</ul>
							<li className="fw-bold">Browser</li>
							Browser seperti Chrome, Firefox, Edge, atau Safari digunakan untuk
							melihat hasil dari kode HTML yang kamu tulis.
							<li className="fw-bold">Koneksi Internet (Opsional)</li>
							Membantu untuk mencari dokumentasi atau tutorial tambahan, tapi
							tidak wajib jika kamu hanya ingin latihan dasar secara offline.
						</ol>
					</Col>
					<a
						className="text-center"
						href="https://codepen.io/ameliaakhila/pen/jEPrVrp"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="rounded btn btn-outline-cc px-lg-2">
							Let's Code!
						</button>
					</a>
				</Row>
			</Container>
		</div>
	);
}
