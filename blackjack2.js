var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var isBetween = function (A, B, C) {
    return (A <= B && B <= C);
};

function Card(s, n) {
    var suit = s;
    var number = n;
    this.getSuit = function () {
        return suit;
    };
    this.getNumber = function () {
        return number;
    };
}

Card.prototype.getValue = function () {
	return this.getNumber() === 1 ? 11 : isBetween(11, this.getNumber(), 13) ? 10 : this.getNumber();
};

var myCalledCards = [];
var dealerCalledCards = [];
var usedCards = [];
var myRunningTotal = 0;
var dealerRunningTotal = 0;

var initDeal = function () {

	//Player Hand
	var myHand = new Card((Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 13) + 1));
	var cardSuit = myHand.getSuit();
	var cardNumber = myHand.getNumber();
	var cardSuitSuit = '';
	var cardNumberValue = cardNumber;
	
	if (cardSuit == 1){
		cardSuitSuit = 'Hearts';
	}
	if (cardSuit == 2){
                cardSuitSuit = 'Spades';
        }
	if (cardSuit == 3){
                cardSuitSuit = 'Diamonds';
        }
	if (cardSuit == 4){
                cardSuitSuit = 'Clubs';
        }
	
	if (cardNumber == 11){
		cardNumberValue = 'Jack';
		cardNumber = 10;
	}
	if (cardNumber == 12){
                cardNumberValue = 'Queen';
		cardNumber = 10;
        }
	if (cardNumber == 13){
                cardNumberValue = 'King';
		cardNumber = 10;
        }
	var myCardString = `${cardNumberValue} of ${cardSuitSuit}`;

	//Player Second Hand
	var mySecondHand = new Card((Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 13) + 1));
	var secondCardSuit = mySecondHand.getSuit();
        var secondCardNumber = mySecondHand.getNumber();
        var secondCardSuitSuit = '';
        var secondCardNumberValue = secondCardNumber;

        if (secondCardSuit == 1){
                secondCardSuitSuit = 'Hearts';
        }
        if (secondCardSuit == 2){
                secondCardSuitSuit = 'Spades';
        }
        if (secondCardSuit == 3){
                secondCardSuitSuit = 'Diamonds';
        }
        if (secondCardSuit == 4){
                secondCardSuitSuit = 'Clubs';
        }

        if (secondCardNumber == 11){
                secondCardNumberValue = 'Jack';
		secondCardNumber = 10;
        }
        if (secondCardNumber == 12){
                secondCardNumberValue = 'Queen';
		secondCardNumber = 10;
        }
        if (secondCardNumber == 13){
                secondCardNumberValue = 'King';
		secondCardNumber = 10;
        }
        var mySecondCardString = `${secondCardNumberValue} of ${secondCardSuitSuit}`;
	

		
	//Dealer Stuff
	var dealerHand = new Card((Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 13) + 1));
	var dealerCardSuit = dealerHand.getSuit();
        var dealerCardNumber = dealerHand.getNumber();
        var dealerCardSuitSuit = '';
        var dealerCardNumberValue = dealerCardNumber;

        if (dealerCardSuit == 1){
                dealerCardSuitSuit = 'Hearts';
        }
        if (dealerCardSuit == 2){
                dealerCardSuitSuit = 'Spades';
        }
        if (dealerCardSuit == 3){
                dealerCardSuitSuit = 'Diamonds';
        }
        if (dealerCardSuit == 4){
                dealerCardSuitSuit = 'Clubs';
        }

        if (dealerCardNumber == 11){
                dealerCardNumberValue = 'Jack';
		dealerCardNumber = 10;
        }
        if (dealerCardNumber == 12){
                dealerCardNumberValue = 'Queen';
		 dealerCardNumber = 10;
        }
        if (dealerCardNumber == 13){
                dealerCardNumberValue = 'King';
		dealerCardNumber = 10;
        }
	var dealerCardString = `${dealerCardNumberValue} of ${dealerCardSuitSuit}`;

	//Dealer Second Hand Stuff
        var dealerSecondHand = new Card((Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 13) + 1));
        var dealerSecondCardSuit = dealerSecondHand.getSuit();
        var dealerSecondCardNumber = dealerSecondHand.getNumber();
        var dealerSecondCardSuitSuit = '';
        var dealerSecondCardNumberValue = dealerSecondCardNumber;

        if (dealerSecondCardSuit == 1){
                dealerSecondCardSuitSuit = 'Hearts';
        }
        if (dealerSecondCardSuit == 2){
                dealerSecondCardSuitSuit = 'Spades';
        }
        if (dealerSecondCardSuit == 3){
                dealerSecondCardSuitSuit = 'Diamonds';
        }
        if (dealerSecondCardSuit == 4){
                dealerSecondCardSuitSuit = 'Clubs';
        }

        if (dealerSecondCardNumber == 11){
                dealerSecondCardNumberValue = 'Jack';
                dealerSecondCardNumber = 10;
        }
        if (dealerSecondCardNumber == 12){
                dealerSecondCardNumberValue = 'Queen';
                 dealerSecondCardNumber = 10;
        }
        if (dealerSecondCardNumber == 13){
                dealerSecondCardNumberValue = 'King';
                dealerSecondCardNumber = 10;
        }
        var dealerSecondCardString = `${dealerSecondCardNumberValue} of ${dealerSecondCardSuitSuit}`;
		
	
	var myTotal = cardNumber + secondCardNumber;
	var dealerTotal = dealerCardNumber + dealerSecondCardNumber;


//Prints and card handling
	console.log(`To start: Dealer has the ${dealerCardString} and ${dealerSecondCardString} for a value of ${dealerTotal}`);
	console.log(`To start: You have the ${myCardString} and ${mySecondCardString} for a value of ${myTotal}`);

	myCalledCards.push(myCardString);
	myCalledCards.push(mySecondCardString);

	dealerCalledCards.push(dealerCardString);
	dealerCalledCards.push(dealerSecondCardString);

	myRunningTotal += myTotal;
	dealerRunningTotal += dealerTotal;

//	return cardio;
};

var randSuit = (Math.floor(Math.random() * 4) + 1);
var randNum = (Math.floor(Math.random() * 13) + 1);

function generateCard(randSuit, randNum){

        //Hit Me Card
        //var thisHand = new Card((Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 13) + 1));
        //var thisCardSuit = thisHand.getSuit();
        //var thisCardNumber = thisHand.getNumber();
        //var thisCardSuitSuit = '';
        //var thisCardNumberValue = thisCardNumber;
	this.thisCardSuit = randSuit;
	this.thisCardNumber = randNum;
	var thisCardNumberValue = this.thisCardNumber;

        if (this.thisCardSuit == 1){
                var thisCardSuitSuit = 'Hearts';
        }
        if (this.thisCardSuit == 2){
                var thisCardSuitSuit = 'Spades';
        }
        if (this.thisCardSuit == 3){
                var thisCardSuitSuit = 'Diamonds';
        }
        if (this.thisCardSuit == 4){
                var thisCardSuitSuit = 'Clubs';
        }

        if (this.thisCardNumber == 11){
                var thisCardNumberValue = 'Jack';
                this.thisCardNumber = 10;
        }
        if (this.thisCardNumber == 12){
                var thisCardNumberValue = 'Queen';
                this.thisCardNumber = 10;
        }
        if (this.thisCardNumber == 13){
                var thisCardNumberValue = 'King';
                this.thisCardNumber = 10;
        }
        this.thisCardString = `${thisCardNumberValue} of ${thisCardSuitSuit}`;

	this.thisCardValue = this.thisCardNumber;

//console.log(`the generated card value is ${thisCardValue}`);
}

var hitMe = function () {

	var newCard = new generateCard(randSuit, randNum);
	console.log(`this first created Cards is the ${newCard.thisCardString}`);	
	for (n = 0; n < usedCards.length; n++){
		if(usedCards[n] == newCard.thisCardString){
			//rerun the card factory
			newCard = new generateCard(randSuit, randNum);
		}
		else{ 
		//add card to players Hand
		//add card to usedCards array
		}
	}
	console.log(`this final Cards is the ${newCard.thisCardString}`);
        console.log(`this final Cards worth is ${newCard.thisCardValue}`);

	myCalledCards.push(newCard.thisCardString);
	usedCards.push(newCard.thisCardString);
	myRunningTotal += newCard.thisCardValue;
} 
var dealerHitMe = function () {

        var newCard = new generateCard(randSuit, randNum);
        console.log(`this first created Cards is the ${newCard.thisCardString}`);
        for (n = 0; n < usedCards.length; n++){
                if(usedCards[n] == newCard.thisCardString){
                        //rerun the card factory
                        newCard = new generateCard(randSuit, randNum);
                }
                else{
                //add card to players Hand
                //add card to usedCards array
                }
        }
        dealerCalledCards.push(newCard.thisCardString);
        usedCards.push(newCard.thisCardString);
        dealerRunningTotal += newCard.thisCardValue;
	console.log(`new dealerHit produced ${newCard.thisCardValue}`);
}
/*
function Deck() {
    var accept = {
        1: [],
        2: [],
        : [],
        4: []
    };
    for (var s in accept) {
        for (var i = 0; i < 13; ++i)
            accept[s][i] = 1;
    }

    this.TryAddDeck = function (newCard) {
        if (accept[newCard.getSuit()][newCard.getNumber() - 1]) {
            accept[newCard.getSuit()][newCard.getNumber() - 1] = 0;
            return 1;
        }
        return 0;
    };
}

function Hand() {
    var pack = new Deck(),
        deck = [],
        l = deck.length,
        string = '';
    this.good = 1;
    this.printHand = function () {
        var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
                var SuitsEmoji = ["?", "?", "?", "?"];
        var face = {
            1: 'Ace',
            11: 'Jack',
            12: 'Queen',
            13: 'King'
        };
	while (l < deck.length) {
            var num = deck[l].getNumber();
            string += (l ? ', ' : '') + (num ^ 1 && num < 11 ? num : face[num]) + ' of ' + suits[deck[l].getSuit() - 1];
            ++l;
        }
        return string;
    };
//console.log(deck.length);
//console.log(l);
}

*/
//console.log(Hand());
//console.log(deal());
//console.log(((Math.floor(Math.random() * 4) + 1)) + `, ` + (Math.floor(Math.random() * 13) + 1) );
//deal();
//console.log(deal().cardio);
//Deal gets run first

initDeal();
usedCards = myCalledCards.concat(dealerCalledCards);

var isGameGood = 1;
var dealerWon = 0;
var dealerBust = 0;
var afterHit = 0;
var dealerAfterHit = 0;
var preTie = 0;
while (dealerRunningTotal < 17){
	dealerHitMe();
	dealerAfterhit = 1;
}
if (dealerRunningTotal >= 21){
	isGameGood = 0;
	if (dealerRunningTotal == 21){
		dealerWon = 1;
	}
	if (dealerRunningTotal > 21){
		dealerBust = 1;
	}

}

console.log(`the cards the dealer has used: ${dealerCalledCards}`);
console.log(`the cards you have used: ${myCalledCards}`);
console.log(`used cards: ${usedCards}`);
console.log(`your running total: ${myRunningTotal}`);
console.log(`the dealers running total: ${dealerRunningTotal}`);

if (dealerRunningTotal == myRunningTotal){
	preTie = 1;
        console.log(`Its a tie so far...`);
}


//Playing Game
if (myRunningTotal < 21 && isGameGood == 1 && dealerBust !== 1 && dealerWon !== 1){
	  rl.question('Do you want to hit or stay? ', (answer) => {
                  if (answer.toLowerCase() == "hit" || answer.toLowerCase == 'h'){
                        console.log(`${answer}`);
                        rl.close();
			afterHit = 1;
			hitMe();
			console.log(`your running total after hit: ${myRunningTotal}`);
			console.log(`now the used cards are ${usedCards}`);
			//hit comes before close
                  }
                  else{
                        console.log(`Not hit. You're doing: ${answer}`);
                        rl.close();
			console.log(`your running total after hit: ${myRunningTotal}`);
			console.log(`now the used cards are ${usedCards}`);
			//determine winner
                  }
         })
}

//Determine outcome
if (dealerRunningTotal > myRunningTotal && afterHit == 1){
	console.log(`The dealer has a better hand; you lose`);
	rl.close();
}
if(myRunningTotal > 21){
	console.log(`You've busted. You're over 21! House wins!`);
	rl.close();
}
if (dealerRunningTotal == 21){
	console.log(`The house won! Dealer has blackjack!`);
	rl.close();
}
if (dealerBust == 1) {
	console.log(`The dealer's hand is a bust. You win!`);
	rl.close();
}

if (dealerRunningTotal == myRunningTotal && afterHit == 1){
	console.log(`Its a tie`);
	rl.close();
}
if (afterHit == 1 && myRunningTotal > dealerRunningTotal){
	if (myRunningTotal == 21){
		console.log(`Blackjack!`);
	}
	console.log(`You won!`);
	rl.close();
}
//hitMe();
//Then considering what cards they see, they can hit stay or 



