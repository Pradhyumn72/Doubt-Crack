function toggleMenu() {
  var nav = document.getElementById("navLinks");
  if (nav) {
    nav.classList.toggle("show");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".nav-links a");
  var current = window.location.pathname.split("/").pop();
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current || (href && current === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});

