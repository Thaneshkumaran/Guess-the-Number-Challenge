let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const message = document.getElementById('message');
    const tries = document.getElementById('tries');
    guessCount++;

    if (userGuess == randomNumber) {
        message.textContent = 'Congratulations! You guessed the number!';
        message.style.color = 'green';
        tries.textContent = `It took you ${guessCount} tries.`;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('tries').textContent = '';
    document.getElementById('userGuess').value = '';
}
