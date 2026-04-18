// Carta
const tapas = document.querySelectorAll(".regalo");
const cajas = document.querySelectorAll(".regalos");
const modalCarta = document.getElementById("modalCarta");

tapas.forEach(regalo => {
  regalo.addEventListener("click", () => {
    modalCarta.classList.add("activo");
  });
});

cajas.forEach(caja => {
  caja.addEventListener("click", () => {
    modalCarta.classList.add("activo");
  });
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
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
