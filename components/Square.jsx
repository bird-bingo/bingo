import React from 'react';




const Square = ({rowId, col, boardState, setBoardState}) => {

  const onClickHelper = (rowId, col) => {
    // set the board state passing in the board and the modified value at the rowId and col 

    const newState = [...boardState];
    boardState[rowId][col] === 1 ? newState[rowId][col] = 0 : newState[rowId][col] = 1;
    setBoardState(newState); 
    console.log('clicked: ', boardState)
  }

    return (
    <div className={boardState[rowId][col] ? "square clicked" : "square"} onClick={() => onClickHelper(rowId, col)}>
      {boardState[rowId][col]}
      <p></p> 
    </div>
    )
}

export default Square;