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
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select options={options} />
)

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
<NavBar/>
    </div>
  );
}
