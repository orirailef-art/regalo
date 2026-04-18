// Carta
const cajas = document.querySelectorAll(".caja-wrapper");

cajas.forEach((caja, indice) => {
  // Determinar qué modal corresponde a esta caja
  const numeroModal = indice + 1; // Caja 1 -> modal 1, Caja 2 -> modal 2
  const modal = document.getElementById(`modalCarta${numeroModal}`);
  
  // Agregar listeners a los elementos interactivos de esta caja
  const regalo = caja.querySelector(".regalo");
  const regalos = caja.querySelector(".regalos");
  
  if (modal) {
    regalo?.addEventListener("pointerdown", () => {
      modal.classList.add("activo");
    });
    regalos?.addEventListener("pointerdown", () => {
      modal.classList.add("activo");
    });
  }
});

// Cerrar modales al tocar el fondo
const modalesCarta = document.querySelectorAll(".modal-carta");
modalesCarta.forEach((modal) => {
  modal.addEventListener("pointerdown", (evento) => {
    // Solo cerrar cuando se toca el fondo oscuro.
    if (evento.target === modal) {
      modal.classList.remove("activo");
    }
  });
});

// Todo Oscuro + Soplido + Cancion
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");
const vela = document.querySelector(".vela");

let velaApagada = false;

function apagarVela() {
  if (velaApagada || !llama || !overlay || !soplido || !cancion) return;
  velaApagada = true;

  soplido.currentTime = 0;
  soplido.play();
  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play();
    overlay.classList.add("hidden");
  }, 1000);
}

llama?.addEventListener("pointerdown", apagarVela);
vela?.addEventListener("pointerdown", apagarVela);