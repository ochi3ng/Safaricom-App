import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import BodyFooter from './components/BodyFooter';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Body/>
    <BodyFooter/>
    </div>
  );
}

export default App;
