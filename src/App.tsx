import React, { FunctionComponent, useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { fetchGenres, selectGenres } from './features/genres/Genres.slice';
import { fetchMovies, selectMovies, selectSlice } from './features/movies/Movies.slice';
import Movies from './features/movies/Movies.component';
import Filters from './features/filters/Filters.component';
import { ErrorMessage } from './features/global.styles';

/**
 * AppComponent
 *
 * This component contains the entire app
 * */
const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(selectSlice);
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

  /**
   * We handle the error situation just for the movies and let it
   * fail gracefully in case the genres request raises an error.
   * This is because even if the user is not able to filter the movies
   * it's still possible to see some content
   *
   * */
  return (
    <main>
      {error ? (
        <ErrorMessage>Something went wrong :(</ErrorMessage>
      ) : (
        <>
          {genres && <Filters genres={genres} />}
          {movies && <Movies movies={movies} />}
        </>
      )}
    </main>
  );
};

export default App;
