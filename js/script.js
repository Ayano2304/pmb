function activateLink(element) {
  // Menghapus kelas 'active' dari semua link
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.remove("active");
  });

  // Menambahkan kelas 'active' ke link yang diklik
  element.classList.add("active");

  // Menutup navbar jika dalam mode collapse (untuk layar kecil)
  if ($(".navbar-toggler").is(":visible")) {
    $(".navbar-collapse").collapse("hide");
  }
}

const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    // Adjust the value as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const spinner = document.getElementById("spinner");
  const mapIframe = document.getElementById("mapIframe");

  // Tampilkan spinner saat halaman sedang dimuat
  spinner.classList.remove("hidden");

  // Sembunyikan spinner setelah iframe dimuat
  mapIframe.onload = function () {
    spinner.classList.add("hidden");
  };
});

function kirimPesanWhatsApp() {
  const nama = document.getElementById("nama").value;
  const usia = document.getElementById("usia").value;
  const layanan = document.getElementById("layanan").value;
  const tanggal = document.getElementById("tanggal").value;

  const pesan = `Nama Lengkap: ${nama}%0AUmur: ${usia}%0AJenis Layanan: ${layanan}%0ATanggal: ${tanggal}`;
  console.log(pesan);
  const url = `https://wa.me/6287803441999?text=${pesan}`;

  window.open(url, "_blank");
}