// Data contoh untuk halaman detail. Silakan ubah tanggal/lokasi sesuai kebutuhan tugas.
const events = {
  seminar: {
    title: "Seminar Teknologi Masa Depan", category: "Seminar", image: "img/seminar.svg",
    intro: "Mengenal perkembangan teknologi dan peluang karier digital.",
    description: "Kegiatan ini dirancang untuk memberikan wawasan baru kepada peserta mengenai perkembangan teknologi, perubahan dunia kerja, serta keterampilan yang dibutuhkan pada era digital. Peserta dapat mengikuti pemaparan materi dan sesi diskusi bersama.",
    date: "20 Desember 2026", location: "Jakarta", organizer: "EventKita Community", price: "Gratis"
  },
  webdesign: {
    title: "Workshop Web Design", category: "Workshop", image: "img/webdesign.svg",
    intro: "Belajar membuat tampilan website yang menarik dan responsif.",
    description: "Workshop ini mengenalkan dasar perancangan antarmuka website, mulai dari menyusun layout, memilih warna, menggunakan tipografi, hingga memahami prinsip desain responsif. Peserta akan mencoba membuat rancangan halaman sederhana.",
    date: "22 Desember 2026", location: "Bekasi", organizer: "EventKita Learning", price: "Rp50.000"
  },
  coding: {
    title: "Lomba Coding Kreatif", category: "Kompetisi", image: "img/coding.svg",
    intro: "Uji kemampuan pemrograman dan tunjukkan ide terbaikmu.",
    description: "Kompetisi ini menjadi wadah bagi peserta untuk mengembangkan ide dan menyelesaikan tantangan pemrograman. Peserta dapat bekerja secara individu atau tim sesuai ketentuan panitia.",
    date: "10 Januari 2027", location: "Online", organizer: "Digital Youth", price: "Gratis"
  },
  sosial: {
    title: "Bakti Sosial Bersama", category: "Sosial", image: "img/social.svg",
    intro: "Berbagi kepedulian dan memberikan manfaat bagi masyarakat.",
    description: "Kegiatan sosial ini mengajak peserta untuk terlibat dalam aktivitas berbagi dan membantu lingkungan sekitar. Agenda dapat meliputi pengumpulan donasi, pembagian kebutuhan pokok, dan kerja bakti.",
    date: "17 Januari 2027", location: "Bekasi", organizer: "Komunitas Peduli", price: "Sukarela"
  },
  leadership: {
    title: "Pelatihan Kepemimpinan", category: "Pelatihan", image: "img/leadership.svg",
    intro: "Mengembangkan komunikasi, kerja sama, dan jiwa kepemimpinan.",
    description: "Pelatihan ini membahas keterampilan dasar kepemimpinan, komunikasi efektif, pengambilan keputusan, dan kolaborasi. Peserta juga akan mengikuti latihan kelompok untuk menerapkan materi.",
    date: "24 Januari 2027", location: "Jakarta", organizer: "EventKita Learning", price: "Rp75.000"
  },
  study: {
    title: "Study Tour Industri", category: "Kunjungan", image: "img/study-tour.svg",
    intro: "Melihat langsung proses kerja dan lingkungan industri.",
    description: "Kunjungan industri memberikan kesempatan bagi peserta untuk mengenal proses operasional perusahaan, budaya kerja, dan penerapan teknologi di dunia industri. Kegiatan diisi dengan pengenalan perusahaan dan sesi tanya jawab.",
    date: "31 Januari 2027", location: "Bandung", organizer: "EventKita Campus", price: "Rp100.000"
  }
};

const params = new URLSearchParams(window.location.search);
const selected = events[params.get("id")] || events.seminar;
const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

setText("event-title", selected.title);
setText("event-category", selected.category);
setText("event-intro", selected.intro);
setText("event-description", selected.description);
setText("event-date", selected.date);
setText("event-location", selected.location);
setText("event-organizer", selected.organizer);
setText("event-price", selected.price);

const eventImage = document.getElementById("event-image");
if (eventImage) {
  eventImage.src = selected.image;
  eventImage.alt = "Ilustrasi " + selected.title;
}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}
