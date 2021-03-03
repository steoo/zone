// import { TestScheduler } from 'rxjs/testing';
import MoviesReducer, { fetchMovies, fetchSuccessMovies, fetchFailedMovies, initialState } from '../Movies.slice';
import { movies } from './Movies.fixtures';
// import { moviesEpic } from '../Movies.epics';

/*const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

testScheduler.run(({ hot, cold, expectObservable }) => {
  const action$ = hot('-a', {
    a: fetchMovies()
  });

  const state$ = null;
  const dependencies = {
    getJSON: (url: string) =>
      cold('--a', {
        a: { url }
      })
  };

  const output$ = moviesEpic(action$, state$, dependencies);
  
  expectObservable(output$).toBe('---a', {
    a: {
      type: 'FETCH_USER_FULFILLED',
      response: {
        url: 'https://api.github.com/users/123'
      }
    }
  });
});*/

describe('Features', () => {
  describe('Movies', () => {
    describe('Slice', () => {
      it('should set isFetching to true when fetchMovies is dispatched', () => {
        const state = { ...initialState };
        const action = fetchMovies();

        expect(MoviesReducer(state, action)).toEqual({
          ...initialState,
          isFetching: true
        });
      });

      it('should set isFetching to false and a response when fetchSuccessMovies is dispatched', () => {
        const state = { ...initialState };
        const action = fetchSuccessMovies(movies);

        expect(MoviesReducer(state, action)).toEqual({
          isFetching: false,
          data: movies
        });
      });

      it('should set isFetching to false and an error when fetchFailedMovies is dispatched', () => {
        const state = { ...initialState };
        const action = fetchFailedMovies({});

        expect(MoviesReducer(state, action)).toEqual({
          isFetching: false,
          data: [],
          error: true
        });
      });
    });
  });
});
