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
var randSuit = (Math.floor(Math.random() * 4) + 1);
var randNum = (Math.floor(Math.random() * 13) + 1);
function generateCard(randSuit, randNum){
	//Hit Me Card
        var thisHand = new Card((Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 13) + 1));
        var thisCardSuit = thisHand.getSuit();
        let thisCardNumber = thisHand.getNumber();
        var thisCardSuitSuit = '';
        this.thisCardNumberValue = thisCardNumber;	
	this.randNumb = randNum;
}

var card = new generateCard(randSuit, randNum);

console.log(card.randNumb);
