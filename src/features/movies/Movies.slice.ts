import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { filterByGenres, filterByVoteAverage, orderByPopularity } from './Movies.utils';

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
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MoviesState {
  data: Movie[];
  isFetching: boolean;
  error?: any;
}

export const initialState: MoviesState = {
  data: [],
  isFetching: false
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies: (state) => {
      state.isFetching = true;
    },
    fetchSuccessMovies: (state, action: PayloadAction<Movie[]>) => {
      state.data = state.data.concat(action.payload);
      state.isFetching = false;
    },
    fetchFailedMovies: (state, action) => {
      state.isFetching = false;
      state.data = [];
      state.error = true;
    }
  }
});

export const selectMovies = (state: RootState): Movie[] => state.movies.data;

export const selectMoviesByPopularity = (state: RootState): Movie[] => {
  return orderByPopularity([...state.movies.data]);
};

export const filterMoviesByGenres = (state: RootState, genreIds: number[]) => {
  return filterByGenres([...state.movies.data], genreIds);
};

export const filterMoviesByVoteAverage = (state: RootState, voteAverage: number) => {
  return filterByVoteAverage([...state.movies.data], voteAverage);
};

export const { fetchMovies, fetchSuccessMovies, fetchFailedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
