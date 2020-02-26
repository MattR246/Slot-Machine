const randomNumber = (min = 1, max = 6) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const topReelNumber = randomNumber => {
    return randomNumber === 1 ? 5 : randomNumber - 1;
}

const bottomReelNumber = randomNumber => {
    return randomNumber === 5 ? 1 : randomNumber + 1;
}

let middleNumber = randomNumber();
//each item in reels is a reel
export let reels = [
    [
        topReelNumber(middleNumber),
        middleNumber,
        bottomReelNumber(middleNumber)
    ],
    [
        bottomReelNumber(middleNumber),
        middleNumber,
        topReelNumber(middleNumber)
    ],
    [
        topReelNumber(middleNumber),
        middleNumber,
        bottomReelNumber(middleNumber)
    ]
]

export let credits = 100; 
let currentCost = 1;

export const winConditions = {
    top: false,
    middle: true,
    bottom: false,
    diagonal: false
}

const randomizeReels = () => {
    reels = [
        [],
        [],
        []
    ];
    reels.forEach(reel => {
        middleNumber = randomNumber();
        reel.push(middleNumber);
        reel.push(bottomReelNumber(middleNumber));
        reel.unshift(topReelNumber(middleNumber));
    });
    reels[1].reverse();
    return reels;
};

// possible logic for individual reel movement
// const randomReel = (reel) => {
//     middleNumber = randomNumber();
//     reel.push(middleNumber);
//     reel.push(bottomReelNumber(middleNumber));
//     reel.unshift(topReelNumber(middleNumber));
//     return reel;
// }

export const enableMiddle = () => {
    currentCost = 1;
    winConditions.top = false;
    winConditions.bottom = false;
    winConditions.diagonal = false;
}

export const enableTopAndBottom = () => {
    currentCost = 2;
    winConditions.top = true;
    winConditions.bottom = true;
    winConditions.diagonal = false;
}

export const enableDiagonal = () => {
    currentCost = 3;
    Object.keys(winConditions)
        .forEach(condition => winConditions[condition] = true);
}

export const spinReels = () => {
    if (currentCost > credits) {
        alert('Not enough credits!')
    } else {
        credits -= currentCost;
        reels = randomizeReels();
        //defines the reels
        let diagonalUpRow = [reels[0][0], reels[1][1], reels[2][2]];
        let diagonalDownRow = [reels[0][2], reels[1][1], reels[2][0]];
        let middleRow = [reels[0][1], reels[1][1], reels[2][1]];
        let topRow = [reels[0][2], reels[1][2], reels[2][2]];
        let bottomRow = [reels[0][0], reels[1][0], reels[2][0]]; 
        //delete the next 4 lines once UI has been made.
        // console.log('remaining credits:', credits)
        // console.log('top', topRow); 
        // console.log('mid', middleRow); 
        // console.log('bot', bottomRow); 
        if (currentCost === 1) {
            checkWin(middleRow);
        } else if (currentCost === 2) {
            checkWin(topRow, bottomRow);
        } else if (currentCost === 3) {
            checkWin(topRow, bottomRow, diagonalUpRow, diagonalDownRow);
        }
        return reels;
    }
}

const checkWin = (...rows) => {
    let verdict = rows.find(row => row.every((val, i, arr) => val === arr[0]))
    if (verdict) {
        prizeChecker(verdict[0]);
        alert(`Win!!!`);
    } else {
        console.log('Lose... try again')
    }
}

const prizeChecker = win => {
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

const images = [
    {
        id: 1,
        image: 'image'
    },
    {
        id: 2,
        image: 'image'
    },
    {
        id: 3,
        image: 'image'
    },
    {
        id: 4,
        image: 'image'
    },
    {
        id: 5,
        image: 'image'
    }
]