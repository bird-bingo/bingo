import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import Menu from './Menu.jsx';
import MainMenu from './MainMenu.jsx';


export default function App() {

  const [speciesList, setSpeciesList] = useState([]);
  const [boardState, setBoardState] = useState(Array(5).fill(0).map((v) => [v, v, v, v, v]));

  const [location, setLocation] = useState('');

  const [setUp, setSetUp] = useState(true);

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
      background-color: #DC602E;
    }
    `;
    document.head.appendChild(style);
  }

  useEffect(() => {

    fetch(`/getBirds?location=${location}`)
      .then(res => res.json())
      .then(res => {
        setSpeciesList(res);
        addBirdsToSquares(res)
        addHoverToSquares();
        
      })
      .catch(err => console.log('App.componentDidMount frontend: get species data: ERROR: ', err));
  
  }, [location]);

return (
    <div id="container">
      {setUp ? 
        <MainMenu setSetUp={setSetUp} location={location} setLocation={setLocation} boardState={boardState} setBoardState={setBoardState} setSpeciesList={setSpeciesList} addBirdsToSquares={addBirdsToSquares}/>
        : 
        <div>
          <div className="board"><Board boardState={boardState} setBoardState={setBoardState}/></div>
          <Menu setSetUp={setSetUp} location={location} boardState={boardState} setBoardState={setBoardState} setSpeciesList={setSpeciesList} addBirdsToSquares={addBirdsToSquares}/>
        </div>
      }      
    </div>
  )
}