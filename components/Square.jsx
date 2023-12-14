import React from 'react';
import { SpinningCircles } from 'react-loading-icons'



const Square = ({row, col, boardState, setBoardState}) => {

  const onClickHelper = (row, col) => {
    // set the board state passing in the board and the modified value at the rowId and col 

    const newState = [...boardState];
    boardState[row][col] === 1 ? newState[row][col] = 0 : newState[row][col] = 1;
    setBoardState(newState); 
    checkForWinner();
  }


  const displayWinner = (axis, number) => {

    const allCells = document.querySelectorAll('.square')

    // horizontal bingo
    if (axis === "horizontal") {
      number = number * 5;
      for (let i = 0; i < 5; i++) {
        let currSquare = allCells[i + number];
        currSquare.style.background = 'linear-gradient(45deg, #05a8aa, #d7b49e)';
      }
    }

    // vertical bingo
    else if (axis === "vertical") {
      for (let i = 0; i < 5; i++) {
        let currSquare = allCells[i * 5 + number];
        currSquare.style.background = 'linear-gradient(45deg, #05a8aa, #d7b49e)';
      }
    }

    // diagonal bingo
    else if (axis === "diagonal" && number === 0) {
      for (let i = 0; i < 5; i++) {
        let currSquare = allCells[i * 5 + i];
        currSquare.style.background = 'linear-gradient(45deg, #05a8aa, #d7b49e)';
      }
    } else {
      for (let i = 4; i <= 20; i += 4) {
        console.log('formatting cell: ', i)
        let currSquare = allCells[i];
        currSquare.style.border = '10px solid black';
      }
    }
    // show confetti for a duration
    const confettiWrapper = document.querySelector('.wrapper')
    confettiWrapper.style.visibility = "visible";
    setTimeout(() => {
      const confettiWrapper = document.querySelector('.wrapper')
      confettiWrapper.style.visibility = "hidden";
    }, 15000);
  }


  const checkForWinner = () => {
    // check for winner horizontally
    for (let row = 0; row < 5; row++) {
      if (boardState[row].every(cell => cell === 1)){
        displayWinner("horizontal", row);
      }
    }

    // check for winner vertically 
    for (let col = 0; col < 5; col++) {
      if (boardState.every(row => row[col] === 1)) {
        displayWinner("vertical", col);
      }
    }
    
    // check for winner diagonally 
    if (boardState.every((row, col) => row[col] === 1)) {
      displayWinner("diagonal", 0);
    }
    if (boardState.every((row, col) => row[4 - col] === 1)) {
      displayWinner("diagonal", 1);
    }
  }

    return (
    <div key={"key" + row + col} className={boardState[row][col] ? "square clicked" : "square"} onClick={() => onClickHelper(row, col)}>
      <SpinningCircles className="animation"/>
      <p></p> 
    </div>
    )
}

export default Square;