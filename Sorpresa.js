// ===============================
// REGALOS INDEPENDIENTES
// ===============================

// Regalo A
const regaloA = document.querySelectorAll(".giftA");
const modalA = document.getElementById("modalA");

// Regalo B
const regaloB = document.querySelectorAll(".giftB");
const modalB = document.getElementById("modalB");

// Abrir Carta A
regaloA.forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        modalA.classList.add("activo");
    });
});

// Abrir Carta B
regaloB.forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        modalB.classList.add("activo");
    });
});

// Cerrar Carta A
modalA.addEventListener("click", () => {
    modalA.classList.remove("activo");
});

// Cerrar Carta B
modalB.addEventListener("click", () => {
    modalB.classList.remove("activo");
});


// ===============================
// TORTA / VELA / MÚSICA
// ===============================

const overlay = document.querySelector(".overlay");
const llama = document.querySelector(".llama");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");

let velaApagada = false;

llama.addEventListener("click", () => {

    if (velaApagada) return;
    velaApagada = true;

    // sonido soplido
    soplido.currentTime = 0;
    soplido.play();

    // apagar vela visualmente
    llama.style.transition = "0.4s";
    llama.style.transform = "scale(0)";
    llama.style.opacity = "0";

    // encender escena + música
    setTimeout(() => {
        overlay.classList.add("hidden");

        cancion.currentTime = 0;
        cancion.play();

        llama.style.display = "none";
    }, 900);
});


// ===============================
// EVITAR PAUSA SI USUARIO TOCA PÁGINA
// ===============================

document.addEventListener("click", () => {
    if (!cancion.paused) {
        cancion.play();
    }
});
