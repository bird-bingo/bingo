import React, { useState, useEffect }from 'react';
import Menu from './Menu.jsx';

const states = {
    AL: 'US-AL',
    AK: 'US-AK',
    AZ: 'US-AZ',
    AR: 'US-AR',
    CA: 'US-CA',
    CO: 'US-CO',
    CT: 'US-CT',
    DE: 'US-DE',
    DC: 'US-DC',
    FL: 'US-FL',
    GA: 'US-GA',
    HI: 'US-HI',
    ID: 'US-ID',
    IL: 'US-IL',
    IN: 'US-IN',
    IA: 'US-IA',
    KS: 'US-KS',
    KY: 'US-KY',
    LA: 'US-LA',
    ME: 'US-ME',
    MD: 'US-MD',
    MA: 'US-MA',
    MI: 'US-MI',
    MN: 'US-MN',
    MS: 'US-MS',
    MO: 'US-MO',
    MT: 'US-MT',
    NE: 'US-NE',
    NV: 'US-NV',
    NH: 'US-NH',
    NJ: 'US-NJ',
    NM: 'US-NM',
    NY: 'US-NY',
    NC: 'US-NC',
    ND: 'US-ND',
    OH: 'US-OH',
    OK: 'US-OK',
    OR: 'US-OR',
    PA: 'US-PA',
    RI: 'US-RI',
    SC: 'US-SC',
    SD: 'US-SD',
    TN: 'US-TN',
    TX: 'US-TX',
    UT: 'US-UT',
    VT: 'US-VT',
    VA: 'US-VA',
    WA: 'US-WA',
    WV: 'US-WV',
    WI: 'US-WI',
    WY: 'US-WY',
  };


const MainMenu = ({setSetUp, location, setLocation, boardState, setBoardState, setSpeciesList, addBirdsToSquares}) => {


    const [range, setRange] = useState('range-by-state');
    const handleLocationChange = () => {
        if (range === 'range-by-state') setLocation(document.getElementById("location").value)
        else setLocation('')

        setSetUp(false);
    }

    const arrayOfStates = [];

    for (const state in states) {
        arrayOfStates.push(<option key={state} value={states[state]}>{state}</option>)
    } 


    return (
        <div>
            <h2>Game Play</h2>

            <div className="menu-box">
                <h3>Range</h3>

                <div id="range-circle">

                    <div onClick={(event) => {setRange(event.currentTarget.id); console.log(event)}} id="range-by-state" className={range === 'range-by-state' ? 'selected' : 'not-selected'}>
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

                    <div onClick={(event) => {setRange(event.currentTarget.id)}} id="range-all-birds" className={range === 'range-all-birds' ? 'selected' : 'not-selected'}>
                        <h4>Play all North American birds</h4>
                    </div>

                </div>
              
                <button id="go-button" onClick={handleLocationChange}>Go!</button>
            </div>
            
        </div>
    
    )
}

export default MainMenu;