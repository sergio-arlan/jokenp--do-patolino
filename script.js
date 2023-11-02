const resultado = document.getElementById('result')

const imagem = document.querySelector('#image')

const contador = document.querySelector('#contador')

let yourNumber = 0
let patolinoNumber = 0

const playYour = (humanChoice) => {

    playTheGame(humanChoice, playpatolino())
}

const playpatolino = () => {
    const choice = ['stone', 'paper', 'scissors']
    const radomnumber = Math.floor(Math.random() * 3)
    return choice[radomnumber]
}

const playTheGame = (human, patolino) => {

    if (human === patolino) {
        resultado.innerHTML = "Deu Empate!"
        imagem.src = "./assets/patolino-pensativo.png"
        imagem.style = "width:250px; height:250px;"

    } else if (human === 'paper' && patolino === 'stone' ||
        human === 'scissors' && patolino === 'paper' ||
        human === 'stone' && patolino === 'scissors') {

        resultado.innerHTML = "Você Ganhou!"
        imagem.src = "./assets/patolino-raiva.png"
        imagem.style = "width:250px; height:250px;"

        yourNumber++

    }
    else {
        patolinoNumber++
        resultado.innerHTML = "O Patolino Ganhou!"
        imagem.src = "./assets/patolino-debochado.png"
        imagem.style = "width:250px; height:250px;"
    }

    contador.innerHTML = yourNumber + ":" + patolinoNumber

    if (yourNumber >= 5) {
        winner.classList.remove('none')
        winner.classList.add('center')
    }

    if (patolinoNumber >= 5) {
        loser.classList.remove('none')
        loser.classList.add('center')
    }

    setTimeout(() =>{
        playYour.disabled = false
        clear();
    },2000)
}

function clear(){
    imagem.src = ""
    resultado.innerHTML = ""
    resultado.innerHTML = "jogue novamente"
imagem.src = "./assets/jogue.png"
}

function newGame() {
    contador.innerHTML = "0:0"

    yourNumber = 0
    patolinoNumber = 0

    playTheGame()

    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove('center')

}
