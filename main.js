// Phrases List
const fortunePhrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
]

// Variables
const playScreen = document.querySelector(".play-screen")
const resultScreen = document.querySelector(".result-screen")
const fortuneCookieClick = document.querySelector("#fortune_cookie")
const resetButton = document.querySelector("#reset_button")
let randomNumber = Math.round(Math.random() * (fortunePhrases.length - 1))

// Events
fortuneCookieClick.addEventListener("click", handleFortuneClick)
resetButton.addEventListener("click", handleResetClick)
document.addEventListener("keydown", handleResetKey)

// Functions
function handleFortuneClick() {
  let showPhrase = fortunePhrases[randomNumber]
  resultScreen.querySelector("p").innerText = showPhrase
  toggleScreen()
}

function handleResetClick() {
  randomNumber = Math.round(Math.random() * (fortunePhrases.length - 1))
  toggleScreen()
}

function toggleScreen() {
  playScreen.classList.toggle("hide")
  resultScreen.classList.toggle("hide")
}

function handleResetKey(e) {
  if (e.key == "Enter" && playScreen.classList.contains("hide")) {
    handleResetClick()
  }
}
