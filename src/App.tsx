import React from 'react';
import './App.css';
import CardView from './app/view/CardView';
import { Button } from "grommet";
import { useAppDispatch, useAppSelector } from './app/hooks';
import { nextCard } from './app/slices/deckSlice';

function App() {
  const dispatch = useAppDispatch();
  const deck = useAppSelector((state) => state.deck.deck);

  function click() {
    dispatch(nextCard());
  }

  return (
    <div className="App">
      <header className="App-header">
        <CardView />
        <p>Draw deck size: {useAppSelector((state) => state.deck.deck.getDrawDeckSize())}</p>
        <p>Discard deck size: {useAppSelector((state) => state.deck.deck.getDiscardSize())}</p>
        <Button onClick={click} primary label="Draw Card"/>
      </header>
    </div>
  );
}

export default App;
