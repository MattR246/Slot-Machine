// original logic. Each array is a row rather than a column

let middleRow = [];
let topRow = [];
let bottomRow = [];

let credits = 100; 
let currentCost = 1;

const winConditions = {
    top: false,
    middle: true,
    bottom: false,
    diagonal: false
}

const randomNumber = (min = 1, max = 6) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const topReelNumber = (randomNumber) => {
    return randomNumber === 1 ? 5 : randomNumber - 1;
}

const bottomReelNumber = (randomNumber) => {
    return randomNumber === 5 ? 1 : randomNumber + 1;
}

const randomizeReels = () => {
    middleRow = [];
    topRow = [];
    bottomRow = [];
    for (let i = 0; i < 3; i++) {
        let middle = randomNumber();
        middleRow.push(middle);
        if (i === 1) {
            topRow.push(bottomReelNumber(middle));
            bottomRow.push(topReelNumber(middle));
        } else {
            topRow.push(topReelNumber(middle));
            bottomRow.push(bottomReelNumber(middle));
        }
    }
}

const enableMiddle = () => {
    currentCost = 1;
    winConditions.top = false;
    winConditions.bottom = false;
    winConditions.diagonal = false;
}

const enableTopAndBottom = () => {
    currentCost = 2;
    winConditions.top = true;
    winConditions.bottom = true;
    winConditions.diagonal = false;
}

const enableDiagonal = () => {
    currentCost = 3;
    Object.keys(winConditions)
        .forEach(condition => winConditions[condition] = true);
}

const spinReels = () => {
    if (currentCost > credits) {
        alert('Not enough credits!')
    } else {
        credits -= currentCost;
        randomizeReels();
        let diagonalUpRow = [bottomRow[0], middleRow[1], topRow[2]];
        let diagonalDownRow = [topRow[0], middleRow[1], bottomRow[2]];
        //delete the next 4 lines once UI has been made.
        console.log('remaining credits:', credits)
        console.log(topRow); 
        console.log(middleRow); 
        console.log(bottomRow);
        if (currentCost === 1) {
            checkWin(middleRow);
        } else if (currentCost === 2) {
            checkWin(topRow, bottomRow);
        } else if (currentCost === 3) {
            checkWin(topRow, bottomRow, diagonalUpRow, diagonalDownRow);
        }
    }
}

const checkWin = (...rows) => {
    let verdict = rows.find(row => row.every((val, i, arr) => val === arr[0]))
    if (verdict) {
        prizeChecker(verdict[0]);
        console.log('Win!!!', credits);
    } else {
        console.log('Lose... try again')
    }
}

const prizeChecker = (win) => {
    switch (win) {
        case 1:
            credits += 15;
            break;
        case 2:
            credits += 15;
            break;
        case 3:
            credits += 15;
            break;
        case 4:
            credits += 30;
            break;
        case 5:
            credits += 50;
            break;
        default:
          return;
      }
}

randomizeReels();