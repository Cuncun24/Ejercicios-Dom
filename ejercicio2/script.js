const enlaces = document.getElementsByTagName("a");
if (enlaces.length > 0) {
  enlaces[0].href = "https://www.google.com";
  enlaces[0].textContent = "Ir a Google";
}
const titulo = document.querySelector(".titulo");
titulo.textContent = "Título Modificado";
document.body.style.backgroundColor = "#f0e68c";