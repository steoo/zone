import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Genre {
  id: number;
  name: string;
}

interface GenresState {
  data: Genre[];
  isFetching: boolean;
  error?: any;
}

export const initialState: GenresState = {
  data: [],
  isFetching: false
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    fetchGenres: (state) => {
      state.isFetching = true;
    },
    fetchSuccessGenres: (state, action: PayloadAction<Genre[]>) => {
      state.data = state.data.concat(action.payload);
      state.isFetching = false;
    },
    fetchFailedGenres: (state, action) => {
      state.isFetching = false;
      state.data = [];
      state.error = true;
    }
  }
});

export const selectGenres = (state: RootState): Genre[] => state.genres.data;

export const { fetchGenres, fetchSuccessGenres, fetchFailedGenres } = genresSlice.actions;

export default genresSlice.reducer;
