import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import Menu from './Menu.jsx';
import MainMenu from './MainMenu.jsx';
import SignIn from './SignIn.jsx'


export default function App() {

  const [speciesList, setSpeciesList] = useState([]);
  const [boardState, setBoardState] = useState(Array(5).fill(0).map((v) => [v, v, v, v, v]));

  const [location, setLocation] = useState('');

  const [setUp, setSetUp] = useState(true);

  const addBirdsToSquares = (birdlist) => {
    // remove animation
    document.querySelectorAll('.animation').forEach((animation) => animation.remove());

    const inputField = document.querySelectorAll('.square > p')

    for (let i = 0; i < inputField.length; i++) {
      let currSquare = inputField[i];
      currSquare.innerHTML = birdlist[i];
    }
  }

  const addHoverToSquares = () => {

    const squares = document.querySelectorAll('.square')

    for (let i = 0; i < squares.length; i++) {
      let curr = squares[i];
      curr.classList.add("square-hov");
    };
  }

  useEffect(() => {

    if (setUp === false) {
      fetch(`/getBirds?location=${location}`)
      .then(res => res.json())
      .then(res => {
        setSpeciesList(res);
        addBirdsToSquares(res);        
      })
      .then(() => {
        addHoverToSquares();
      })
      .catch(err => console.log('App.componentDidMount frontend: get species data: ERROR: ', err));
    }
  
  }, [setUp]); // we only need this to run when we are rendering the board, i.e. not when we are going back to the mainmenu page. thus the conditional. Is there a better way of doing this?  

return (
    <div id="container">
      {setUp ? 
        <>
          <MainMenu setSetUp={setSetUp} location={location} setLocation={setLocation} boardState={boardState} setBoardState={setBoardState} setSpeciesList={setSpeciesList} addBirdsToSquares={addBirdsToSquares}/>
        </>
        : 
        <div>
          <div className="board"><Board boardState={boardState} setBoardState={setBoardState}/></div>
          <Menu addHoverToSquares={addHoverToSquares} setSetUp={setSetUp} location={location} setLocation={setLocation} boardState={boardState} setBoardState={setBoardState} setSpeciesList={setSpeciesList} addBirdsToSquares={addBirdsToSquares}/>
        </div>
      }      
    </div>
  )
}