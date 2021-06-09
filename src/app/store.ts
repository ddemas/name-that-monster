import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './slices/cardSlice';
import counterReducer from "./slices/counterSlice";
import deckReducer from "./slices/deckSlice";

const store = configureStore({
  reducer: {
      counter: counterReducer,
      card: cardReducer,
      deck: deckReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;