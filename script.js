var moneyParagraph = document.getElementById("money");
var pickNumberButton = document.getElementById("pickNumber");
var numberParagraph = document.getElementById("number");
var betParagraph = document.getElementById("bet");
var betSlider = document.getElementById("betSlider");
var higherPayoutParagraph = document.getElementById("higherPayout");
var lowerPayoutParagraph = document.getElementById("lowerPayout");
var higherButton = document.getElementById("higher");
var lowerButton = document.getElementById("lower");
var resultParagraph = document.getElementById("result");
var playAgainButton = document.getElementById("playAgain");

var money = 100;
var number;
var bet = 1;
var higherPayout;
var lowerPayout;

pickNumberButton.addEventListener("click", pickNumber);
betSlider.addEventListener("input", changeBet);
higherButton.addEventListener("click", chooseHigher);
lowerButton.addEventListener("click", chooseLower);
playAgainButton.addEventListener("click", playAgain);

function pickNumber() {
    pickNumberButton.disabled = true;

    number = Math.floor(Math.random() * 100);
    numberParagraph.innerHTML = "The number is " + number + ". Will the next number be higher or lower?";

    betParagraph.style.display = "inline-block";
    betSlider.style.display = "inline-block";

    changeBet();

    higherButton.style.display = "inline";
    lowerButton.style.display = "inline";
}

function changeBet() {
    bet = parseFloat(betSlider.value);
    betParagraph.innerHTML = "Bet: $" + bet;

    higherPayout = 100 / (99 - number) * bet;
    higherPayoutParagraph.innerHTML = "Payout for higher: $" + higherPayout.toFixed(2);

    lowerPayout = 100 / number * bet;
    lowerPayoutParagraph.innerHTML = "Payout for lower: $" + lowerPayout.toFixed(2);
}

function chooseHigher() {
    betSlider.disabled = true;
    higherButton.disabled = true;
    lowerButton.disabled = true;

    var nextNumber = Math.floor(Math.random() * 100);

    if (nextNumber > number) {
        var amountWon = higherPayout - bet;
        resultParagraph.innerHTML = "The next number is " + nextNumber + ". You won $" + amountWon.toFixed(2);
        money = money + amountWon;
    }
    else {
        resultParagraph.innerHTML = "The next number is " + nextNumber + ". You lost $" + bet;
        money = money - bet;
    }

    moneyParagraph.innerHTML = "Money: $" + money.toFixed(2);
    playAgainButton.style.display = "inline";
}

function chooseLower() {
    betSlider.disabled = true;
    higherButton.disabled = true;
    lowerButton.disabled = true;

    var nextNumber = Math.floor(Math.random() * 100);

    if (nextNumber < number) {
        var amountWon = lowerPayout - bet;
        resultParagraph.innerHTML = "The next number is " + nextNumber + ". You won $" + amountWon.toFixed(2);
        money = money + amountWon;
    }
    else {
        resultParagraph.innerHTML = "The next number is " + nextNumber + ". You lost $" + bet;
        money = money - bet;
    }

    moneyParagraph.innerHTML = "Money: $" + money.toFixed(2);
    playAgainButton.style.display = "inline";
}

function playAgain() {
    pickNumberButton.disabled = false;
    numberParagraph.innerHTML = "";

    betParagraph.style.display = "none";
    betSlider.style.display = "none";
    betSlider.disabled = false;

    higherPayoutParagraph.innerHTML = "";
    lowerPayoutParagraph.innerHTML = "";

    higherButton.style.display = "none";
    higherButton.disabled = false;

    lowerButton.style.display = "none";
    lowerButton.disabled = false;

    resultParagraph.innerHTML = "";
    playAgainButton.style.display = "none";
}
