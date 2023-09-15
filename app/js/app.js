const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');

const playerChoice = document.querySelector('#player');
const computerChoice = document.querySelector('#computer');

const results = document.querySelector('#results-msg');

const winStats = document.querySelector('#win-stats');
const loseStats = document.querySelector('#lose-stats');

const computerChoices = ['Rock', 'Paper', 'Scissors'];
let playerPicked;
let computerPicked;
let wins = 0;
let loses = 0;

results.textContent = '';

rockButton.addEventListener('click', () => {
	playerPicked = 0;
	playerChoice.textContent = `Player: Rock`;
	MainGame();
});

paperButton.addEventListener('click', () => {
	playerPicked = 1;
	playerChoice.textContent = `Player: Paper`;
	MainGame();
});

scissorsButton.addEventListener('click', () => {
	playerPicked = 2;
	playerChoice.textContent = `Player: Scissors`;
	MainGame();
});

MainGame = () => {
	computerPicked = Math.floor(Math.random() * computerChoices.length);
	computerChoice.textContent = `Computer: ${computerChoices[computerPicked]}`;
	PickWinner();
};

PickWinner = () => {
	if (playerPicked == 0 && computerPicked == 1) {
		results.textContent = `You Lose!`;
		loses++;
		loseStats.textContent = `${loses}`;
	} else if (playerPicked == 0 && computerPicked == 2) {
		results.textContent = `You Win!`;
		wins++;
		winStats.textContent = `${wins}`;
	} else if (playerPicked == 1 && computerPicked == 0) {
		results.textContent = `You Win!`;
		wins++;
		winStats.textContent = `${wins}`;
	} else if (playerPicked == 1 && computerPicked == 2) {
		results.textContent = `You Lose!`;
		loses++;
		loseStats.textContent = `${loses}`;
	} else if (playerPicked == 2 && computerPicked == 0) {
		results.textContent = `You Lose!`;
		loses++;
		loseStats.textContent = `${loses}`;
	} else if (playerPicked == 2 && computerPicked == 1) {
		results.textContent = `You Win!`;
		wins++;
		winStats.textContent = `${wins}`;
	} else if (playerPicked == computerPicked) {
		results.textContent = `Draw!`;
	}
};
