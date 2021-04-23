/* eslint-disable */
import "bootstrap";
import "./style.css";
const NUMBERS = [
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
const ICONS = ["♥", "♠", "♦", "♣"];
const COLORS = ["black", "red"];
const topSymbol = document.querySelector("#topSymbol");
const number = document.querySelector("#number");
const bottomSymbol = document.querySelector("#bottomSymbol");
window.onload = function() {
  generateValue();
  document.querySelector("#button").addEventListener("click", event => {
    // Al hacer click hace un a nueva llamada y genera un nuevo valor
    generateValue();
  });
};
function randomElement(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
function generateValue() {
  let Symbol = randomElement(ICONS);
  let Color = randomElement(COLORS);
  let Number = randomElement(NUMBERS);
  topSymbol.innerHTML = Symbol;
  topSymbol.style.color = Color;
  bottomSymbol.innerHTML = Symbol;
  bottomSymbol.style.color = Color;
  number.innerHTML = Number;
  if (
    Number ==
    "<img src='https://media.istockphoto.com/vectors/dancing-joker-with-playing-cards-on-white-vector-id960303126' style='width: 250px; height: 250px;'>"
  ) {
    topSymbol.innerHTML = "";
    bottomSymbol.innerHTML = "";
  }
}
