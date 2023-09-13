import React from 'react';
import Square from './Square.jsx'

const Row = () => {

    const row = [];
    for (let i = 0; i < 5; i++) {
        row.push(<Square col={i}/>)
    }

    return (
    <div>
      {row}
    </div>
    )
}

export default Row;