import React from 'react';
import Square from './Square.jsx'

const Row = (props) => {

  const rowId = props.row;
  const boardState = props.boardState;
  const setBoardState = props.setBoardState;

    const row = [];
    for (let i = 0; i < 5; i++) {
        row.push(<Square rowId={rowId} col={i} boardState={boardState} setBoardState={setBoardState}/>)
    }

    return (
    <div>
      {row}
    </div>
    )
}

export default Row;