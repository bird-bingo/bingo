import React, { useState, useEffect }from 'react';
import Menu from './Menu.jsx';

const states = {
    Alabama: 'US-AL',
    Alaska: 'US-AK',
    Arizona: 'US-AZ',
    Arkansas: 'US-AR',
    California: 'US-CA',
    Colorado: 'US-CO',
    Connecticut: 'US-CT',
    Delaware: 'US-DE',
    'District of Columbia': 'US-DC',
    Florida: 'US-FL',
    Georgia: 'US-GA',
    Hawaii: 'US-HI',
    Idaho: 'US-ID',
    Illinois: 'US-IL',
    Indiana: 'US-IN',
    Iowa: 'US-IA',
    Kansas: 'US-KS',
    Kentucky: 'US-KY',
    Louisiana: 'US-LA',
    Maine: 'US-ME',
    Maryland: 'US-MD',
    Massachusetts: 'US-MA',
    Michigan: 'US-MI',
    Minnesota: 'US-MN',
    Mississippi: 'US-MS',
    Missouri: 'US-MO',
    Montana: 'US-MT',
    Nebraska: 'US-NE',
    Nevada: 'US-NV',
    'New Hampshire': 'US-NH',
    'New Jersey': 'US-NJ',
    'New Mexico': 'US-NM',
    'New York': 'US-NY',
    'North Carolina': 'US-NC',
    'North Dakota': 'US-ND',
    Ohio: 'US-OH',
    Oklahoma: 'US-OK',
    Oregon: 'US-OR',
    Pennsylvania: 'US-PA',
    'Rhode Island': 'US-RI',
    'South Carolina': 'US-SC',
    'South Dakota': 'US-SD',
    Tennessee: 'US-TN',
    Texas: 'US-TX',
    Utah: 'US-UT',
    Vermont: 'US-VT',
    Virginia: 'US-VA',
    Washington: 'US-WA',
    'West Virginia': 'US-WV',
    Wisconsin: 'US-WI',
    Wyoming: 'US-WY',
  };


const Sidebar = ({location, setLocation, boardState, setBoardState, setSpeciesList, addBirdsToSquares}) => {


    const handleLocationChange = () => {
        if (range === 'range-by-state') setLocation(document.getElementById("location").value)
        else setLocation('')
    }

    const arrayOfStates = [];

    for (const state in states) {
        arrayOfStates.push(<option key={state} value={states[state]}>{state}</option>)
    }

    // const handleRangeChange = () => {
    //     console.log(this)
    // }

    const [range, setRange] = useState('range-by-state');
    


    return (
        <div>
            <h2>Game Play</h2>

            <div class="sidebar-box">
                <h3>Range</h3>

                <div id="range-circle">

                    <div onClick={(event) => {setRange(event.currentTarget.id); console.log(event)}} id="range-by-state" class={range === 'range-by-state' ? 'selected' : 'not-selected'}>
                        <div id="range-by-state-select">
                            <h4>Select your state</h4>
                            <select
                                id="location"
                                disabled={range === 'range-by-state' ? false : true}                                >
                                    <option defaultValue="" hidden>State</option>
                                    {arrayOfStates}
                                    
                            </select>

                        </div>
                    </div>

                    <div onClick={(event) => {setRange(event.currentTarget.id)}} id="range-all-birds" class={range === 'range-all-birds' ? 'selected' : 'not-selected'}>
                        <h4>Play all North American birds</h4>
                    </div>

                </div>
              
                <button id="go-button" onClick={handleLocationChange}>Go!</button>
            </div>

            <div class="sidebar-box">
                <h3>Set the board</h3>
                <Menu location={location} boardState={boardState} setBoardState={setBoardState} setSpeciesList={setSpeciesList} addBirdsToSquares={addBirdsToSquares}/>
            </div>
            
        </div>
    
    )
}

export default Sidebar;