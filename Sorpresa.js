// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
  const idCarta = index === 0 ? "modalCarta1" : "modalCarta2";
  const modal = document.getElementById(idCarta);

  if (modal) {
    // Función para abrir
    const abrirCarta = () => modal.classList.add("activo");
    
    if (tapa) tapa.addEventListener("click", abrirCarta);
    if (base) base.addEventListener("click", abrirCarta);

    // Función para cerrar (clic fuera de la carta)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("activo");
      }
    });
  }
});


// Todo Oscuro + Soplido + Canción
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

llama.addEventListener("click", () => {
  soplido.currentTime = 0;
  soplido.play();

  llama.style.animation = "apagar 0.5s forwards"; // forwards -> Ultimo frame (to)

  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play();
    overlay.classList.add("hidden");
  }, 1000);
});


// --- LÓGICA DE LOS REGALOS Y CARTAS ---
// Seleccionamos todos los envoltorios de regalos
const envoltorios = document.querySelectorAll('.caja-wrapper');

envoltorios.forEach((envoltorio, index) => {
  // Buscamos las partes clicables dentro de cada regalo
  const tapa = envoltorio.querySelector('.regalo');
  const base = envoltorio.querySelector('.regalos');
  
  
