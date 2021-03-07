import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../movies/Movies.slice';
import { FiltersContainer, GenresContainer, VoteAverageContainer } from './Filters.styled';
import GenreComponent from '../genres/Genre.component';
import { Genre } from '../genres/Genres.slice';

const Filters: FunctionComponent<{ genres: Genre[] }> = ({ genres }) => {
  const dispatch = useDispatch();
  const [currentVoteAverage, setCurrentVoteAverage] = useState<number>(0);

  const handleOnAvgChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setCurrentVoteAverage(value);
  };

  useEffect(() => {
    dispatch(
      setFilters({
        genres: genres.filter(({ isSelected }) => isSelected === true).map(({ id }) => id),
        avg: currentVoteAverage
      })
    );
  }, [dispatch, genres, currentVoteAverage]);

  return (
    <FiltersContainer>
      <GenresContainer>
        {genres.map(({ id }) => (
          <GenreComponent key={id} genreId={id} />
        ))}
      </GenresContainer>
      <VoteAverageContainer>
        <h3>Vote average: </h3>
        <input type="number" value={currentVoteAverage} onChange={handleOnAvgChange} />
      </VoteAverageContainer>
    </FiltersContainer>
  );
};

export default Filters;
