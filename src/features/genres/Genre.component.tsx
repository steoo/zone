import React, { FunctionComponent } from 'react';
import { selecteGenre } from './Genres.slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Genre: FunctionComponent<{ genreId: number }> = ({ genreId }) => {
  const genre = useSelector((state: RootState) => selecteGenre(state, genreId));

  return genre ? <div>{genre.name}</div> : null;
};

export default Genre;
