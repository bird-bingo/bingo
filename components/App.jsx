import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import Menu from './Menu.jsx'


export default function App() {

  const [speciesList, setSpeciesList] = useState([]);
  const [boardState, setBoardState] = useState(Array(5).fill(0).map((v) => [v, v, v, v, v]));

  const addBirdsToSquares = (birdlist) => {
    const inputField = document.querySelectorAll('.square > p')

    for (let i = 0; i < inputField.length; i++) {
      let currSquare = inputField[i];
      currSquare.innerHTML = birdlist[i];
    }
  }

  const addHoverToSquares = () => {
    const style = document.createElement('style');
    style.innerHTML = `
    .square:hover {
      background-color: gold;
    }
    `;
    document.head.appendChild(style);
  }

  useEffect(() => {
    fetch('/getBirds')
      .then(res => res.json())
      .then(res => {
        setSpeciesList(res);
        addBirdsToSquares(res)
        addHoverToSquares();
        
      })
      .catch(err => console.log('App.componentDidMount frontend: get species data: ERROR: ', err));
  
  }, []);

  // useEffect(() => {

  // }, [boardState])

  // const addStylesToSquares = () => {
  //   const inputField = document.querySelectorAll('.square')

  //   for (let i = 0; i < inputField.length; i++) {
  //     let currSquare = inputField[i];
  //     currSquare.innerHTML = birdlist[i];
  //   }
  // }
  

return (
    <>
    <Board boardState={boardState} setBoardState={setBoardState}/>
    <Menu />
    </>
  )
}