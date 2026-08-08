const botonExplorar = document.querySelector(".hero button");

botonExplorar.addEventListener("click", () => {
document.querySelector("#cod").scrollIntoView({
behavior: "smooth"
});
});

const botones = document.querySelectorAll(".card button");

botones.forEach((boton) => {
boton.addEventListener("click", () => {
const juego = boton.parentElement.querySelector("h3").textContent;

    alert(`🎮 ¡Entraste a la sección de ${juego}!`);
});

});

console.log("🔥 ZentryGames cargado correctamente");
