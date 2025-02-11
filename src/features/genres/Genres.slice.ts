import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getGenreById } from './Genres.utils';

export interface Genre {
  id: number;
  name: string;
  isSelected?: boolean;
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
    },
    toggleIsSelected: (state, action: PayloadAction<number>) => {
      const genreId = action.payload;
      const genre = state.data.find(({ id }) => id === genreId);
      if (genre) {
        genre.isSelected = !genre.isSelected;
      }
    }
  }
});

export const selectGenres = (state: RootState): Genre[] => state.genres.data;
export const selectGenre = (state: RootState, genreId: number) => getGenreById(state.genres.data, genreId);

export const { fetchGenres, fetchSuccessGenres, fetchFailedGenres, toggleIsSelected } = genresSlice.actions;

export default genresSlice.reducer;
