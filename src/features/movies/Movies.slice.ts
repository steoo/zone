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
  filters: {
    genres: number[];
    avg: number;
  };
  error?: any;
}

export const initialState: MoviesState = {
  data: [],
  filters: {
    genres: [],
    avg: 0
  },
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
    },
    setFilters: (state, action: PayloadAction<{ genres: number[]; avg: number }>) => {
      state.filters = action.payload;
    }
  }
});

/**
 * The master selector for movies
 * We use the filters in the store to filter the movies and return it to the component
 *
 * */
export const selectMovies = (state: RootState): Movie[] => {
  if (!state.movies.data.length) {
    return state.movies.data;
  }

  const {
    filters: { genres, avg }
  } = state.movies;
  const movies = [...state.movies.data];

  const byGenre = genres.length ? filterByGenres(movies, genres) : movies;
  const byVoteAverage = filterByVoteAverage(byGenre, avg);

  return orderByPopularity(byVoteAverage);
};


export const { fetchMovies, fetchSuccessMovies, fetchFailedMovies, setFilters } = moviesSlice.actions;

export default moviesSlice.reducer;
