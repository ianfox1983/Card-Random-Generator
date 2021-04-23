/* eslint-disable */
import "bootstrap";
import "./style.css";

const NUMEROS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K",
  "<img src='https://media.istockphoto.com/vectors/dancing-joker-with-playing-cards-on-white-vector-id960303126' style='width: 250px; height: 250px;'>"
];
const PALOS = ["♥", "♠", "♦", "♣"];
const COLORES = ["black", "red"];

const SimboloArriba = document.querySelector("#SimboloArriba");
const numero = document.querySelector("#numero");
const SimboloAbajo = document.querySelector("#SimboloAbajo");

window.onload = function() {
  GeneradorValor();
  document.querySelector("#boton").addEventListener("click", event => {
    // Al hacer click hace un a nueva llamada y genera un nuevo valor
    GeneradorValor();
  });
};

function GeneradorNumAleatorio(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function GeneradorValor() {
  let Simbolo = GeneradorNumAleatorio(PALOS);
  let Color = GeneradorNumAleatorio(COLORES);
  let Numeros = GeneradorNumAleatorio(NUMEROS);
  SimboloArriba.innerHTML = Simbolo;
  SimboloArriba.style.color = Color;
  SimboloAbajo.innerHTML = Simbolo;
  SimboloAbajo.style.color = Color;

  numero.innerHTML = Numeros;

  if (
    Numeros ==
    "<img src='https://media.istockphoto.com/vectors/dancing-joker-with-playing-cards-on-white-vector-id960303126' style='width: 250px; height: 250px;'>"
  ) {
    SimboloArriba.innerHTML = "";
    SimboloAbajo.innerHTML = "";
  }
}
