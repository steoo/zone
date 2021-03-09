import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setFilters } from '../movies/Movies.slice';
import { FiltersContainer, GenresContainer, VoteAverageContainer } from './Filters.styled';
import GenreComponent from '../genres/Genre.component';
import { Genre } from '../genres/Genres.slice';
import { RootState } from '../../app/store';

const Filters: FunctionComponent<{ genres: Genre[] }> = ({ genres }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => selectFilters(state));
  const [currentVoteAverage, setCurrentVoteAverage] = useState<number>(filters.avg);

  const handleOnAvgChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setCurrentVoteAverage(value);
  };

  /**
   * Every time either the genres or the currentVoteAverage changes
   * then we update the state. Possibly this could be debounced to avoid
   * flooding the server
   * */
  useEffect(() => {
    const action = setFilters({
      genres: genres.filter(({ isSelected }) => isSelected === true).map(({ id }) => id),
      avg: currentVoteAverage
    });

    dispatch(action);
  }, [dispatch, genres, currentVoteAverage]);

  return genres ? (
    <FiltersContainer>
      <GenresContainer>
        {genres.map(({ id }) => (
          <GenreComponent key={id} genreId={id} />
        ))}
      </GenresContainer>
      <VoteAverageContainer>
        <h3>Vote average: </h3>
        <input aria-label="number" type="number" value={currentVoteAverage} onChange={handleOnAvgChange} />
      </VoteAverageContainer>
    </FiltersContainer>
  ) : null;
};

export default Filters;
