import React from 'react';




const Menu = ({location, boardState, setBoardState, setSpeciesList, addBirdsToSquares}) => {

    const resetBoard = () => {

        setBoardState(Array(5).fill(0).map((v) => [v, v, v, v, v]));
        cleanWinner();

    }

    const cleanWinner = () => {
        const allCells = document.querySelectorAll('.square > p');

        for (let i = 0; i < allCells.length; i++) {
            let currSquare = allCells[i];
            currSquare.style.border = 'none';
        }
    }

    const newGame = () => {

        resetBoard();

        fetch(`/getBirds?location=${location}`)
            .then(res => res.json())
            .then(res => {
                setSpeciesList(res);
                addBirdsToSquares(res);
      })


    }

    return (
    <div className='menu'>
    <button onClick={resetBoard}>Reset board</button>
    <button onClick={newGame}>New game</button>
    </div>
    )
}

export default Menu;