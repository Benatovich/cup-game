// import functions and grab DOM elements
const button1 = document.getElementById('cup-one-button');
const button2 = document.getElementById('cup-two-button');
const button3 = document.getElementById('cup-three-button');
const img1 = document.getElementById('cup-one-img');
const img2 = document.getElementById('cup-two-img');
const img3 = document.getElementById('cup-three-img');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');
const resetButton = document.getElementById('reset');
const clearButton = document.getElementById('clear');

// let state
let wins = 0;
let losses = 0;
let total = 0;

function resetCups() {
  img1.src = './assets/cup.png'
  img2.src = './assets/cup.png'
  img3.src = './assets/cup.png'
}

function showStats() {
  winsEl.textContent = wins;
  lossesEl.textContent = losses;
  totalEl.textContent = wins + losses;
}

function clearStats() {
  if (wins === 0) {
    winsEl.textContent = 0;
  } else {
    wins--;
    clearStats();
  };
  if (losses === 0) {
    lossesEl.textContent = 0;
  } else {
    losses--;
    clearStats();
  };
  if (total === 0) {
    totalEl.textContent = 0;
  } else {
    total--;
    clearStats();
  }
  }


// set event listeners 
button1.addEventListener('click', () => {
  resetCups();
  const randomCup = Math.floor(Math.random() * 3);
  console.log(randomCup);

  if (randomCup === 0) {
    wins++;
    img1.src = './assets/correct-cup.png';

  } else if (randomCup === 1) {
    img2.src = './assets/correct-cup.png';
    losses++;
  } else {
    img3.src = './assets/correct-cup.png';
    losses++;
  }
  showStats();
});

button2.addEventListener('click', () => {
  resetCups();
  const randomCup = Math.floor(Math.random() * 3);
  console.log(randomCup);

  if (randomCup === 1) {
    wins++;
    img2.src = './assets/correct-cup.png';

  } else if (randomCup === 0) {
    img1.src = './assets/correct-cup.png';
    losses++;
  } else {
    img3.src = './assets/correct-cup.png';
    losses++;
  }
  showStats();
});

button3.addEventListener('click', () => {
  resetCups();
  const randomCup = Math.floor(Math.random() * 3);
  console.log(randomCup);

  if (randomCup === 2) {
    wins++;
    img3.src = './assets/correct-cup.png';

  } else if (randomCup === 1) {
    img2.src = './assets/correct-cup.png';
    losses++;
  } else {
    img1.src = './assets/correct-cup.png';
    losses++;
  }
  showStats();
});

resetButton.addEventListener('click', () => {
  resetCups();
});

clearButton.addEventListener('click', () => {
  clearStats();
})