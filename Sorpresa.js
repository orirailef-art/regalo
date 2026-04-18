// Carta
const tapas = document.querySelectorAll(".regalo");
const cajas = document.querySelectorAll(".regalos");
const regalos = document.querySelectorAll(".caja");

const modal1 = document.getElementById("modalCarta1");
const modal2 = document.getElementById("modalCarta2");

regalos[0].addEventListener("click", () => {
  modal1.classList.add("activo");
});

regalos[1].addEventListener("click", () => {
  modal2.classList.add("activo");
});

modal1.addEventListener("click", () => {
  modal1.classList.remove("activo");
});

modal2.addEventListener("click", () => {
  modal2.classList.remove("activo");
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
