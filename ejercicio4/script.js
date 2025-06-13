const antiguoDiv = document.getElementById("antiguo");
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Soy un nuevo div";
if (antiguoDiv && antiguoDiv.parentNode) {
  antiguoDiv.parentNode.replaceChild(nuevoDiv, antiguoDiv);
  console.log("Reemplazo exitoso:", nuevoDiv.textContent);
}