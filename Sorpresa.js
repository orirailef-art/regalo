// ==============================
// ABRIR Y CERRAR CARTA
// ==============================

// Selecciona la tapa del regalo
const regalo = document.querySelector(".regalo");

// Selecciona la base del regalo
const regalos = document.querySelector(".regalos");

// Selecciona el modal donde está la carta
const modalCarta = document.getElementById("modalCarta");

// Cuando se hace clic en la tapa del regalo,
// muestra la carta agregando la clase "activo"
regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

// Cuando se hace clic en la base del regalo,
// también muestra la carta
regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

// Cuando se hace clic en cualquier parte del modal,
// se cierra la carta quitando la clase "activo"
modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});


// ==============================
// OSCURIDAD + SOPLAR VELA + MÚSICA
// ==============================

// Selecciona la capa negra inicial
const overlay = document.querySelector(".overlay");

// Selecciona audio del soplido
const soplido = document.getElementById("soplido");

// Selecciona música de cumpleaños
const cancion = document.getElementById("cancion");

// Selecciona la llama de la vela
const llama = document.querySelector(".llama");

// Cuando se hace clic en la llama
llama.addEventListener("click", () => {

  // Reinicia el audio del soplido por si ya sonó antes
  soplido.currentTime = 0;

  // Reproduce sonido de soplar
  soplido.play();

  // Ejecuta animación para apagar la llama
  // forwards = mantiene el último estado de la animación
  llama.style.animation = "apagar 0.5s forwards";

  // Espera 1 segundo antes de continuar
  setTimeout(() => {

    // Reinicia la canción
    cancion.currentTime = 0;

    // Reproduce la música
    cancion.play();

    // Hace desaparecer la oscuridad inicial
    overlay.classList.add("hidden");

  }, 1000);
});
