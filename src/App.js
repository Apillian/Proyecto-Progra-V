import './App.css';
import React from 'react';
import {BrowserRouter as Router,
  Route,
Redirect,
Switch} from 'react-router-dom';
import { Component } from 'react'
import Select from 'react-select'
import { useState } from 'react';
import NavBar from './components/NavBar';


const options = [
  { value: 'Zona 1', label: 'Zona1' },
  { value: 'Zona 2', label: 'Zona2' },
  { value: 'Zona 3', label: 'Zona3' },
  { value: 'Zona 4', label: 'Zona4' },
  { value: 'Zona 5', label: 'Zona5' },
  { value: 'Zona 6', label: 'Zona6' },
  { value: 'Zona 7', label: 'Zona7' },
  { value: 'Zona 10', label: 'Zona10' },
  { value: 'Zona 16', label: 'Zona16' }
]

const MyComponent = () => (
  <Select options={options} />
)

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <NavBar>
      </NavBar>
<table className = 'tablas'>
  <tr>
    <td>
    <Select className='Selectin'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </td>

  </tr>
  <tr>
    <button className='buton1'>
      Escoger esta Zona
    </button>
  </tr>
</table>
    </div>


  );
}
