const tryButton = document.querySelector(".tryButton")
const tryAgain = document.querySelector(".tryAgain")
const inputNumber = document.querySelector("#inputNumber")
const container = document.querySelector(".container")
const container2 = document.querySelector(".container2")
let text = document.querySelector(".container2 h1")

tryButton.addEventListener('click', function (event) {
    event.preventDefault()
    
    const randomNumber = Math.round(Math.random() * 10)
    let accountant = 1
    
    console.log(randomNumber)
    if(Number(inputNumber.value) == randomNumber) {
        container.classList.toggle("hide")
        container2.classList.toggle("hide")
        text = innerText = `Acertou em ${accountant} tentativas!`
    }
    accountant++
    console.log(accountant)
})

tryAgain.addEventListener('click', function(event) {
    event.preventDefault()
    container.classList.toggle("hide")
    container2.classList.toggle("hide")
    inputNumber.value = ""
})

