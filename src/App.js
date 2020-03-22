//element.addEventListener(event, function, useCapture);

let cardTitle = document.querySelector(".card_title");
let cardText = document.querySelector(".card__form");
let cardBtn = document.querySelector(".card_start_button");
let formContainer = document.querySelector(".form__container");

function startCard() {
  let cardContainer = document.querySelector(".card_tool_container");
  let notice = document.querySelector(".root_notice");
  cardContainer.className += " hide";
  notice.className += " hide";
  cardText.className += " active";
  cardBtn.className += " hide";
  formContainer.className += " active_flex";
  formContainer.style.display = "flex";
}

cardBtn.addEventListener("click", startCard);

function displayForm() {
  cardText.className += "active";
}

let formYes = document.querySelector(".form__no");
let formNo = document.querySelector(".form__yes");
let questionText = document.querySelector(".card__form--text");

formYes.addEventListener("click", newQuestion);
function newQuestion() {
  questionText.innerHTML = "Are you ill, or caring for someone who is ill?";
}

formNo.addEventListener("click", newQuestion);
