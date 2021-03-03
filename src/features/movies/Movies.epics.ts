import { fetchMovies, fetchSuccessMovies, fetchFailedMovies } from './Movies.slice';
import { Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { API_URL } from '../../app/constants';
import { of } from 'rxjs';

// interface MoviesResponse {
//   results: Movie[];
// }

const moviesEpic: Epic = (action$, state$, { getJSON }) =>
  action$.pipe(
    filter(({ type }) => type === fetchMovies.type),
    mergeMap((action) =>
      getJSON(`${API_URL}/movies`).pipe(
        map((response: any) => fetchSuccessMovies(response.results)),
        catchError((error) => of(fetchFailedMovies(error)))
      )
    )
  );

export { moviesEpic };
