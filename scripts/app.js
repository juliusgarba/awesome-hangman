let game1
const puzzleDIV = document.querySelector('#puzzle');
const remainingDIV = document.querySelector('#guesses');

const render = () => {
    puzzleDIV.innerHTML = ''
    remainingDIV.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleDIV.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('3')
    game1 = new Hangman(puzzle, 5)
    render()
}

window.addEventListener('keypress', (e) => {

    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render()
})


document.querySelector('#reset').addEventListener('click', startGame)
startGame()