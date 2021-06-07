import React from 'react';
import './App.css';
import Card from './Card';
import { Button } from "grommet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Button onClick={(()=>console.log("HI"))} primary label="Draw Card"/>
      </header>
    </div>
  );
}

export default App;
