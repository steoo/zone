import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MoviesState {
  movies: Movie[];
  isFetching: boolean;
  error?: any;
}

const initialState: MoviesState = {
  movies: [],
  isFetching: false
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies: (state) => {
      state.isFetching = true;
    },
    fetchSuccessMovies: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
      state.isFetching = false;
    },
    fetchErrorMovies: (state, action) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const { fetchMovies, fetchSuccessMovies, fetchErrorMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
