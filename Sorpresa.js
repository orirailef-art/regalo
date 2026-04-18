/* REGALO A */
const giftA = document.querySelectorAll(".giftA");
const modalA = document.getElementById("modalA");

/* REGALO B */
const giftB = document.querySelectorAll(".giftB");
const modalB = document.getElementById("modalB");

/* eventos independientes */
giftA.forEach(obj=>{
    obj.addEventListener("click",()=>{
        modalA.classList.add("activo");
    });
});

giftB.forEach(obj=>{
    obj.addEventListener("click",()=>{
        modalB.classList.add("activo");
    });
});

/* cerrar cartas */
modalA.addEventListener("click",()=>{
    modalA.classList.remove("activo");
});

modalB.addEventListener("click",()=>{
    modalB.classList.remove("activo");
});

/* vela */
const overlay = document.querySelector(".overlay");
const llama = document.querySelector(".llama");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");

llama.addEventListener("click",()=>{

    soplido.play();

    setTimeout(()=>{
        overlay.classList.add("hidden");
        cancion.play();
        llama.style.display="none";
    },1000);

});
