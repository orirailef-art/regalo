// --- ELEMENTOS DE AUDIO Y ESCENA ---
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");
const mensajeCumple = document.querySelector(".happy-birthday");

// --- LÓGICA DE LA VELA Y OSCURIDAD ---
llama.addEventListener("click", () => {
    // 1. Sonido de soplido
    soplido.currentTime = 0;
    soplido.play();

    // 2. Animación de apagar la llama
    llama.style.animation = "apagar 0.5s forwards";

    // 3. Transición de luz y música
    setTimeout(() => {
        cancion.currentTime = 0;
        cancion.play();
        
        // Quitamos la oscuridad
        overlay.classList.add("hidden");
        
        // Hacemos aparecer el texto de Feliz Cumpleaños
        if (mensajeCumple) {
            mensajeCumple.style.opacity = "1";
        }
    }, 1000);
});

// --- LÓGICA DE LAS CAJAS Y CARTAS ---
const envoltorios = document.querySelectorAll('.caja-wrapper');

envoltorios.forEach((envoltorio, index) => {
    const tapa = envoltorio.querySelector('.regalo');
    const base = envoltorio.querySelector('.regalos');
    
    // Asignamos qué modal abrir según el índice (0 para la primera caja, 1 para la segunda)
    const idCarta = (index === 0) ? "modalCarta1" : "modalCarta2";
    const modal = document.getElementById(idCarta);

    if (modal) {
        const abrirCarta = () => {
            modal.classList.add("activo");
        };

        // Click en la tapa o la base abre la carta correspondiente
        if (tapa) tapa.addEventListener("click", abrirCarta);
        if (base) base.addEventListener("click", abrirCarta);

        // Click en el fondo de la modal para cerrar
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("activo");
            }
        });
    }
});
