export const swapNext = (e) => {
  let card = document.querySelector(".card:last-child");
  card.style.animation = "swapNext 400ms forwards";
  setTimeout(() => {
    card.style.animation = "";
  }, 400)
};

export const swapPrev = (e) => {
  let card = document.querySelector(".card:first-child");
  let frontcard = document.querySelector(".card:last-child");
  card.style.animation = "swapPrev 400ms";
  frontcard.style.animation = "swapBack 400ms";

  setTimeout(() => {
    card.style.animation = "";
  }, 400)
}


export const swap = (e) => {
  //가장 앞에 있는 card : card:last-child  
  let card = document.querySelector(".card:last-child");
  card.style.animation = "swapNext 400ms";

  setTimeout(() => {
    card.style.animation = "";
    //stack.prepend(card);
  }, 400)
};