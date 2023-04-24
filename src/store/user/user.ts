import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface UserState {
  favorites: Array<Movie>;
  searchedTitles: Array<string>;
}
interface UserUpdatePayload {
  movie?: Movie;
  searchedTitle?: string;
}

// Initial state for movies store
const initialState: UserState = {
  favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites") as string) : [],
  searchedTitles: localStorage.getItem("searchedTitles") ? JSON.parse(localStorage.getItem("searchedTitles") as string) : [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<UserUpdatePayload>) => {
      if (action.payload.movie) {
        state.favorites.push(action.payload.movie);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action: PayloadAction<UserUpdatePayload>) => {
      if (action.payload.movie) {
        state.favorites = state.favorites.filter((item) => item.imdbID !== action.payload.movie?.imdbID);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    addToSearchedTitles: (state, action: PayloadAction<UserUpdatePayload>) => {
      if (action.payload.searchedTitle && !state.searchedTitles.includes(action.payload.searchedTitle)) {
        // push searched title to the beginning of the array so latest searched title is always first on display
        state.searchedTitles.unshift(action.payload.searchedTitle);
        // Keep only 10 last searched titles
        if (state.searchedTitles.length > 10) {
          state.searchedTitles.splice(10, state.searchedTitles.length - 10);
        }
        localStorage.setItem("searchedTitles", JSON.stringify(state.searchedTitles));
      }
    },
  },
})

export const { addToFavorites, removeFromFavorites, addToSearchedTitles } = userSlice.actions;
export const selectFavorite = (state: RootState) => state.user.favorites;
export default userSlice.reducer;