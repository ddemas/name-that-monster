import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export enum ImageId {
    cat,
    react
}

interface CardState {
  image: ImageId
}

const initialState: CardState = {
  image: ImageId.react,
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    toggle: (state) => {
      state.image = (state.image === ImageId.react) ? ImageId.cat : ImageId.react;
    }
  },
})

export const { toggle } = cardSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCard = (state: RootState) => state.card.image

export default cardSlice.reducer