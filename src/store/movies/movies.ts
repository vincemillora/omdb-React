import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface MoviesState {
  // movies data
  movies: Array<PaginatedMoviePayload>;
  totalCount: number;

  // search params
  title: string | null;
  currentPage: number;
}
interface PaginatedMoviePayload {
  totalCount?: number;
  pageNumber: number;
  items: Array<Movie>;
}
interface PageUpdatePayload {
  title?: string;
  pageNumber?: number;
}

// Initial state for movies store
const initialState: MoviesState = {
  movies: [],
  totalCount: 0,
  title: null,
  currentPage: 1,
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<PaginatedMoviePayload>) => {
      if (action.payload.totalCount) {
        state.totalCount = action.payload.totalCount;
      }
      state.movies.push({
        pageNumber: action.payload.pageNumber,
        items: action.payload.items,
      });
    },
    setTitle: (state, action: PayloadAction<PageUpdatePayload>) => {
      state.title = action.payload.title ? action.payload.title : null
    },
    setCurrentPage: (state, action: PayloadAction<PageUpdatePayload>) => {
      state.currentPage = action.payload.pageNumber ? action.payload.pageNumber : 1;
    },
    resetMoviesState: (state) => {
      state.title = null;
      state.currentPage = 1;
      state.totalCount = 0;
      state.movies = [];
    }
  },
})

export const { addMovies, resetMoviesState } = moviesSlice.actions;
export const selectMovie = (state: RootState) => state.movies.movies;
export default moviesSlice.reducer;