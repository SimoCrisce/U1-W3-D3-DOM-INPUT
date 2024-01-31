const generateCard = (dataObj) => {
  const cardsContainer = document.getElementById("cards-container");

  const card = document.createElement("div");
  card.className = "card";
  const p = document.createElement("p");
  p.innerText = dataObj.text;
};

const form = document.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();
  console.log("Evento ", e);
};

const inputTaskNode = document.getElementById("text");
console.log(inputTaskNode);

const myData = {
  text: inputTaskNode.value,
};

console.log("Dati inseriti: ", myData);
