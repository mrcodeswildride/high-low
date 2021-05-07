let moneyParagraph = document.getElementById(`moneyParagraph`)
let numberButton = document.getElementById(`numberButton`)
let numberParagraph = document.getElementById(`numberParagraph`)
let betParagraph = document.getElementById(`betParagraph`)
let betSlider = document.getElementById(`betSlider`)
let higherPayoutParagraph = document.getElementById(`higherPayoutParagraph`)
let lowerPayoutParagraph = document.getElementById(`lowerPayoutParagraph`)
let higherButton = document.getElementById(`higherButton`)
let lowerButton = document.getElementById(`lowerButton`)
let resultParagraph = document.getElementById(`resultParagraph`)
let playAgainButton = document.getElementById(`playAgainButton`)

let money = 100
let number
let higherPayout
let lowerPayout

numberButton.addEventListener(`click`, pickNumber)
betSlider.addEventListener(`input`, changeBet)
higherButton.addEventListener(`click`, chooseHigher)
lowerButton.addEventListener(`click`, chooseLower)
playAgainButton.addEventListener(`click`, playAgain)

function pickNumber() {
  numberButton.disabled = true

  number = Math.floor(Math.random() * 10)
  numberParagraph.innerHTML = `The number is ${number}. Will the next number be higher or lower?`

  betParagraph.style.display = `inline-block`
  betSlider.style.display = `inline-block`

  changeBet()

  higherButton.style.display = `inline`
  lowerButton.style.display = `inline`
}

function changeBet() {
  betParagraph.innerHTML = `Bet: $${betSlider.value}`

  higherPayout = (10 / (9 - number)) * betSlider.value
  higherPayoutParagraph.innerHTML = `Payout for higher: $${higherPayout.toFixed(2)}`

  lowerPayout = (10 / number) * betSlider.value
  lowerPayoutParagraph.innerHTML = `Payout for lower: $${lowerPayout.toFixed(2)}`
}

function chooseHigher() {
  betSlider.disabled = true
  higherButton.disabled = true
  lowerButton.disabled = true

  let nextNumber = Math.floor(Math.random() * 10)

  if (nextNumber > number) {
    let amountWon = higherPayout - betSlider.value
    resultParagraph.innerHTML = `The next number is ${nextNumber}. You won $${amountWon.toFixed(2)}`

    money = money + amountWon
  } else {
    resultParagraph.innerHTML = `The next number is ${nextNumber}. You lost $${betSlider.value}`
    money = money - betSlider.value
  }

  moneyParagraph.innerHTML = `Money: $${money.toFixed(2)}`
  playAgainButton.style.display = `inline`
}

function chooseLower() {
  betSlider.disabled = true
  higherButton.disabled = true
  lowerButton.disabled = true

  let nextNumber = Math.floor(Math.random() * 10)

  if (nextNumber < number) {
    let amountWon = lowerPayout - betSlider.value
    resultParagraph.innerHTML = `The next number is ${nextNumber}. You won $${amountWon.toFixed(2)}`

    money = money + amountWon
  } else {
    resultParagraph.innerHTML = `The next number is ${nextNumber}. You lost $${betSlider.value}`
    money = money - betSlider.value
  }

  moneyParagraph.innerHTML = `Money: $${money.toFixed(2)}`
  playAgainButton.style.display = `inline`
}

function playAgain() {
  numberButton.disabled = false
  numberParagraph.innerHTML = ``

  betParagraph.style.display = `none`
  betSlider.style.display = `none`
  betSlider.disabled = false

  higherPayoutParagraph.innerHTML = ``
  lowerPayoutParagraph.innerHTML = ``

  higherButton.style.display = `none`
  higherButton.disabled = false

  lowerButton.style.display = `none`
  lowerButton.disabled = false

  resultParagraph.innerHTML = ``
  playAgainButton.style.display = `none`
}
