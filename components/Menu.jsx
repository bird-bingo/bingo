import React from 'react';




const Menu = ({setSetUp, setLocation, location, boardState, setBoardState, setSpeciesList, addBirdsToSquares}) => {

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

    const backToStart = () => {
        setSetUp(true);
        resetBoard(); 
        // setLocation(''); // how can we get the location to persist? Right now, if you comment out this line, there is no new fetch call if/when you choose to play the same state 
    }

    return (
        <div className="menu-box">
            <h3>Set the board</h3>
            <div className='menu'>
                <button onClick={resetBoard}>Reset board</button>
                <button onClick={newGame}>New birds</button>
                <button onClick={backToStart}>Back to start</button>
            </div>
        </div>
    )
}

export default Menu;