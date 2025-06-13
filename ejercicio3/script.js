const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo creado dinámicamente";
document.body.appendChild(nuevoParrafo);
document.querySelector("#eliminar").addEventListener("click", () => {
  const primerP = document.querySelector("p");
  if (primerP) primerP.remove();
});