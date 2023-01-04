let matchResults = Math.floor(Math.random() * 101);
let button = document.querySelector("#button");

function showMatch(event) {
  event.preventDefault();
  let personOne = document.querySelector("#person-one");
  let personTwo = document.querySelector("#person-two");
  let matchResult = document.querySelector(".match-result");
  let resultMessage = document.querySelector(".result-message");

  matchResult.innerHTML = `${personOne} & ${personTwo} have a love match of ${matchResults}%`;

  //   if (matchResult >= 80) {
  //     resultMessage.innerHTML = `${personOne} & ${personTwo} are a perfect match!`;
  //   }
  //   if (matchResult < 30) {
  //     resultMessage.innerHTML = `${personOne} & ${personTwo} are not a perfect match!`;
  //   } else {
  //     resultMessage`${personOne} & ${personTwo} are an adaquate match.`;
  //   }
}

button.addEventListener("submit", showMatch);
