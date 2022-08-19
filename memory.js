"use strict";

const cards = document.querySelectorAll(".memory-card");

let cardFlipped = false;
let lock = false;
let firstCard, secondCard;

function flip() {
    if(lock) return;
    if(this === firstCard) return;

    this.classList.add("flip");

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
        return;
    } 
        cardFlipped = false;
        secondCard = this;

        checkMatch();
};

function checkMatch() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
      isMatch ? disable() : unflip();
};

function disable() {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
};

function unflip() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
};

function reset() {
    [cardFlipped, lock] = [false, false];
    [firstCard, secondCard] = [null, null];
    cards.forEach(card => card.addEventListener("click", flip));
};

(function shuffle() {
    cards.forEach(card => {
        let randomPlace = Math.floor(Math.random() * 12);
        card.style.order = randomPlace;
    });
})();

cards.forEach(card => card.addEventListener("click", flip));


document.querySelector(".btn").addEventListener("click", () => {

    document.querySelectorAll(".memory-card").forEach((card) => {
        card.classList.remove("flip");
    
    });
    (function shuffle() {
        cards.forEach(card => {
            let randomPlace = Math.floor(Math.random() * 12);
            card.style.order = randomPlace;
        });
    })();
    let cardFlipped = false;
    let lock = false;
    let firstCard = null;
    let secondCard = null;
});
