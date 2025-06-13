function mostrarAlerta() {
  alert("¡Botón clickeado!");
}
const botonClick = document.getElementById("clickMe");
const botonRemove = document.getElementById("removeEvent");
botonClick.addEventListener("click", mostrarAlerta);
botonRemove.addEventListener("click", () => {
  botonClick.removeEventListener("click", mostrarAlerta);
  alert("Evento eliminado del primer botón.");
});