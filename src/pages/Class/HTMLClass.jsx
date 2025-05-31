import { Container, Row, Col } from "react-bootstrap";

export default function HTMLClass() {
	return (
		<div className="HtmlClass min-vh-100">
			<Container className="pt-5 px-5 rounded-3">
				<Row>
					<Col>
						<h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
							Basic HTML for Beginner
						</h1>
						<p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
							Kelas "Basic HTML for Beginner" dirancang khusus untuk pemula yang
							ingin memulai perjalanan mereka di dunia pengembangan web. Dalam
							kelas ini, peserta akan belajar dasar-dasar HTML (HyperText Markup
							Language), bahasa utama yang digunakan untuk membangun struktur
							halaman web.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 className="fw-bold text-justify mt-5">💡 Apa Itu HTML?</h2>
						<p>
							HTML (HyperText Markup Language) adalah bahasa standar yang
							digunakan untuk membuat dan menyusun halaman web. HTML menyusun
							konten dengan menandai (marking up) bagian-bagian seperti teks,
							gambar, dan tautan.
						</p>
					</Col>
					<Col>
						<h2 className="fw-bold text-justify mt-5">
							🏠 HTML Itu Seperti Kerangka Rumah
						</h2>
						<p className="text-justify">
							Bayangkan kamu ingin membangun sebuah rumah. HTML itu seperti
							kerangka dasar rumah—struktur yang membuat rumah berdiri, tapi
							belum dicat atau didekorasi. Begitu juga HTML, dia menyusun
							struktur dasar halaman web, tapi belum punya gaya atau perilaku.
						</p>
					</Col>
				</Row>
				<Row className="justify-content-center mt-4">
					<Col md={10}>
						<h3 className="text-center fw-bold mb-4">
							🔧 Elemen-Elemen HTML = Bagian Rumah
						</h3>
						<table className="table table-bordered text-center shadow-sm">
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
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 className="fw-bold text-justify mt-5">
							📦 Struktur Dasar HTML
						</h2>
						<pre className="bg-dark p-3 rounded">
							<code className="text-light">
								&lt;!DOCTYPE html&gt;{"\n"}
								&lt;html&gt;{"\n"}
								&nbsp;&nbsp;&lt;head&gt;{"\n"}
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Judul Halaman&lt;/title&gt;
								{"\n"}
								&nbsp;&nbsp;&lt;/head&gt;{"\n"}
								&nbsp;&nbsp;&lt;body&gt;{"\n"}
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Halo, Dunia!&lt;/h1&gt;{"\n"}
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Ini adalah paragraf pertama
								saya.&lt;/p&gt;{"\n"}
								&nbsp;&nbsp;&lt;/body&gt;{"\n"}
								&lt;/html&gt;
							</code>
						</pre>
						<h3>Penjelasan:</h3>
						<ul>
							<li>
								<span>&lt;!DOCTYPE html&gt;</span> → Memberitahu browser bahwa
								ini adalah dokumen HTML5.
							</li>
							<li>
								<span>&lt;html&gt;</span> → Elemen root (induk) dari halaman
								HTML.
							</li>
							<li>
								<span>&lt;head&gt;</span> → Bagian untuk informasi meta (judul,
								link CSS, charset, dll).
							</li>
							<li>
								<span>&lt;title&gt;</span> → Judul halaman yang muncul di tab
								browser.
							</li>
							<li>
								<span>&lt;body&gt;</span> → Bagian utama yang terlihat oleh
								pengguna.
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
