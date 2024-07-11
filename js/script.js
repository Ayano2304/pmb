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