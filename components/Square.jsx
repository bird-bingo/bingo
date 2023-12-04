import React from 'react';




const Square = ({row, col, boardState, setBoardState}) => {

  const onClickHelper = (row, col) => {
    // set the board state passing in the board and the modified value at the rowId and col 

    const newState = [...boardState];
    boardState[row][col] === 1 ? newState[row][col] = 0 : newState[row][col] = 1;
    setBoardState(newState); 
    checkForWinner();
  }


  const displayWinner = (axis, number) => {

    const allCells = document.querySelectorAll('.square > p')

    // horizontal bingo
    if (axis === "horizontal") {
      number = number * 5
      for (let i = 0; i < 5; i++) {
        let currSquare = allCells[i + number];
        currSquare.style.border = '10px solid black';
      }
    }

    // vertical bingo
    else if (axis === "vertical") {
      for (let i = 0; i < 5; i++) {
        let currSquare = allCells[i * 5 + number];
        currSquare.style.border = '10px solid black';
      }
    }

    // diagonal bingo
    else if (axis === "diagonal" && number === 0) {
      for (let i = 0; i < 5; i++) {
        let currSquare = allCells[i * 5 + i];
        currSquare.style.border = '10px solid black';
      }
    } else {
      for (let i = 4; i <= 20; i += 4) {
        console.log('formatting cell: ', i)
        let currSquare = allCells[i];
        currSquare.style.border = '10px solid black';
      }
    }
    const confettiWrapper = document.querySelector('.wrapper')
    console.log(confettiWrapper)
    if (confettiWrapper) {
      if (confettiWrapper.style) confettiWrapper.style.visibility = "visible";
    }
  }


  const checkForWinner = () => {
    console.log('check for winner')
    // check for winner horizontally
    for (let row = 0; row < 5; row++) {
      if (boardState[row].every(cell => cell === 1)){
        displayWinner("horizontal", row);
        return
      }
    }

    // check for winner vertically 
    for (let col = 0; col < 5; col++) {
      if (boardState.every(row => row[col] === 1)) {
        displayWinner("vertical", col);
        return
      }
    }
    
    // check for winner diagonally 
    if (boardState.every((row, col) => row[col] === 1)) {
      displayWinner("diagonal", 0);
      return 
    }
    if (boardState.every((row, col) => row[4 - col] === 1)) {
      displayWinner("diagonal", 1);
      return 
    }
  }

    return (
    <div key={"key" + row + col} className={boardState[row][col] ? "square clicked" : "square"} onClick={() => onClickHelper(row, col)}>
      <p></p> 
    </div>
    )
}

export default Square;