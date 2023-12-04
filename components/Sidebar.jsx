import React from 'react';


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

const Sidebar = ({location, setLocation}) => {


    const handleLocationChange = () => {
        
        setLocation(document.getElementById("location").value)
    }

    const arrayOfStates = [];

    for (const state in states) {
        arrayOfStates.push(<option key={state} value={states[state]}>{state}</option>)
    }

    return (
        <div>
            <h2>This is my sidebar</h2>
            <label htmlFor="location">Location: </label>
            <select
                id="location"
                >
                    <option defaultValue="" hidden>Select your state</option>
                    {arrayOfStates}
                    
            </select>
            <button id="go-button" onClick={handleLocationChange}>Go!</button>
        </div>
    
    )
}

export default Sidebar;