const paragrafos = document.querySelector(".paragrafos");
const ps = document.querySelectorAll("p");

const estilos = getComputedStyle(document.body);
const backgroundColorBody = estilos.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "white";
}
