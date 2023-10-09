import React from 'react';




const Square = ({row, col, boardState, setBoardState}) => {

  const onClickHelper = (row, col) => {
    // set the board state passing in the board and the modified value at the rowId and col 

    const newState = [...boardState];
    boardState[row][col] === 1 ? newState[row][col] = 0 : newState[row][col] = 1;
    setBoardState(newState); 
    checkForWinner();
  }

  // const displayWinnerOnRow = (indexOfRow) => {

  //   const inputField = document.querySelectorAll('.square > p')

  //   let start = indexOfRow * 5;

  //   for (let i = start; i < start+5; i++) {
  //     let currSquare = inputField[i];
  //     currSquare.style.border = '10px solid black';
  //   }
  // }

  console.log(boardState)
  const displayWinner = (axis, number) => {

    const allCells = document.querySelectorAll('.square > p')

    for (cell of cells) {
      let currSquare = allCells[i];
      currSquare.style.border = '10px solid black';
    }
  }


  // const displayWinnerOnColumn = (indexOfRow) => {

  //   const inputField = document.querySelectorAll('.square > p')

  //   let start = indexOfRow * 5;

  //   for (let i = start; i < start+5; i++) {
  //     let currSquare = inputField[i];
  //     currSquare.style.border = '10px solid black';
  //   }
  // }

  // const displayWinnerOnRow = (indexOfRow) => {

  //   const inputField = document.querySelectorAll('.square > p')

  //   let start = indexOfRow * 5;

  //   for (let i = start; i < start+5; i++) {
  //     let currSquare = inputField[i];
  //     currSquare.style.border = '10px solid black';
  //   }
  // }

  const checkForWinner = () => {
    // check for winner horizontally

    for (let row = 0; row < 5; row++) {
      if (boardState[row].every(cell => cell === 1)){
        displayWinnerOnRow(row);
        return 
      }
    }
    // check for winner vertically 
    for (let col = 0; col < 5; col++) {
      if (boardState.every(row => row[col] === 1)) {
        console.log('winner')
        displayWinnerOnRow(row);
        return 
      }
    }
    // check for winner diagonally 
    if (boardState.every((row, col) => row[col] === 1)) {
      console.log('winner')
      return 
    }

    if (boardState.every((row, col) => row[4 - col] === 1)) {
      console.log('winner')
      return 
    }
  }

    return (
    <div className={boardState[row][col] ? "square clicked" : "square"} onClick={() => onClickHelper(row, col)}>
      <p></p> 
    </div>
    )
}

export default Square;