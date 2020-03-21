let cardTitle = document.querySelector(".card_title");
let cardText = document.querySelector(".card__form");

document
  .getElementsByClassName(".card_start_button")
  .addEventListener("click", function(e) {
    console.log(this);
  });

function startCard() {
  let cardContainer = document.querySelector(".card_tool_container");
  let notice = document.querySelector(".root_notice");
  cardContainer.className += " hide";
  notice.className += " hide";
}

cardText.addEventListener("click", console.log);

function displayForm() {
  cardText.className += "active";
}
