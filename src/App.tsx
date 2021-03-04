import React, { FunctionComponent, useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { fetchGenres, selectGenres } from './features/genres/Genres.slice';
import { fetchMovies, selectMovies } from './features/movies/Movies.slice';
import Movies from './features/movies/Movies.component';
import Filters from './features/filters/Filters.component';

/**
 * AppComponent
 *
 * This component contains the whole app
 * */
const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);

  useEffect(() => {
    /**
     * Bootstrap for this component fetch all you need for the whole application
     * This side-effect uses `batch` to avoid pushing two actions one after the other
     * */
    batch(() => {
      dispatch(fetchMovies());
      dispatch(fetchGenres());
    });
  }, [dispatch]);

  return (
    <div>
      {genres && <Filters genres={genres} />}
      {movies && <Movies movies={movies} />}
    </div>
  );
};

export default App;
