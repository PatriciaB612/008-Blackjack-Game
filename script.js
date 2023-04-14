let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")


function getRandomCard () {
  let randomCard = Math.floor( Math.random()*13) + 1;
  if (randomCard > 10) {
    return 10
  } else if (randomCard === 1) {
    return 11
  } else {
    return randomCard
  }
}

function startGame() {
    isAlive = true;
    let randomCard1 = getRandomCard();
    let randomCard2 = getRandomCard();
    cards = [randomCard1, randomCard2];
    sum = randomCard1 + randomCard2;
    renderGame()
}

function renderGame() {
    
    cardsEl.textContent = "Cards: ";   
    for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
    }

    if (sum < 21) {
         message = "Do you want to draw a new card?";
    } else if (sum === 21) {
         message = "You've got a Blackjack";
         hasBlackJack = false
    } else {
        message = "Sorry, you're out of the game";
        isAlive = false
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message    
} 
  
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let randomNewCard = getRandomCard()
    cards.push(randomNewCard)
    sum += randomNewCard
    renderGame()
  } 
}