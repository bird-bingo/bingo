import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import Menu from './Menu.jsx'


export default function App() {

  const [speciesList, setSpeciesList] = useState([])
    
  useEffect(() => {
    fetch('https://api.ebird.org/v2/data/obs/US-CA-001/recent', {
      headers: {"x-ebirdapitoken": "k35m7c131mkp"}})
      .then(res => res.json())
      .then(res => {

        const list = res.map(item => item.comName);
        setSpeciesList(list);
        
      })
      .catch(err => console.log('App.componentDidMount: get species data: ERROR: ', err));

  }, []);

  console.log('species list', speciesList)

return (
    <> 
    <Board />
    <Menu />
    </>
  )
}