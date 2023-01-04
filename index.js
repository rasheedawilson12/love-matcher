let matchResults = Math.floor(Math.random() * 101);
let form = document.querySelector("form");
let button = document.querySelector("button");

function showMatch() {
  let personOne = document.querySelector("person-one");
  let personTwo = document.querySelector("person-two");
  let resultMessage = document.querySelector("result-message");

  resultMessage.innerHTML = `${personOne} & ${personTwo} have a love match of ${matchResults}%`;
}

button.addEventListener("submit", showMatch());
