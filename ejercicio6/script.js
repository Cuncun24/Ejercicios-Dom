const input = document.getElementById("tareaInput");
const btn = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");
btn.addEventListener("click", () => {
  const texto = input.value.trim();
  if (!texto) return;
  const divTarea = document.createElement("div");
  divTarea.className = "tarea";
  const spanTexto = document.createElement("span");
  spanTexto.textContent = texto;
  const check = document.createElement("span");
  check.textContent = "✔";
  check.className = "icono pendiente";
  check.addEventListener("click", () => {
    check.classList.toggle("pendiente");
    check.classList.toggle("completado");
  });
  const eliminar = document.createElement("span");
  eliminar.textContent = "🗑";
  eliminar.className = "icono eliminar";
  eliminar.addEventListener("click", () => {
    if (confirm("¿Seguro que deseas eliminar esta tarea?")) {
      divTarea.remove();
    }
  });
  divTarea.append(spanTexto, check, eliminar);
  lista.appendChild(divTarea);
  input.value = "";
});