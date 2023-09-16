import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import Menu from './Menu.jsx'


export default function App() {

  const [speciesList, setSpeciesList] = useState([]);

  const addBirdsToSquares = (birdlist) => {
    const inputField = document.querySelectorAll('.square > p')
    console.log('inputField: ', inputField)

    for (let i = 0; i < inputField.length; i++) {
      let currSquare = inputField[i];
      currSquare.innerHTML = birdlist[i];
    }
  }

  useEffect(() => {
    fetch('/getBirds')
      .then(res => res.json())
      .then(res => {
        setSpeciesList(res);
        addBirdsToSquares(res)
        
      })
      .catch(err => console.log('App.componentDidMount frontend: get species data: ERROR: ', err));
  
  }, []);

  console.log('species list', speciesList)

return (
    <> 
    <Board />
    <Menu />
    </>
  )
}