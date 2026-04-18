const llama = document.getElementById("botonLlama");
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const texto = document.querySelector(".happy-birthday");

if (llama) {
  llama.onclick = function() {
    console.log("Llama clickeada!"); // Si ves esto en la consola, el clic funciona
    
    // 1. Sonido
    soplido.currentTime = 0;
    soplido.play();

    // 2. Apagar llama
    llama.style.display = "none"; 

    // 3. Efecto sorpresa
    setTimeout(() => {
      overlay.classList.add("hidden");
      texto.style.opacity = "1";
      cancion.play();
    }, 1000);
  };
}

// --- LÓGICA DE LOS REGALOS Y CARTAS ---
// Seleccionamos todos los envoltorios de regalos
const envoltorios = document.querySelectorAll('.caja-wrapper');

envoltorios.forEach((envoltorio, index) => {
  // Buscamos las partes clicables dentro de cada regalo
  const tapa = envoltorio.querySelector('.regalo');
  const base = envoltorio.querySelector('.regalos');
  
  // Determinamos qué carta le toca (index 0 para el primero, index 1 para el segundo)
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
