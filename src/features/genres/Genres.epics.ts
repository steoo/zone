import { Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { API_URL } from '../../app/constants';
import { fetchGenres, fetchSuccessGenres, fetchFailedGenres } from './Genres.slice';

const genresEpic: Epic = (action$, state$, { getJSON }) =>
  action$.pipe(
    filter(({ type }) => type === fetchGenres.type),
    mergeMap((action) =>
      getJSON(`${API_URL}/genres`).pipe(
        map((response: any) => fetchSuccessGenres(response)),
        catchError((error) => of(fetchFailedGenres(error)))
      )
    )
  );

export { genresEpic };
