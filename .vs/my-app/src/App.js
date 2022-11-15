import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./custom.css";
import Authentication from './Projects/Components/Authentication';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Authentication />
      </header>
    </div>
  );
}
export default App;