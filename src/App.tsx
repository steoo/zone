import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Counter } from './features/counter/Counter';
import { fetchMovies, selectMovies } from './features/movies/Movies.slice';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
};

export default App;
