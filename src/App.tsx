import React from 'react';
import './App.css';
import CardView from './app/card/CardView';
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
        <CardView />
        <p>{displayCount(count)}</p>
        <Button onClick={click} primary label="Draw Card"/>
      </header>
    </div>
  );
}

export default App;
