import { createEpicMiddleware, ActionsObservable, combineEpics, Epic, StateObservable } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moviesReducer from '../features/movies/Movies.slice';
import genresReducer from '../features/genres/Genres.slice';
import { counterEpic } from '../features/counter/Counter.epics';
import { moviesEpic } from '../features/movies/Movies.epics';
import { genresEpic } from '../features/genres/Genres.epics';

const epics: Epic[] = [counterEpic, moviesEpic, genresEpic];

const epicMiddleware = createEpicMiddleware({
  dependencies: { getJSON: ajax.getJSON }
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
    genres: genresReducer
  },
  middleware: [epicMiddleware]
});

const rootEpic = (action$: ActionsObservable<Action>, store$: StateObservable<any>, dependencies: any) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
