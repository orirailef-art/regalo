// Carta
const regalosInteractivos = document.querySelectorAll(".regalo, .regalos");
const modalesCarta = document.querySelectorAll(".modal-carta");

regalosInteractivos.forEach((elemento, indice) => {
  elemento.addEventListener("pointerdown", () => {
    const modal = modalesCarta[indice] || modalesCarta[0];
    modal?.classList.add("activo");
  });
});

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

});
