'use strict';

const board = document.querySelector(".board");

let matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let player = 'X';

//Practice: Add, one cell to the board and set an X in it.
//Hint: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
//Hint: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
//Hint: https://developer.mozilla.org/en-US/docs/Web/API/Element/className
//Hint: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML


const addRowToBoard = (board, rowClassName) => {
  const row = document.createElement("tr");
  board.appendChild(row);
  row.className = 'row' + rowClassName;
};


const addCellToRow = (row, cellClassName, cellValue) => {
  const cell = document.createElement("td");
  row.appendChild(cell);
  cell.className = cellClassName;
  cell.innerHTML = cellValue;
};


//-- Main code: Loop through the matrix and draw it’s values

const cellClassNameCreator = (rowIndex, columnIndex) => {
  return 'cell-' + rowIndex + '-' + columnIndex;
};

const renderBoard = (board, matrix) => {
  matrix.forEach((row, rowIndex) => {
    addRowToBoard(board, rowIndex);
    const rowElement = document.querySelector('.row' + rowIndex);
    row.forEach((item, itemIndex) => {
      let className = cellClassNameCreator(rowIndex, itemIndex);
      addCellToRow(rowElement, className, item);
    });
  });
};

// renderBoard(board, matrix);

//-- Main code: Setter

const setPlayer = () => {
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
};

const setMatrix = (matrix, position) => {
  let x = position[0];
  let y = position[1]
  if (player === 'X') {
    matrix[x].splice([y], 1, 'X');
  } else {
    matrix[x].splice([y], 1, 'O');
  }
  renderBoard(board, matrix);
};

//Test your solution
setMatrix(matrix, [0,1])

const addMove = () => {
  setMatrix(matrix, posotion);
  setPlayer();
}

//-- Main code: Event-listener

//Hint: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

const getPositionFromClass = (nodeClass) => {
  let currentPosition = [];
  currentPosition.push(parseInt(nodeClass.split('-')[1]));
  currentPosition.push(parseInt(nodeClass.split('-')[2]));
  console.log(currentPosition)
  return currentPosition;
};

const addEventListener = () => {
  board.addEventListener('click', (event) => {
    let className = event.target.className;
    getPositionFromClass(className);
  });
};

addEventListener();

//-- Main code: checker
// possible sepration: isEmptyPlace isAnyEmptyPlace isLineWin isAnyRowWin transposeTable isAnyColumnWin getDiagonals isAnyDiagonalWin
// check high https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const isLineWin = (matrix) => {

};

const isWon = () => {

};

const isGameOver = () => {

};

//-- Main code: Game //Invite the functions.
function actionOnEvent(nodeClass){}

//
