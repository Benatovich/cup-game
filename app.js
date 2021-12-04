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

// const easyButton = document.getElementById('easy');
// const mediumButton = document.getElementById('medium');
// const hardButton = document.getElementById('hard');

// easyButton.addEventListener('click', () => {
//   resetCups();
//   clearStats();

// });


// let state
let wins = 0;
let losses = 0;
let total = 0;

const hidingPlaces = [
    'cup1',
    'cup2',
    'cup3',
];

// function getRandomItem(arr) {
//     const index = Math.floor(Math.random() * arr.length);
//     return arr[index];
// }

// function handleGuess(userGuess, correctSpot) {
//     resetCups();
//     const correctEl = document.getElementById(`${correctSpot}-container`);
//     correctEl.classList.add('face');
//     if (correctSpot === userGuess) {
//         wins++;
//     } else {
//         losses++;
//     }
//     showStats();
// }

function resetCups() {
    img1.src = './assets/cup.png';
    img2.src = './assets/cup.png';
    img3.src = './assets/cup.png';
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
    }
    if (losses === 0) {
        lossesEl.textContent = 0;
    } else {
        losses--;
        clearStats();
    }
    if (total === 0) {
        totalEl.textContent = 0;
    } else {
        total--;
        clearStats();
    }
}

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetCups();
    if (correctSpot === userGuess) {
        wins++;
    } else {
        losses++;
    }
    showStats();
}

// set event listeners
button1.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);
    const userGuess = 'cup1';
    handleGuess(userGuess, correctSpot);
});
button2.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);
    const userGuess = 'cup2';
    handleGuess(userGuess, correctSpot);
});
button3.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);
    const userGuess = 'cup3';
    handleGuess(userGuess, correctSpot);
});

// OLD EVENT LISTENERS
// button1.addEventListener('click', () => {
//     resetCups();
//     const randomCup = Math.floor(Math.random() * 3);
//     console.log(randomCup);

//     if (randomCup === 1) {
//         wins++;
//         img2.src = './assets/correct-cup.png';

//     } else if (randomCup === 0) {
//         img1.src = './assets/correct-cup.png';
//         losses++;
//     } else {
//         img3.src = './assets/correct-cup.png';
//         losses++;
//     }
//     showStats();});

// button2.addEventListener('click', () => {
//     resetCups();
//     const randomCup = Math.floor(Math.random() * 3);
//     console.log(randomCup);

//     if (randomCup === 1) {
//         wins++;
//         img2.src = './assets/correct-cup.png';

//     } else if (randomCup === 0) {
//         img1.src = './assets/correct-cup.png';
//         losses++;
//     } else {
//         img3.src = './assets/correct-cup.png';
//         losses++;
//     }
//     showStats();
// });

// button3.addEventListener('click', () => {
//     resetCups();
//     const randomCup = Math.floor(Math.random() * 3);
//     console.log(randomCup);

//     if (randomCup === 2) {
//         wins++;
//         img3.src = './assets/correct-cup.png';

//     } else if (randomCup === 1) {
//         img2.src = './assets/correct-cup.png';
//         losses++;
//     } else {
//         img1.src = './assets/correct-cup.png';
//         losses++;
//     }
//     showStats();
// });

resetButton.addEventListener('click', () => {
    resetCups();
});

clearButton.addEventListener('click', () => {
    clearStats();
});