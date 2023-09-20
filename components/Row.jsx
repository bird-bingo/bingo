import React from 'react';
import Square from './Square.jsx'

const Row = ({row, boardState, setBoardState}) => {

    const currRow = [];
    for (let i = 0; i < 5; i++) {
        currRow.push(<Square row={row} col={i} boardState={boardState} setBoardState={setBoardState}/>)
    }

    return (
    <div>
      {currRow}
    </div>
    )
}

export default Row;