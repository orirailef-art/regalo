// Elementos
const overlay = document.querySelector(".overlay");
const llama = document.querySelector(".llama");
const mensaje = document.querySelector(".happy-birthday");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");

// Lógica de Inicio (Soplido)
llama.addEventListener("click", () => {
    soplido.currentTime = 0;
    soplido.play();
    
    // Apagar llama
    llama.style.animation = "apagar 0.5s forwards";
    
    setTimeout(() => {
        // Mostrar todo
        overlay.classList.add("hidden");
        mensaje.style.opacity = "1";
        
        // Música
        cancion.currentTime = 0;
        cancion.play();
    }, 1000);
});

// Lógica de Cajas y Modales
const envoltorios = document.querySelectorAll('.caja-wrapper');

envoltorios.forEach((envoltorio, index) => {
    envoltorio.addEventListener("click", () => {
        // index 0 -> Caja 1 -> modalCarta1
        // index 1 -> Caja 2 -> modalCarta2
        const idCarta = (index === 0) ? "modalCarta1" : "modalCarta2";
        const modal = document.getElementById(idCarta);
        if (modal) modal.classList.add("activo");
    });
});

// Cerrar modales al hacer clic afuera
const modales = document.querySelectorAll('.modal-carta');
modales.forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("activo");
        }
    });
});
