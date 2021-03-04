// import { TestScheduler } from 'rxjs/testing';
import MoviesReducer, { fetchMovies, fetchSuccessMovies, fetchFailedMovies, initialState } from '../Movies.slice';
import { movies, sortedDescendingMovies } from './Movies.fixtures';
import { orderByPopularity } from '../Movie.utils';
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

    describe('Utils', () => {
      it('should order by popularity in descending order', () => {
        const sorted = orderByPopularity(movies);
        const mappedMovies = [...sorted].map(({ popularity }) => ({ popularity }));
        expect(mappedMovies).toEqual([
          { popularity: 2407.318 },
          { popularity: 2119.969 },
          { popularity: 1362.714 },
          { popularity: 1267.391 },
          { popularity: 1175.056 },
          { popularity: 737.271 },
          { popularity: 719.222 },
          { popularity: 641.172 },
          { popularity: 541.71 },
          { popularity: 510.22 },
          { popularity: 458.087 },
          { popularity: 343.235 },
          { popularity: 271.001 },
          { popularity: 222.015 },
          { popularity: 219.665 },
          { popularity: 206.817 },
          { popularity: 203.367 },
          { popularity: 180.143 },
          { popularity: 135.304 },
          { popularity: 122.882 }
        ]);
      });
    });
  });
});
