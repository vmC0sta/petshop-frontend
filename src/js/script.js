const openClosed_button = {
  dom: document.getElementById("open_closed-button"),
  open: false,
};

const main = document.getElementsByTagName("main")[0];

const headerFechado = document.getElementById("header-fechado");
const headerAberto = document.getElementById("header-aberto");

const content = document.getElementsByClassName("content")[0];

openClosed_button.dom.addEventListener("click", () => {
  if (!openClosed_button.open) {
    headerAberto.style.display = "flex";
    headerFechado.style.display = "none";
    openClosed_button.open = true;
  }
});

main.addEventListener("mousedown", () => {
  if (openClosed_button.open) {
    headerAberto.style.display = "none";
    headerFechado.style.display = "flex";
    openClosed_button.open = false;
  }
});

window.addEventListener("load", (event) => {
  let LoadAnim = document.getElementsByClassName("loading")[0];
  LoadAnim.style.display = "none";
  content.style.display = "block";
});
