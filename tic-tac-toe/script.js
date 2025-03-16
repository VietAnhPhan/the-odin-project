function gameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;
    const dropToken = (rowNumber, colNumber, player) => {
        const mark = board[rowNumber][colNumber];
        if (mark.getValue() == 0) {
            mark.addToken(player);
        }

    }
    // const printBoard = () => {
    //     const boardWithCellValues = board.map((row) => row.map(cell => cell.getValue()));
    //     console.log(boardWithCellValues);
    // }
    const getCellValues = () => board.map((row) => row.map(cell => cell.getValue()));

    const resetBoard = () => {
        board.forEach(row => row.map(cell => cell.resetValue()));
    };

    return {
        getBoard,
        dropToken,
        // printBoard,
        getCellValues,
        resetBoard
    };
}

function Cell() {
    let value = "";

    const getValue = () => value;
    const addToken = (player) => {
        value = player;
    }
    const resetValue = () => {
        value = "";
    }

    return {
        getValue,
        addToken,
        resetValue
    };
}

function gameController(playerOneName = "Player One", playerTwoName = "Player Two") {
    const board = gameBoard();
    const cells = board.getBoard();

    const players = [
        {
            name: playerOneName,
            token: "X"
        },
        {
            name: playerTwoName,
            token: "O"
        }
    ];

    let activePlayer = players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer == players[0] ? players[1] : players[0];
    }
    // const printNewRound = () => {
    //     board.printBoard();
    // }
    const getBoard = () => board.getBoard();
    const getActivePlayer = () => activePlayer;
    let whoWin = "";
    const getWin = () => whoWin;

    const playRound = (row, column) => {
        board.dropToken(row, column, getActivePlayer().token);


        if (checkWin(board.getCellValues())) {
            console.log(`${activePlayer.name}` + " Win!");
            // printNewRound();
            whoWin = activePlayer.name;
            return;
        }

        switchPlayerTurn();

    }


    console.log(board.getCellValues());
    // printNewRound();
    const checkWin = (arr) => {
        const winChecked = (array) => array.every(item => array[0] == item && array[0]);
        const hasSameRow = arr.some(row => winChecked(row));
        const hasSameCol = arr[0].some((col, index, array) => {
            return winChecked(arr.map(row => row[index]));
        });
        const mainDiagonal = winChecked(arr.map((row, index) => row[index]));
        console.log(arr.map((row, index) => row[index]));
        const antiDiagonal = winChecked(arr.map((row, index) => row[arr.length - 1 - index]));

        return hasSameRow || hasSameCol || mainDiagonal || antiDiagonal;
    }

    const resetGame = () => {
        board.resetBoard();
        activePlayer = players[0];
    }
    return {
        playRound,
        board,
        getBoard,
        getActivePlayer,
        getWin,
        resetGame
    };

}

// const game = gameController();



function screenController() {
    const game = gameController();
    const playerTurnDiv = document.querySelector(".turn");
    const boardDiv = document.querySelector(".board");
    const restartBtn = document.querySelector("button");


    const updateScreen = () => {
        boardDiv.textContent = "";

        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();
        playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;

        board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");

                cellButton.dataset.row = rowIndex;
                cellButton.dataset.column = colIndex;

                cellButton.textContent = cell.getValue();

                boardDiv.appendChild(cellButton);
            })
        })

    }

    boardDiv.addEventListener("click", clickHandler);
    function clickHandler(event) {
        const cellClicked = event.target;
        game.playRound(cellClicked.dataset.row, cellClicked.dataset.column);
        updateScreen();

        if (game.getWin()) {
            boardDiv.removeEventListener("click", clickHandler);
            playerTurnDiv.textContent = (`${game.getWin()}` + " Win!!!");
        }
    }
    updateScreen();

    restartBtn.addEventListener("click", resetBoard);
    function resetBoard() {
        boardDiv.textContent = "";
        game.resetGame();
        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();
        playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;

        board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");

                cellButton.dataset.row = rowIndex;
                cellButton.dataset.column = colIndex;

                cellButton.textContent = cell.getValue();

                boardDiv.appendChild(cellButton);
            })
        });
        boardDiv.addEventListener("click", clickHandler);
    }

}

screenController();

// function checkWin() {
//     const arr = [
//         [2, 0, 2],
//         [1, 1, 2],
//         [2, 1, 1]
//     ];

//     const winChecked = (array) => array.every(item => array[0] == item);
//     const hasSameRow = arr.some(row => winChecked(row));
//     const hasSameCol = arr[0].some((col, index, array) => {
//         return winChecked(arr.map(row => row[index]));
//     });
//     const mainDiagonal = winChecked(arr.map((row, index) => row[index]));
//     const antiDiagonal = winChecked(arr.map((row, index) => row[arr.length - 1 - index]));

//     return hasSameRow || hasSameCol || mainDiagonal || antiDiagonal;
// }

// console.log(checkWin());