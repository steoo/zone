import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenre, toggleIsSelected } from './Genres.slice';
import { RootState } from '../../app/store';
import { GenreContainer } from './Genre.styled';

const Genre: FunctionComponent<{ genreId: number }> = ({ genreId }) => {
  const dispatch = useDispatch();
  const genre = useSelector((state: RootState) => selectGenre(state, genreId));

  const toggleOnSelect = () => {
    if (genre) {
      dispatch(toggleIsSelected(genre.id));
    }
  };

  return genre ? (
    <GenreContainer onClick={toggleOnSelect} selected={genre.isSelected}>
      {genre.name}
    </GenreContainer>
  ) : null;
};

export default Genre;
