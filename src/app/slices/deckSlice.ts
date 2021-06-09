import { createSlice } from '@reduxjs/toolkit'
import Deck from '../model/Deck'

// Define a type for the slice state
interface DeckState {
  deck: Deck
}

// Define the initial state using that type
const initialState: DeckState = {
  deck: new Deck(),
}

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    nextCard: (state) => {
        const card = state.deck.getTopCard();
        state.deck.discard(card);
    },
    reset: (state) => {
        state.deck.resetDecks();
    }
  },
})

export const { nextCard, reset } = deckSlice.actions

export default deckSlice.reducer