import React from 'react';
import './App.css';
import Card from './app/card/Card';
import { Button } from "grommet";
import { useAppDispatch, useAppSelector } from './app/hooks';
import { toggle } from './app/card/cardSlice';

function displayCount(count: number) {
  return count;
}

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  function click() {
    dispatch(toggle());
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <p>{displayCount(count)}</p>
        <Button onClick={click} primary label="Draw Card"/>
      </header>
    </div>
  );
}

export default App;
