import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import Select, { OptionTypeBase } from 'react-select';
import { setFilters } from '../movies/Movies.slice';
import { Genre } from '../genres/Genres.slice';
import { ValueType } from 'react-select/src/types';
import { useDispatch } from 'react-redux';

const Filters: FunctionComponent<{ genres: Genre[] }> = ({ genres }) => {
  const dispatch = useDispatch();
  const [currentGenres, setCurrentGenres] = useState<ValueType<OptionTypeBase, true>>([]);
  const [currentVoteAverage, setCurrentVoteAverage] = useState<number>(0);

  const options = genres.map(({ id, name }) => ({
    value: id,
    label: name
  }));

  const handleOnSelectChange = (options: ValueType<OptionTypeBase, true>) => {
    setCurrentGenres(options);
  };

  const handleOnAvgChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentVoteAverage(parseFloat(event.target.value));
  };

  useEffect(() => {
    dispatch(
      setFilters({
        genres: currentGenres.map(({ value }) => value),
        avg: currentVoteAverage
      })
    );
  }, [dispatch, currentGenres, currentVoteAverage]);

  return (
    <div>
      <input type="number" value={currentVoteAverage} onChange={handleOnAvgChange} />
      <Select options={options} isMulti onChange={handleOnSelectChange} value={currentGenres} />
    </div>
  );
};

export default Filters;
