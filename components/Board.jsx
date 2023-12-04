import React from 'react';
import Square from './Square.jsx';
import Row from './Row.jsx';

const Board = ({boardState, setBoardState}) => {

  const board = []
  for (let row = 0; row < 5; row++) {
    board.push(<Row className="row" key={'row' + row} row={row} boardState={boardState} setBoardState={setBoardState}/>)
  }

    return (
      // return 5x5 squares
      board
    )
}

export default Board;