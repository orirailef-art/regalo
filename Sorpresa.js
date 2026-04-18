window.addEventListener("DOMContentLoaded", () => {
  // REGALOS
  const regalos = document.querySelectorAll(".caja");

  const modal1 = document.getElementById("modalCarta1");
  const modal2 = document.getElementById("modalCarta2");

  if (regalos[0]) {
    regalos[0].addEventListener("click", () => {
      modal1.classList.add("activo");
    });
  }

  if (regalos[1]) {
    regalos[1].addEventListener("click", () => {
      modal2.classList.add("activo");
    });
  }

  if (modal1) {
    modal1.addEventListener("click", () => {
      modal1.classList.remove("activo");
    });
  }

  if (modal2) {
    modal2.addEventListener("click", () => {
      modal2.classList.remove("activo");
    });
  }

  // VELA
  const overlay = document.querySelector(".overlay");
  const soplido = document.getElementById("soplido");
  const cancion = document.getElementById("cancion");
  const llama = document.querySelector(".llama");

  if (llama) {
    llama.addEventListener("click", () => {
      soplido.currentTime = 0;
      soplido.play();

      llama.style.animation = "apagar 0.5s forwards";

      setTimeout(() => {
        cancion.currentTime = 0;
        cancion.play();

        if (overlay) overlay.classList.add("hidden");
      }, 1000);
    });
  }
});
